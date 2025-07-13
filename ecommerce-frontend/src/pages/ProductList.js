useEffect(() => {
    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products', {
            params: { category: selectedCategory, priceMin, priceMax }
        });
        setProducts(res.data);
    };
    fetchProducts();
}, [selectedCategory, priceMin, priceMax]);
