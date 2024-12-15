import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
