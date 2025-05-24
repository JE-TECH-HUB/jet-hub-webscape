require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool, setupDatabase } = require('./db');
const auth = require('./middleware/auth');
const { validateRegister, validateLogin } = require('./middleware/validate');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const TOKEN_EXPIRY = '24h';
const REFRESH_TOKEN_EXPIRY = '7d';

// Initialize database
setupDatabase().catch(console.error);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory databases as fallback
const users = [
  {
    id: 1,
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@example.com',
    password: '$2a$10$XFE3UJp8aVsJvnEcKRPImO3ZHuZ8nTnxReCZr1UBJcR6MoN1akNvG',
    course: 'Software Development',
    registrationDate: '2024-05-01T10:30:00Z',
    lastLogin: '2024-05-03T08:45:00Z',
    role: 'user'
  },
  {
    id: 2,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@jetechhub.com',
    password: '$2a$10$XFE3UJp8aVsJvnEcKRPImO3ZHuZ8nTnxReCZr1UBJcR6MoN1akNvG',
    course: 'Administration',
    registrationDate: '2024-05-01T10:30:00Z',
    lastLogin: '2024-05-03T08:45:00Z',
    role: 'admin'
  }
];

const deliveries = [];
const gadgets = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    category: 'phones',
    price: '85000',
    description: 'Latest iPhone with advanced camera system',
    status: 'available',
    dateAdded: '2024-05-01T10:30:00Z'
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    category: 'laptops',
    price: '150000',
    description: 'Ultra-thin laptop with M2 chip',
    status: 'available',
    dateAdded: '2024-05-01T10:30:00Z'
  }
];

function getCourseModules(course) {
  const modules = {
    'Software Development': 12,
    'Data Analysis': 10,
    'UI/UX Design': 8,
    'Cybersecurity': 14,
    'Digital Marketing': 9,
    'Mobile App Development': 11
  };
  return modules[course] || 10;
}

