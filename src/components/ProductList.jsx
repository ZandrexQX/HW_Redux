// src/ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from './productsSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              Toggle Availability
            </button>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Remove Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
