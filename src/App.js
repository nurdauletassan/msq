import './App.css';
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import Login from './pages/Login';
<<<<<<< HEAD
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';
=======
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
>>>>>>> 2e436d573e29313905aaa9f90b877477ee229b19

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  return (
    <Router>
      <div> 
        
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
<<<<<<< HEAD
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/favourite' element={<Favourite/>}/>
=======
          <Route path="/shop/:productId" element={<ProductDetails addToCart={addToCart} />} />
          <Route path='/register' element={<Register/>}/>
>>>>>>> 2e436d573e29313905aaa9f90b877477ee229b19
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
