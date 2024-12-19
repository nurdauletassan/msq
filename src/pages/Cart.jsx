import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dolce & Gabbana",
      description: "ремень с гравированным логотипом",
      size: "90 cm",
      quantity: 1,
      price: 429,
      isFavorite: false,
      isEditingSize: false,
      isEditingQuantity: false,
    },
    {
      id: 2,
      name: "Lanvin",
      description: "кроссовки Curb",
      size: "44 FR",
      quantity: 1,
      price: 629,
      isFavorite: false,
      isEditingSize: false,
      isEditingQuantity: false,
    },
  ]);

  // Функция изменения размера
  const updateSize = (id, newSize) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, size: newSize } : item))
    );
  };

  // Функция изменения количества
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Переключение редактирования размера или количества
  const toggleEdit = (id, field) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: !item[field] } : item
      )
    );
  };

  // Добавить/убрать из избранного
  const toggleFavorite = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  // Удалить товар из корзины
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Общая сумма товаров
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>{item.description}</p>

              {/* Размер */}
              {item.isEditingSize ? (
                <div>
                  <select
                    value={item.size}
                    onChange={(e) => updateSize(item.id, e.target.value)}
                  >
                    <option value="90 cm">90 cm</option>
                    <option value="100 cm">100 cm</option>
                    <option value="44 FR">44 FR</option>
                    <option value="46 FR">46 FR</option>
                  </select>
                  <button onClick={() => toggleEdit(item.id, "isEditingSize")}>
                    Отмена
                  </button>
                </div>
              ) : (
                <div>
                  Размер: {item.size}{" "}
                  <button
                    onClick={() => toggleEdit(item.id, "isEditingSize")}
                  >
                    Изменить
                  </button>
                </div>
              )}

              {/* Количество */}
              {item.isEditingQuantity ? (
                <div>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => toggleEdit(item.id, "isEditingQuantity")}>
                    Отмена
                  </button>
                </div>
              ) : (
                <div>
                  Количество: {item.quantity}{" "}
                  <button
                    onClick={() => toggleEdit(item.id, "isEditingQuantity")}
                  >
                    Изменить
                  </button>
                </div>
              )}
            </div>

            <div className="cart-actions">
              <span>${item.price * item.quantity}</span>
              <button
                className={`favorite-btn ${
                  item.isFavorite ? "favorite" : ""
                }`}
                onClick={() => toggleFavorite(item.id)}
              >
                {item.isFavorite ? "★ В избранном" : "☆ Добавить в избранное"}
              </button>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Блок суммы */}
      <div className="cart-summary">
        <div className="summary-item">
          <span>Товары</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Доставка</span>
          <span>$0.00</span>
        </div>
        <div className="summary-total">
          <span>Итого</span>
          <span>USD ${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Перейти к оплате</button>
        <p className="free-shipping">
          Бесплатная доставка на заказы от <strong>$145.00</strong>
        </p>
      </div>
    </div>
  );
};

export default Cart;
