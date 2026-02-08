import React from "react";
import { CiShoppingBasket, CiUser, CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdMenu } from "react-icons/io";
import "../../assets/css/product.css";

function Product() {
  const products = [
    {
      id: 1,
      name: "Basic Slim Fit T-Shirt",
      price: 199,
      category: "Cotton T-Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Basic Heavy Weight T-Shirt",
      price: 199,
      category: "Crewneck T-Shirt",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Full Sleeve Zipper",
      price: 199,
      category: "Cotton T-Shirt",
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IoMdMenu size={24} />
          <ul className="nav-links">
            <li>Home</li>
            <li>Collections</li>
            <li style={{ textDecoration: "underline" }}>New</li>
          </ul>
        </div>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>◆</div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <IoMdHeartEmpty size={24} />
          <div className="cart-btn">
            <span style={{ fontSize: "12px" }}>Cart</span>
            <CiShoppingBasket size={18} />
          </div>
          <CiUser size={24} />
        </div>
      </nav>

      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <p>
              <strong>Size</strong>
            </p>
            <div className="size-grid">
              {["XS", "S", "M", "L", "XL", "2X"].map((s) => (
                <div key={s} className="size-box">
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="filter-section">
            <p>
              <strong>Availability</strong>
            </p>
            <div style={{ fontSize: "14px" }}>
              <label>
                <input type="checkbox" /> Availability (450)
              </label>
              <br />
              <label>
                <input type="checkbox" /> Out of Stock (18)
              </label>
            </div>
          </div>
        </aside>

        {/* Product List */}
        <section style={{ flex: 1 }}>
          <p style={{ fontSize: "12px", color: "#888" }}>Home / Products</p>
          <h2 style={{ letterSpacing: "2px" }}>PRODUCTS</h2>

          <div className="product-grid">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-image-container">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="product-info">
                  <div className="product-details">
                    <p className="category-label">{p.category}</p>
                    <p>
                      <strong>{p.name}</strong>
                    </p>
                  </div>
                  <strong>${p.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;
