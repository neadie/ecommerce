import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { CartContext } from '../context/CartContext';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data));
    }, []);



    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={() => addToCart(product)} />
            ))}
        </div>
    );
};

export default ProductList;
