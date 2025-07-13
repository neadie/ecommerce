import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const handleCheckout = async () => {
    const res = await axios.post('http://localhost:5000/api/orders/checkout', { items });
    window.location.href = res.data.url; // redirect to Stripe
};
