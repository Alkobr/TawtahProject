import "./HomePage.css";
import Pro from "./ImgPro.png";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
function HomePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCreatePost = () => {
    // Handle creating a new post here, e.g., send a POST request to your backend
    console.log("Creating new post:", { title, body, userId });
    // Clear input fields
    setTitle("");
    setBody("");
    setUserId("");
    // Close the modal
    closeModal();
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="HomeAllNew">
      <button className="HomeMain" onClick={openModal}>
        Create New Post
      </button>
      <div className="ProductHome">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Create New Post</h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleCreatePost}>Create</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