// Register endpoint
app.post('/api/register', validateRegister, async (req, res) => {
    try {
        const { firstName, lastName, email, password, course, phone } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const currentDate = new Date().toISOString();
        
        try {
            const [userExists] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
            
            if (userExists && userExists.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }
            
            const [result] = await pool.query(
                'INSERT INTO users (firstName, lastName, email, password, course, registrationDate, lastLogin) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [firstName, lastName, email, hashedPassword, course, currentDate, currentDate]
            );
            
            const userId = result.insertId;
            
            await pool.query(
                'INSERT INTO user_progress (userId, course, completed, totalModules) VALUES (?, ?, ?, ?)',
                [userId, course, 0, getCourseModules(course)]
            );
            
            const [rows] = await pool.query(
                'SELECT id, firstName, lastName, email, course, registrationDate, lastLogin, profileImage FROM users WHERE id = ?', 
                [userId]
            );
            
            const token = jwt.sign({ id: userId, email }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
            const refreshToken = jwt.sign({ id: userId, email }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
            
            res.status(201).json({
                message: 'User registered successfully',
                token,
                refreshToken,
                user: rows[0]
            });
        } catch (dbError) {
            console.error('Database error, using in-memory fallback:', dbError);
            
            if (users.find(user => user.email === email)) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const newUser = {
                id: users.length + 1,
                firstName,
                lastName,
                email,
                password: hashedPassword,
                course,
                phone: phone || null,
                registrationDate: currentDate,
                lastLogin: currentDate,
                role: 'user'
            };

            users.push(newUser);
            
            const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
            const refreshToken = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });

            const { password: _, ...userWithoutPassword } = newUser;

            res.status(201).json({
                message: 'User registered successfully',
                token,
                refreshToken,
                user: userWithoutPassword
            });
        }
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login endpoint
app.post('/api/login', validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;

        try {
            const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
            
            if (rows.length === 0) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            
            const user = rows[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            
            await pool.query('UPDATE users SET lastLogin = ? WHERE id = ?', [new Date().toISOString(), user.id]);
            
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
            const refreshToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
            
            delete user.password;
            
            res.json({
                message: 'Login successful',
                token,
                refreshToken,
                user
            });
        } catch (dbError) {
            console.error('Database error, using in-memory fallback:', dbError);
            
            const user = users.find(user => user.email === email);
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            user.lastLogin = new Date().toISOString();
            
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
            const refreshToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
            
            const { password: _, ...userWithoutPassword } = user;
            
            res.json({
                message: 'Login successful',
                token,
                refreshToken,
                user: userWithoutPassword
            });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delivery endpoints
app.post('/api/deliveries', async (req, res) => {
    try {
        const deliveryData = {
            id: 'JET-' + Date.now(),
            ...req.body,
            timestamp: new Date().toISOString(),
            status: 'Pending'
        };
        
        deliveries.push(deliveryData);
        
        res.status(201).json({
            message: 'Delivery booked successfully',
            delivery: deliveryData
        });
    } catch (error) {
        console.error('Delivery booking error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/deliveries/:trackingId', async (req, res) => {
    try {
        const { trackingId } = req.params;
        const delivery = deliveries.find(d => d.id === trackingId);
        
        if (!delivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }
        
        res.json(delivery);
    } catch (error) {
        console.error('Delivery tracking error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/deliveries', auth, async (req, res) => {
    try {
        res.json(deliveries);
    } catch (error) {
        console.error('Get deliveries error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.put('/api/deliveries/:id/status', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        
        const deliveryIndex = deliveries.findIndex(d => d.id === id);
        if (deliveryIndex === -1) {
            return res.status(404).json({ message: 'Delivery not found' });
        }
        
        deliveries[deliveryIndex].status = status;
        
        res.json({
            message: 'Delivery status updated',
            delivery: deliveries[deliveryIndex]
        });
    } catch (error) {
        console.error('Update delivery status error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Gadget endpoints
app.get('/api/gadgets', async (req, res) => {
    try {
        res.json(gadgets);
    } catch (error) {
        console.error('Get gadgets error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/gadgets', auth, async (req, res) => {
    try {
        const gadget = {
            id: Date.now().toString(),
            ...req.body,
            dateAdded: new Date().toISOString()
        };
        
        gadgets.push(gadget);
        
        res.status(201).json({
            message: 'Gadget added successfully',
            gadget
        });
    } catch (error) {
        console.error('Add gadget error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.put('/api/gadgets/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const gadgetIndex = gadgets.findIndex(g => g.id === id);
        
        if (gadgetIndex === -1) {
            return res.status(404).json({ message: 'Gadget not found' });
        }
        
        gadgets[gadgetIndex] = { ...gadgets[gadgetIndex], ...req.body };
        
        res.json({
            message: 'Gadget updated successfully',
            gadget: gadgets[gadgetIndex]
        });
    } catch (error) {
        console.error('Update gadget error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/api/gadgets/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const gadgetIndex = gadgets.findIndex(g => g.id === id);
        
        if (gadgetIndex === -1) {
            return res.status(404).json({ message: 'Gadget not found' });
        }
        
        gadgets.splice(gadgetIndex, 1);
        
        res.json({ message: 'Gadget deleted successfully' });
    } catch (error) {
        console.error('Delete gadget error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// User management endpoints (admin only)
app.get('/api/users', auth, async (req, res) => {
    try {
        const usersWithoutPasswords = users.map(({ password, ...user }) => user);
        res.json(usersWithoutPasswords);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/api/users/:email', auth, async (req, res) => {
    try {
        const { email } = req.params;
        const userIndex = users.findIndex(u => u.email === email);
        
        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        users.splice(userIndex, 1);
        
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        users: users.length,
        deliveries: deliveries.length,
        gadgets: gadgets.length
    });
});

app.listen(PORT, () => {
    console.log(`JE Tech Hub server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});
