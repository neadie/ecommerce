import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = ({ items = [] }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);

        try {
            const stripe = await stripePromise;
            if (!stripe) {
                throw new Error('Stripe failed to load');
            }

            const response = await axios.post('http://localhost:5000/api/orders/checkout', { items });

            const { sessionId } = response.data;
            const result = await stripe.redirectToCheckout({ sessionId });

            if (result.error) {
                setError(result.error.message);
            }
        } catch (err) {
            setError(err.message || 'Something went wrong during checkout.');
            console.error('Checkout Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Ready to Checkout?</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleCheckout} disabled={loading || items.length === 0}>
                {loading ? 'Processing...' : 'Pay with Stripe'}
            </button>
        </div>
    );
};

export default Checkout;
