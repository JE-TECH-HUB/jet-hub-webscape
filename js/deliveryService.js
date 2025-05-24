
// Delivery booking and tracking functionality
class DeliveryService {
    constructor() {
        this.bookings = JSON.parse(localStorage.getItem('deliveryBookings') || '[]');
        this.trackingNumbers = JSON.parse(localStorage.getItem('trackingNumbers') || '[]');
        this.initializeModals();
    }

    initializeModals() {
        // Create booking modal HTML
        const bookingModalHTML = `
            <div class="modal fade" id="deliveryBookingModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Book Delivery</h5>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="deliveryBookingForm">
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <input type="text" class="form-control" name="fullName" required>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" class="form-control" name="phone" required>
                                </div>
                                <div class="form-group">
                                    <label>Pickup Address</label>
                                    <textarea class="form-control" name="pickupAddress" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Delivery Address</label>
                                    <textarea class="form-control" name="deliveryAddress" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Item Description</label>
                                    <input type="text" class="form-control" name="itemDescription" required>
                                </div>
                                <div class="form-group">
                                    <label>Delivery Type</label>
                                    <select class="form-control" name="deliveryType" required>
                                        <option value="">Select delivery type</option>
                                        <option value="door-to-door">Door-to-Door</option>
                                        <option value="office">Office Delivery</option>
                                        <option value="food">Food Delivery</option>
                                        <option value="motor-park-pickup">Motor Park Pickup</option>
                                        <option value="motor-park-dropoff">Motor Park Dropoff</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onclick="deliveryService.submitBooking()">Book Delivery</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Create tracking modal HTML
        const trackingModalHTML = `
            <div class="modal fade" id="deliveryTrackingModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Track Delivery</h5>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Enter Tracking Number</label>
                                <input type="text" class="form-control" id="trackingNumberInput" placeholder="e.g., JET-2024-001">
                                <button type="button" class="btn btn-primary mt-2" onclick="deliveryService.trackDelivery()">Track</button>
                            </div>
                            <div id="trackingResults" style="display: none;">
                                <hr>
                                <h6>Delivery Status</h6>
                                <div id="trackingInfo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add modals to page
        document.body.insertAdjacentHTML('beforeend', bookingModalHTML);
        document.body.insertAdjacentHTML('beforeend', trackingModalHTML);
    }

    submitBooking() {
        const form = document.getElementById('deliveryBookingForm');
        const formData = new FormData(form);
        
        const booking = {
            id: 'JET-' + new Date().getFullYear() + '-' + String(this.bookings.length + 1).padStart(3, '0'),
            fullName: formData.get('fullName'),
            phone: formData.get('phone'),
            pickupAddress: formData.get('pickupAddress'),
            deliveryAddress: formData.get('deliveryAddress'),
            itemDescription: formData.get('itemDescription'),
            deliveryType: formData.get('deliveryType'),
            status: 'Pending',
            dateBooked: new Date().toISOString(),
            estimatedDelivery: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours from now
        };

        this.bookings.push(booking);
        localStorage.setItem('deliveryBookings', JSON.stringify(this.bookings));
        
        alert(`Delivery booked successfully! Your tracking number is: ${booking.id}`);
        
        // Close modal and reset form
        $('#deliveryBookingModal').modal('hide');
        form.reset();
    }

    trackDelivery() {
        const trackingNumber = document.getElementById('trackingNumberInput').value.trim();
        
        if (!trackingNumber) {
            alert('Please enter a tracking number');
            return;
        }

        const booking = this.bookings.find(b => b.id === trackingNumber);
        const trackingResults = document.getElementById('trackingResults');
        const trackingInfo = document.getElementById('trackingInfo');

        if (booking) {
            const statuses = ['Pending', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered'];
            const currentStatusIndex = Math.min(Math.floor(Math.random() * statuses.length), statuses.length - 1);
            const currentStatus = statuses[currentStatusIndex];
            
            trackingInfo.innerHTML = `
                <div class="alert alert-info">
                    <strong>Tracking Number:</strong> ${booking.id}<br>
                    <strong>Status:</strong> <span class="badge badge-primary">${currentStatus}</span><br>
                    <strong>Item:</strong> ${booking.itemDescription}<br>
                    <strong>From:</strong> ${booking.pickupAddress}<br>
                    <strong>To:</strong> ${booking.deliveryAddress}<br>
                    <strong>Estimated Delivery:</strong> ${new Date(booking.estimatedDelivery).toLocaleDateString()}
                </div>
            `;
            trackingResults.style.display = 'block';
        } else {
            trackingInfo.innerHTML = `
                <div class="alert alert-warning">
                    No delivery found with tracking number: ${trackingNumber}
                </div>
            `;
            trackingResults.style.display = 'block';
        }
    }

    openBookingModal() {
        $('#deliveryBookingModal').modal('show');
    }

    openTrackingModal() {
        $('#deliveryTrackingModal').modal('show');
    }
}

// Initialize delivery service when page loads
let deliveryService;
document.addEventListener('DOMContentLoaded', function() {
    deliveryService = new DeliveryService();
});
