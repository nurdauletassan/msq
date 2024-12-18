// src/components/ShopDropdown.jsx
import React from 'react';
import './ShopDropdown.css';

const ShopDropdown = () => {
  return (
    <div className="shop-dropdown-content">
      <div className='shop-dropdown-grid'>
        <a href="/mens" className="shop-dropdown-link">
          <div className="text-sm font-medium leading-none">Men's clothes</div>
          <p className="text-sm leading-snug text-muted-foreground">In attractive and spectacular colors and designs</p>
        </a>
        <a href="/womens" className="shop-dropdown-link">
          <div className="text-sm font-medium leading-none">Women's clothes</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Ladies, your style and tastes are important to us</p>
        </a>
        <a href="/kids" className="shop-dropdown-link">
          <div className="text-sm font-medium leading-none">Kids clothes</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">For all ages, with happy and beautiful colors</p>
        </a>
        <a href="/shoes" className="shop-dropdown-link">
          <div className="text-sm font-medium leading-none">Bags and Shoes</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Suitable for men, women and all tastes and styles</p>
        </a>
      </div>
    </div>
  );
};

export default ShopDropdown;
