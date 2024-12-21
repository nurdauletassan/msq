import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';
import Landing from '../pages/home/Landing';
import Shop from '../pages/shop/Shop';
import Login from '../pages/login/Login';
import Cart from '../pages/Cart';
import Contact from '../pages/contact/Contact'
import Favourite from '../pages/Favourite';
import ProductDetails from '../pages/productDetails/ProductDetails';
import Register from '../pages/register/Register';
import BannerDemo from '../widgets/bannerDemo/BannerDemo';
import AddProducts from '../pages/AddProducts';
import Address from '../pages/Address';
import { LoadingProvider } from './context/LoadingContext';
import { NotificationProvider } from './context/NotificationContext';
import LoadingSpinner from '../shared/ui/LoadingSpinner/LoadingSpinner';


function App() {
  return (
    <LoadingProvider>
      <NotificationProvider>
        <Router>
          <LoadingSpinner />
          <BannerDemo />
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/address' element={<Address />} />
          </Routes>
          <Footer />
        </Router>
      </NotificationProvider>,
    </LoadingProvider>
  );
}

export default App;
