
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [gadgets, setGadgets] = useState([]);
  const [activeTab, setActiveTab] = useState('deliveries');
  const [newGadget, setNewGadget] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    status: 'available'
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedBookings = JSON.parse(localStorage.getItem('deliveries') || '[]');
    const savedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const savedGadgets = JSON.parse(localStorage.getItem('gadgets') || '[]');
    
    setBookings(savedBookings);
    setUsers(savedUsers);
    setGadgets(savedGadgets);
  };

  const updateBookingStatus = (bookingId, newStatus) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('deliveries', JSON.stringify(updatedBookings));
  };

  const deleteBooking = (bookingId) => {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem('deliveries', JSON.stringify(updatedBookings));
  };

  const deleteUser = (userEmail) => {
    const updatedUsers = users.filter(user => user.email !== userEmail);
    setUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
  };

  const addGadget = (e) => {
    e.preventDefault();
    const gadget = {
      id: Date.now().toString(),
      ...newGadget,
      dateAdded: new Date().toISOString()
    };
    
    const updatedGadgets = [...gadgets, gadget];
    setGadgets(updatedGadgets);
    localStorage.setItem('gadgets', JSON.stringify(updatedGadgets));
    
    setNewGadget({
      name: '',
      category: '',
      price: '',
      description: '',
      status: 'available'
    });
  };

  const deleteGadget = (gadgetId) => {
    const updatedGadgets = gadgets.filter(gadget => gadget.id !== gadgetId);
    setGadgets(updatedGadgets);
    localStorage.setItem('gadgets', JSON.stringify(updatedGadgets));
  };

  const updateGadgetStatus = (gadgetId, newStatus) => {
    const updatedGadgets = gadgets.map(gadget =>
      gadget.id === gadgetId ? { ...gadget, status: newStatus } : gadget
    );
    setGadgets(updatedGadgets);
    localStorage.setItem('gadgets', JSON.stringify(updatedGadgets));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>
        
        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{bookings.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Registered Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{users.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Gadgets in Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{gadgets.filter(g => g.status === 'available').length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Revenue This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">₦{(bookings.length * 500 + gadgets.length * 50000).toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different management sections */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="deliveries">Deliveries</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="gadgets">Gadgets</TabsTrigger>
          </TabsList>

          {/* Delivery Management */}
          <TabsContent value="deliveries">
            <Card>
              <CardHeader>
                <CardTitle>Manage Deliveries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tracking ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {booking.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.customerName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.customerPhone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.deliveryType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Select 
                              value={booking.status} 
                              onValueChange={(value) => updateBookingStatus(booking.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Picked Up">Picked Up</SelectItem>
                                <SelectItem value="In Transit">In Transit</SelectItem>
                                <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                                <SelectItem value="Delivered">Delivered</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => deleteBooking(booking.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Manage Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {user.firstName} {user.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.phone || 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => deleteUser(user.email)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gadget Management */}
          <TabsContent value="gadgets">
            <div className="space-y-6">
              {/* Add New Gadget */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Gadget</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={addGadget} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gadget Name
                      </label>
                      <Input 
                        type="text" 
                        value={newGadget.name}
                        onChange={(e) => setNewGadget({...newGadget, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <Select 
                        value={newGadget.category}
                        onValueChange={(value) => setNewGadget({...newGadget, category: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phones">Smartphones</SelectItem>
                          <SelectItem value="laptops">Laptops</SelectItem>
                          <SelectItem value="tablets">Tablets</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (₦)
                      </label>
                      <Input 
                        type="number" 
                        value={newGadget.price}
                        onChange={(e) => setNewGadget({...newGadget, price: e.target.value})}
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <Select 
                        value={newGadget.status}
                        onValueChange={(value) => setNewGadget({...newGadget, status: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Available</SelectItem>
                          <SelectItem value="sold">Sold</SelectItem>
                          <SelectItem value="repair">Under Repair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <Input 
                        type="text" 
                        value={newGadget.description}
                        onChange={(e) => setNewGadget({...newGadget, description: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit">Add Gadget</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Gadgets List */}
              <Card>
                <CardHeader>
                  <CardTitle>Manage Gadgets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {gadgets.map((gadget) => (
                          <tr key={gadget.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {gadget.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {gadget.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ₦{parseInt(gadget.price).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Select 
                                value={gadget.status}
                                onValueChange={(value) => updateGadgetStatus(gadget.id, value)}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="available">Available</SelectItem>
                                  <SelectItem value="sold">Sold</SelectItem>
                                  <SelectItem value="repair">Under Repair</SelectItem>
                                </SelectContent>
                              </Select>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => deleteGadget(gadget.id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
