const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const checkoutRoutes = require('./routes/orderRoutes');
const passport = require('passport');
const sequelize = require('./config/db');
dotenv.config();
require('./config/passport'); // Make sure this registers your Google/Facebook strategies

// Test PostgreSQL connection
sequelize.authenticate()
    .then(() => console.log('🗄️ Connected to PostgreSQL'))
    .catch(err => console.error('❌ PostgreSQL connection error:', err));
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(session({
    secret: 'your-secret-key', // use a secure, env-based secret in production!
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    }
}));
app.use(passport.session());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', checkoutRoutes);




app.get('/', (req, res) => res.send('E-Commerce Backend is running!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
