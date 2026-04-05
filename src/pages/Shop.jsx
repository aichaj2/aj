import React, { useState, useEffect } from 'react'

// Products Data
const products = [
  { id: 1, name: "Soft Beige Abaya", price: 349, fabric: "Premium Crepe", color: "#d4c4b5", image: `${import.meta.env.BASE_URL}img/a.jpeg` },
  { id: 2, name: "Dusty Rose Kimono", price: 399, fabric: "Luxury Chiffon", color: "#d4a5a5", image: `${import.meta.env.BASE_URL}img/b.jpeg` },
  { id: 3, name: "Olive Elegance Set", price: 449, fabric: "Soft Linen Blend", color: "#a8b5a0", image: `${import.meta.env.BASE_URL}img/c.jpeg` },
  { id: 4, name: "Cream Pearl Abaya", price: 379, fabric: "Silk Touch Crepe", color: "#f5f0e8", image: `${import.meta.env.BASE_URL}img/e.jpeg` },
  { id: 5, name: "Mocha Dream Dress", price: 329, fabric: "Flowy Georgette", color: "#b5a090", image: `${import.meta.env.BASE_URL}img/f.jpeg` },
  { id: 6, name: "Blush Pink Set", price: 419, fabric: "Premium Medina Silk", color: "#e8c4c4", image: `${import.meta.env.BASE_URL}img/i.jpeg` }
]

function Shop() {
  const [cart, setCart] = useState([])
  const [selectedSize, setSelectedSize] = useState({})

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Add to cart function
  const addToCart = (product) => {
    const size = selectedSize[product.id] || 'M'
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
    
    // Dispatch event to update cart count in Navbar
    window.dispatchEvent(new Event('cartUpdated'))
    
    // Show notification
    showNotification('✓ Added to cart!')
  }

  // Show notification
  const showNotification = (message) => {
    const notification = document.createElement('div')
    notification.className = 'notification'
    notification.textContent = message
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.classList.add('show')
    }, 100)
    
    setTimeout(() => {
      notification.classList.remove('show')
      setTimeout(() => {
        notification.remove()
      }, 300)
    }, 2000)
  }

  return (
    <section className="page">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Curated Selection</p>
          <h2 className="section-title">Our Collection</h2>
          <div className="section-divider"></div>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className="product-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-price">{product.price} MAD</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-specs">
                  <p className="product-spec">• Fabric: {product.fabric}</p>
                  <p className="product-spec">• Loose & Elegant Fit</p>
                </div>
                <div className="product-actions">
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
                  <button 
                    onClick={() => addToCart(product)} 
                    className="btn-primary full-width"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop