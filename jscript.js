
// Optimized main JavaScript file for JE Tech Hub
console.log('JE Tech Hub website loaded successfully');

// Performance optimized initialization
let isInitialized = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    if (!isInitialized) {
        initializeWebsite();
        isInitialized = true;
    }
});

function initializeWebsite() {
    console.log('Website initialized');
    
    // Fast preloader removal
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 300);
    }
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize lazy loading for images
    initLazyLoading();
}

function initSmoothScroll() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Delivery management functions
function generateTrackingId() {
    return 'DEL' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

function saveDelivery(deliveryData) {
    try {
        let deliveries = JSON.parse(localStorage.getItem('deliveries') || '[]');
        deliveries.push(deliveryData);
        localStorage.setItem('deliveries', JSON.stringify(deliveries));
        return true;
    } catch (error) {
        console.error('Error saving delivery:', error);
        return false;
    }
}

function getDelivery(trackingId) {
    try {
        const deliveries = JSON.parse(localStorage.getItem('deliveries') || '[]');
        return deliveries.find(delivery => delivery.id === trackingId);
    } catch (error) {
        console.error('Error retrieving delivery:', error);
        return null;
    }
}

// Contact form optimization
function handleContactForm(formData) {
    // Simulate form submission
    console.log('Contact form data:', formData);
    
    // In a real application, this would send to a server
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: 'Message sent successfully!' });
        }, 1000);
    });
}

// Performance monitoring
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
}

// Run performance logging after page load
window.addEventListener('load', logPerformance);

// Export functions for global use
window.JETechHub = {
    generateTrackingId,
    saveDelivery,
    getDelivery,
    handleContactForm
};
