import React, { useState } from "react";
import "./Model.css";

export default function Model({ product, isOpen, onClose, onSave }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image);
  const [category, setCategory] = useState(product.category);

  const handleSave = () => {
    const updatedProduct = {
      ...product,
      title,
      price,
      description,
      image,
      category,
    };
    onSave(updatedProduct);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2>Edit Product</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
