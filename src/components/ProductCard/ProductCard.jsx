import React from 'react'
import "./ProductCar.css"
import { Link } from 'react-router-dom';
export default function ProductCard(props) {
    const { product } = props;
  return (
      <div className="product-card">
        <div>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      </div>

  )
}
