// src/App.js
import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default App;
