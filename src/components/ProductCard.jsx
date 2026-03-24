import React, { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [size, setSize] = useState('M')

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="product-price">{product.price} MAD</span>
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-spec">Fabric: {product.fabric}</p>
        <select 
          value={size} 
          onChange={(e) => setSize(e.target.value)}
          className="size-select"
        >
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
        <button 
          onClick={() => onAddToCart(product, size)}
          className="btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard