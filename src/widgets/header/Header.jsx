import React, { useState, useRef } from 'react';
import './Header.css'; // Импортировать ваш CSS файл
import SearchBar from '../../shared/ui/SearchBar/SearchBar';
import ShopDropdown from '../../shared/ui/ShopDropdown/ShopDropdown'; // Импортируем компонент выпадающего списка
import arrow from '../../shared/images/arrow.svg';
import cart from '../../shared/images/cart.svg';
import profile from '../../shared/images/profile.svg';
import CartModal from '../../components/CartModal';
import { useSelector } from 'react-redux';


const Header = () => {
  const totalItems = useSelector((state) => state.cart.total);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [cartItems, setCartItems] = useState([]); // Состояние для хранения товаров в корзине
  const [isCartModalOpen, setCartModalOpen] = useState(false); // Состояние для модального окна корзины


  const handleMouseEnter = () => {
    setShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setShopDropdownOpen(false);
  };

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      setCartModalOpen(true);
    } else {
      // Показать список товаров в корзине
      console.log('Cart Items:', cartItems);
      // Ваша логика для отображения списка товаров в корзине
    }
  };
  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <header className="header">

      <div className="header-logo">
        <a href="/" className="logo-link">
          <h1 className="logo-text">MSQ </h1>
        </a>
      </div>

      <nav className="header-nav">
        <div
          ref={dropdownRef}
          className="shop-dropdown-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="header-link">
            <div className='shop-arrow'>
              <p>Shop</p>
              <span className="dropdown-arrow">
                <img src={arrow} alt="" />
              </span>
            </div>
          </a>
          {isShopDropdownOpen && <ShopDropdown isOpen={isShopDropdownOpen} />}
        </div>

        <a href="/about" className="header-link">New Arrivals</a>
        <a href="/contact" className="header-link">Contact</a>
        <a href="/contact" className="header-link">On Sale</a>
      </nav>
      <SearchBar />
      <nav className='cart-profile'>
        <div className="cart-container">
          <a onClick={handleCartClick}>
            <img src={cart} alt="Cart" />
          </a>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>
        <div className="cart-container">
          <a href="">
            <img src={profile} alt="profile" />
          </a>
        </div>
      </nav>
      <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
    </header>
  );
};

export default Header;
