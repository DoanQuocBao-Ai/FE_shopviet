import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/shopviet/allProd?sort=nameAsc')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div  className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Sold: {product.sold}</p>
          <p>Rate: {product.rate}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;