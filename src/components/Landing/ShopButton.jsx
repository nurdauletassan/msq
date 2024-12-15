import React from 'react'
import './ShopButton.css'
import { Link } from 'react-router-dom';

function ShopButton() {
  return (
    <Link to="/shop">
    <div className='w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse'>
      Shop Now
    </div>
  </Link> )
}

export default ShopButton