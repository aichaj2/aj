import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const location = useLocation()

  // جلب عدد المنتجات من localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const count = cart.reduce((total, item) => total + item.quantity, 0)
      setCartCount(count)
    }

    updateCartCount()
    
    // تحديث العدد كلما تغيرت السلة
    window.addEventListener('cartUpdated', updateCartCount)
    
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">A&J Modest</Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links hidden-mobile">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/cart" className="nav-link cart-button">
            🛒
            <span className="cart-count" style={{ display: cartCount > 0 ? 'flex' : 'none' }}>
              {cartCount}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="mobile-menu-btn">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${!isMobileMenuOpen ? 'hidden' : ''}`}>
        <Link to="/" onClick={closeMobileMenu} className="mobile-link">Home</Link>
        <Link to="/shop" onClick={closeMobileMenu} className="mobile-link">Shop</Link>
        <Link to="/about" onClick={closeMobileMenu} className="mobile-link">About</Link>
        <Link to="/contact" onClick={closeMobileMenu} className="mobile-link">Contact</Link>
        <Link to="/cart" onClick={closeMobileMenu} className="mobile-link">🛒</Link>
      </div>
    </nav>
  )
}

export default Navbar