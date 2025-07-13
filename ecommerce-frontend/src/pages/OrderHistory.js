import React, { useState, useEffect, useContext } from 'react';
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
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.total} — {order.timestamp}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
