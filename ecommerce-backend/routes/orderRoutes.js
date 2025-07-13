// routes/checkout.js
const express = require('express');
const router = express.Router();
const {
    createCheckoutSession,
    getOrderHistory
} = require('../controller/orderController'); // assuming your functions live in this file

// Auth middleware (optional, needed for getOrderHistory)
const protect = require('../middleware/authMiddleware'); // adjust path as needed

// 🧾 Create Stripe Checkout session
router.post('/checkout', createCheckoutSession);

// 📜 Get user order history
router.get('/history', protect, getOrderHistory);

module.exports = router;
