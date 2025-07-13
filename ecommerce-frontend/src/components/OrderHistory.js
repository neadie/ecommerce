import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const OrderHistory = () => {
    const { token } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/orders/history', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(res => setOrders(res.data));
    }, [token]);

    return (
        <div>
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id}>
                        <p>Total: ${order.total}</p>
                        <p>Placed: {new Date(order.timestamp).toLocaleDateString()}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderHistory;
