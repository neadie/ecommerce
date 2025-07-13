import React from 'react';

const Cart = ({ items = [], removeItem, updateQuantity }) => {
    const handleQuantityChange = (id, value) => {
        const parsedValue = parseInt(value, 10);
        if (!isNaN(parsedValue) && parsedValue >= 0) {
            updateQuantity(id, parsedValue);
        }
    };

    const total = items.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;
        return acc + (isNaN(itemTotal) ? 0 : itemTotal);
    }, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <input
                            type="number"
                            min="0"
                            value={item.quantity}
                            onChange={e => handleQuantityChange(item.id, e.target.value)}
                        />
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))
            )}
            <h3>Total: €{total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
