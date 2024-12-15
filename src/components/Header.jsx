import React, { useState, useRef } from 'react';
import './Header.css'; // Импортировать ваш CSS файл
import SearchBar from './SearchBar';
import ShopDropdown from './ShopDropdown'; // Импортируем компонент выпадающего списка
import arrow from '../images/arrow.svg';
import cart from '../images/cart.svg';
import profile from '../images/profile.svg';

const Header = () => {
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setShopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setShopDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <a href="/" className="logo-link">
          <h1 className="logo-text">MSQ</h1>
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
        <a href="">
          <img src={cart} alt="" />
        </a>
        <a href="">
          <img src={profile} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
