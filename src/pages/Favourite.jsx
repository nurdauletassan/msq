import React, { useState } from "react";
import "./Favourite.css";

const Favourite = () => {
  const [favouriteItems, setFavouriteItems] = useState([
    {
      id: 1,
      name: "MM6 Maison Margiela",
      description: "кроссовки-носки",
      price: 532,
      size: "",
      image: "path_to_image_here", // замените на ссылку на изображение
    },
    {
      id: 2,
      name: "Rick Owens",
      description: "шорты Rick's Pods",
      price: 657,
      size: "",
      image: "path_to_image_here",
    },
  ]);

  const [selectedSize, setSelectedSize] = useState({});

  // Удалить товар из избранного
  const removeItem = (id) => {
    setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Обновить выбранный размер
  const handleSizeChange = (id, size) => {
    setSelectedSize((prev) => ({ ...prev, [id]: size }));
  };

  // Добавить товар в корзину
  const addToCart = (id) => {
    alert(`Товар с ID ${id} добавлен в корзину с размером ${selectedSize[id] || "не выбран"}`);
  };

  return (
    <div className="favourite-container">
      {favouriteItems.map((item) => (
        <div key={item.id} className="favourite-item">
          {/* Кнопка удаления */}
          <button
            className="remove-btn"
            onClick={() => removeItem(item.id)}
            aria-label="Удалить товар"
          >
            &times;
          </button>

          {/* Изображение и информация о товаре */}
          <img src={item.image} alt={item.name} className="item-image" />

          <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">${item.price}</p>
          </div>

          {/* Выбор размера */}
          <select
            className="size-select"
            value={selectedSize[item.id] || ""}
            onChange={(e) => handleSizeChange(item.id, e.target.value)}
          >
            <option value="" disabled>
              Выберите размер
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

          {/* Кнопка добавления в корзину */}
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(item.id)}
          >
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favourite;
