import React, { useState } from 'react';
import './Sizes.css'; // Assuming you have a separate CSS file for styling

function Sizes() {
  const sizes = ['XS','S', 'M', 'L', 'XL', 'XXL']; // Array of sizes
  const [selectedSizes, setSelectedSizes] = useState([]); // State to keep track of selected sizes

  const handleSizeClick = (size) => {
    setSelectedSizes(prevSelectedSizes =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter(s => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  return (
    <div className="sizes-container">
      {sizes.map((size, index) => (
        <div
          key={index}
          className={`size-box ${selectedSizes.includes(size) ? 'selected' : ''}`}
          onClick={() => handleSizeClick(size)} // Handle click event
        >
          {size}
        </div>
      ))}
    </div>
  );
}

export default Sizes;
