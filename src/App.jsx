// src/App.jsx 
import React from 'react' 
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Home from './pages/Home' 
import Footer from './components/Footer' 
import Shop from './pages/Shop' 
import About from './pages/About' 
import Contact from './pages/Contact' 
import Cart from './pages/Cart' 
import './App.css' 

function App() { 
  return ( 
    <HashRouter>
      <Navbar /> 
      <main className="main-content">
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </main> 
      <Footer /> 
    </HashRouter>
  ) 
} 

export default App