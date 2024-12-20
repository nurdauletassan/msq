import React from 'react';
import './ProductCard.css'; // Стили карточки, если нужно

const ProductCard = ({ product }) => {
  const mainImage = product.images?.[0] || "https://via.placeholder.com/150"; // Если массив изображений не пуст, возьмите первое изображение, иначе используйте placeholder

  return (
    <div className="product-card">
      <img
        src={mainImage}
        alt={product.title || "No Name"}
      />
      <h2>{product.title || "No Name"}</h2>
      <p>${product.price || "N/A"}</p>
    </div>
  );
};

export default ProductCard;
