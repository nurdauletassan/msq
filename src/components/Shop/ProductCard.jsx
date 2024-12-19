import React from 'react';
import './ProductCard.css'; // Стили карточки, если нужно

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.images?.[0]?.url || "https://via.placeholder.com/150"}
        alt={product.name || "No Name"}
      />
      <h2>{product.name || "No Name"}</h2>
      <p>${product.price?.formattedValue || "N/A"}</p>
    </div>
  );
};

export default ProductCard;
