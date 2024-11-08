// src/AddProduct.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
      available,
    };
    dispatch(addProduct(newProduct));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
