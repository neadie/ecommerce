

const ProductCard = ({ product, addToCart }) => {
    if (!product) return null; // Prevents rendering if product is undefined

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p> {/* Adds consistent pricing format */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;

