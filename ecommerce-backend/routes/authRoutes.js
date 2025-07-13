const express = require('express');
const passport = require('passport');
// ✅ Add this line

const router = express.Router();
const { registerUser, loginUser } = require('../controller/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

module.exports = router;
