import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { AddProduct } from "../../Page/AddProduct/AddProduct";
import "./HomePage.css";
import close from "./close-svgrepo-com.png";
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // Fetch initial product list
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setIsModalAddOpen(false);
  };

  const handleShowModal = () => {
    setIsModalAddOpen(true);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCloseAddModal = () => {
    setIsModalAddOpen(false);
  };

  const handleDeleteProduct = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // Remove the product from the state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };
  return (
    <div className="HomeAllNew">
      <nav>
        <button className="ButtonAdd" onClick={handleShowModal}>
          Add Product
        </button>
      </nav>
      {isModalAddOpen && (
        <div className="modal">
          <div className="">
            <span className="close-button" onClick={handleCloseAddModal}><img src={close} alt="close" width={30} height={30}></img></span>
            <AddProduct onAddProduct={handleAddProduct} />
          </div>
        </div>
      )}
      <div className="ProductHome">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}
