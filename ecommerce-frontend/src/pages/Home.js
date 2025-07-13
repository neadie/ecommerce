import React from 'react';
import ProductList from '../components/ProductList';
import { CartProvider } from '../context/CartContext';
const Home = () => {
    return (
        <div>
            <h1>All Products</h1>
            <CartProvider>
                <ProductList />
            </CartProvider>
        </div>
    );
};

export default Home;
