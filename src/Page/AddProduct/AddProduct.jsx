import React, { useState } from 'react';
import './AddProduct.css';

export const AddProduct = ({ onAddProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image,
    };

    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Product created:', data);

        // Update the parent component's state
        onAddProduct(data);

        // Clear the form
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="add-product">
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit" className="fs-1">Create Product</button>
      </form>
    </div>
  );
};
