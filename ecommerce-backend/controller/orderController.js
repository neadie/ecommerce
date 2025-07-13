const stripe = require('../utils/stripe');
const pool = require('../models/db');
const createCheckoutSession = async (req, res) => {
    const { items } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
};

const getOrderHistory = async (req, res) => {
    const userId = req.user.id; // Provided via auth middleware
    const result = await pool.query('SELECT * FROM orders WHERE user_id = $1', [userId]);
    res.json(result.rows);
};

module.exports = { createCheckoutSession, getOrderHistory };
