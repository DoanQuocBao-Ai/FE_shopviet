import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/shopviet/allBrand')
      .then(res => setBrands(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {brands.map(brand => (
        <div  className="product-item" key={brand.id}>
          <img src={brand.image} alt={brand.name} />
          <h3>{brand.name}</h3>

        </div>
      ))}
    </div>
  );
}

export default BrandList;