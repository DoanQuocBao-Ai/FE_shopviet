import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/shopviet/allCat')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {categories.map(category => (
        <div  className="product-item" key={category.id}>
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>

        </div>
      ))}
    </div>
  );
}

export default CategoryList;