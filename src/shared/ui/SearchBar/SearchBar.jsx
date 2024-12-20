// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css'; // Импортировать CSS для стилей

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="relative">
        <input id="search-input" className="search-input" placeholder="Search for a product..." type="search" />
      </div>
    </div>
  );
};

export default SearchBar;
