import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    const product = {
        image: 'path-to-image.jpg',
        title: 'Product Name',
        description: 'Detailed description of the product. It should provide all necessary information about the product.',
        price: '$99.99'
    };

    const handleAddToCart = () => {
        alert('Product added to cart!');
    };

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
