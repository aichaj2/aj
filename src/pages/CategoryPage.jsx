// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

function CategoryPage() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const [selectedSize, setSelectedSize] = useState({})
  const [categoryProducts, setCategoryProducts] = useState([])
  const [categoryInfo, setCategoryInfo] = useState({})

  const categories = {
    'clothing': { name: 'Clothing', arabicName: 'Clothing' },
    'shoes': { name: 'Shoes', arabicName: 'Shoes' },
    'accessories': { name: 'Accessories', arabicName: 'Accessories' },
    'bags': { name: 'Bags', arabicName: 'Bags' },
    'hijab': { name: 'Hijab', arabicName: 'Hijab' },
    'caps': { name: 'Hijab Caps', arabicName: 'Hijab Caps' },
    'makeup': { name: 'Makeup', arabicName: 'Makeup' }
  }

  // Categories that DON'T need size selection
  const categoriesWithoutSize = ['accessories', 'makeup', 'caps', 'bags']
  
  // Hijab colors (available colors)
  const hijabColors = [
    { code: '#d4c4b5', name: 'Beige' },
    { code: '#fda4af', name: 'Rose' },
    { code: '#a8b5a0', name: 'Olive' },
    { code: '#e8d5c4', name: 'Cream' },
    { code: '#c9b6a6', name: 'Mocha' },
    { code: '#e8c4c4', name: 'Blush Pink' },
    { code: '#292524', name: 'Black' },
    { code: '#ffffff', name: 'White' },
    { code: '#78716b', name: 'Grey' },
    { code: '#d4a5a5', name: 'Dusty Rose' }
  ]

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    const filtered = products.filter(p => p.category === categoryId)
    setCategoryProducts(filtered)
    setCategoryInfo(categories[categoryId] || { name: categoryId, icon: '📦', arabicName: categoryId })
    window.scrollTo(0, 0)
  }, [categoryId])

  const addToCart = (product) => {
    let size = selectedSize[product.id]
    
    // If category doesn't need size, set size to 'One Size'
    if (categoriesWithoutSize.includes(product.category)) {
      size = 'One Size'
    }
    // For Hijab: size is the color name
    else if (product.category === 'hijab') {
      size = size || 'Beige'  // Default color
    }
    // For shoes
    else if (product.category === 'shoes') {
      size = size || '39'
    }
    // For clothing
    else {
      size = size || 'M'
    }
    
    const existingItem = cart.find(item => item.id === product.id && item.size === size)
    
    let newCart
    if (existingItem) {
      newCart = cart.map(item =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      newCart = [...cart, { 
        ...product, 
        size, 
        quantity: 1 
      }]
    }
    
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    window.dispatchEvent(new Event('cartUpdated'))
    showNotification('✓ Added to cart!')
  }

  const showNotification = (message) => {
    const notification = document.createElement('div')
    notification.className = 'notification'
    notification.textContent = message
    document.body.appendChild(notification)
    
    setTimeout(() => notification.classList.add('show'), 100)
    setTimeout(() => {
      notification.classList.remove('show')
      setTimeout(() => notification.remove(), 300)
    }, 2000)
  }

  // Function to render the correct size selector based on category
  const renderSizeSelector = (product) => {
    // Categories WITHOUT size (no selector at all)
    if (categoriesWithoutSize.includes(product.category)) {
      return null
    }
    
    // Hijab: Color selector with color swatches
    if (product.category === 'hijab') {
      return (
        <div className="color-selector">
          <label className="color-label">Color:</label>
          <div className="color-options">
            {hijabColors.map((color) => (
              <button
                key={color.name}
                type="button"
                className={`color-option ${selectedSize[product.id] === color.name ? 'active' : ''}`}
                style={{ backgroundColor: color.code }}
                onClick={() => setSelectedSize({ ...selectedSize, [product.id]: color.name })}
                title={color.name}
              />
            ))}
          </div>
          <select 
            id={`size-${product.id}`}
            onChange={(e) => setSelectedSize({ ...selectedSize, [product.id]: e.target.value })}
            className="size-select"
            defaultValue="Beige"
          >
            {hijabColors.map((color) => (
              <option key={color.name} value={color.name}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
      )
    }
    
    // Shoes: 38, 39, 40, 41
    if (product.category === 'shoes') {
      return (
        <select 
          id={`size-${product.id}`}
          onChange={(e) => setSelectedSize({ ...selectedSize, [product.id]: e.target.value })}
          className="size-select"
          defaultValue="39"
        >
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
        </select>
      )
    }
    
    // Clothing: S, M, L
    return (
      <select 
        id={`size-${product.id}`}
        onChange={(e) => setSelectedSize({ ...selectedSize, [product.id]: e.target.value })}
        className="size-select"
        defaultValue="M"
      >
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
    )
  }

  return (
    <div className="page">
      <div className="container">
        <button onClick={() => navigate('/shop')} className="back-to-shop">
          ← Back to Shop
        </button>

        <div className="section-header">
          <p className="section-label">{categoryInfo.icon} {categoryInfo.name}</p>
          <h2 className="section-title">{categoryInfo.arabicName}</h2>
          <div className="section-divider"></div>
        </div>

        <div className="products-grid">
          {categoryProducts.length === 0 ? (
            <div className="no-products">
              <p>😊 No products in this category yet</p>
              <button onClick={() => navigate('/shop')} className="btn-primary">
                Back to Shop
              </button>
            </div>
          ) : (
            categoryProducts.map((product, index) => (
              <div key={product.id} className="product-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-price">{product.price} MAD</span>
                  {product.isNew && (
                    <span className="product-badge new">✨ New</span>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-specs">
                    <p className="product-spec">• {product.fabric}</p>
                  </div>
                  <div className="product-actions">
                    {renderSizeSelector(product)}
                    <button 
                      onClick={() => addToCart(product)} 
                      className="btn-primary full-width"
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage