import React, { useState, useEffect } from "react";
import { CiShoppingBasket, CiUser, CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../assets/css/product.css";
import "../../assets/css/home.css";
import logoImg from "../../assets/pic/logo.png";

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
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Full Sleeve Zipper",
      price: 199,
      category: "Cotton T-Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Classic Denim Jacket",
      price: 890,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Oversized Cotton Hoodie",
      price: 550,
      category: "Hoodie",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Slim Fit Chino Pants",
      price: 450,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "Vintage Graphic Tee",
      price: 250,
      category: "Cotton T-Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Urban Windbreaker",
      price: 790,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      name: "Casual Flannel Shirt",
      price: 390,
      category: "Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 10,
      name: "Lightweight Bomber Jacket",
      price: 950,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 11,
      name: "Classic Polo Shirt",
      price: 290,
      category: "Polo",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 12,
      name: "Premium Canvas Tote Bag",
      price: 150,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 13,
      name: "Vintage Snapback Cap",
      price: 350,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 14,
      name: "Leather Bi-fold Wallet",
      price: 590,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 15,
      name: "Lightweight Summer Sandals",
      price: 450,
      category: "Shoes",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 16,
      name: "Comfort Cotton Socks",
      price: 99,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 17,
      name: "Athletic Performance ",
      price: 120,
      category: "Sports",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 18,
      name: "Cozy Knit Beanie",
      price: 290,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 19,
      name: "Retro Round Sunglasses",
      price: 790,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 20,
      name: "Classic Leather Belt",
      price: 490,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 21,
      name: "Patterned Silk Scarf",
      price: 850,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 22,
      name: "Military Cargo Shorts",
      price: 550,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 23,
      name: "Oversized Knit Sweater",
      price: 990,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 24,
      name: "Breathable Linen Shirt",
      price: 650,
      category: "Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 25,
      name: "Professional Running Shoes",
      price: 1290,
      category: "Shoes",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 26,
      name: "Large Travel Duffel Bag",
      price: 1590,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 27,
      name: "Urban Bucket Hat",
      price: 390,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 28,
      name: "Relaxed Fit Sweatpants",
      price: 490,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 29,
      name: "Essential Cotton Tank Top",
      price: 150,
      category: "Cotton T-Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 30,
      name: "Distressed Denim Shorts",
      price: 450,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 31,
      name: "Relaxed Fit Chinos",
      price: 590,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 32,
      name: "Slim Fit Indigo Jeans",
      price: 1290,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 33,
      name: "Graphic Print Hoodie",
      price: 750,
      category: "Hoodie",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 34,
      name: "Wool Blend Overcoat",
      price: 2500,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 35,
      name: "Leather Chelsea Boots",
      price: 1890,
      category: "Shoes",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 36,
      name: "Minimalist Silver Watch",
      price: 1450,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 37,
      name: "Polarized Sunglasses",
      price: 890,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 38,
      name: "Waterproof Windbreaker",
      price: 1100,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 39,
      name: "Oxford Button-Down Shirt",
      price: 550,
      category: "Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 40,
      name: "Performance Gym Shorts",
      price: 350,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 41,
      name: "High-Top Canvas Sneakers",
      price: 950,
      category: "Shoes",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 42,
      name: "Embroidered Baseball Cap",
      price: 290,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 43,
      name: "Knitted V-Neck Cardigan",
      price: 850,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 44,
      name: "Urban Cargo Joggers",
      price: 690,
      category: "Pants",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 45,
      name: "Striped Breton Top",
      price: 390,
      category: "Cotton T-Shirt",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 46,
      name: "Leather Messenger Bag",
      price: 1650,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 47,
      name: "Velvet Party Blazer",
      price: 2200,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 48,
      name: "Slip-on Suede Loafers",
      price: 1350,
      category: "Shoes",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 49,
      name: "Lightweight Puffer Vest",
      price: 990,
      category: "Outerwear",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 50,
      name: "Premium Silk Necktie",
      price: 450,
      category: "Accessories",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const productSectionRef = React.useRef(null);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const itemsPerPage = 15;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        {/* left */}
        <div className="nav-left">
          <button className="icon-btn">
            <IoMdMenu />
          </button>
          <ul className="nav-links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        {/* center */}
        <div className="nav-center">
          <img src={logoImg} alt="XIV QR Logo" style={{ width: "50px" }} />
        </div>
        {/* right */}
        <div className="nav-actions">
          <button className="icon-btn">
            <IoMdHeartEmpty />
          </button>
          <button className="icon-btn">
            <div className="cart-btn">
              <span style={{ fontSize: "12px" }}>Cart</span>
              <CiShoppingBasket size={18} />
            </div>
          </button>
          <button className="icon-btn">
            <CiUser />
          </button>
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
          <div className="filter-section">
            <p>
              <strong>Category</strong>
            </p>
            <div className="filter-list">
              {[
                "T-Shirt",
                "Hoodie",
                "Pants",
                "Outerwear",
                "Accessories",
                "Shoes",
              ].map((cat) => (
                <label key={cat} className="filter-item">
                  <input type="checkbox" /> {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="filter-section">
            <p>
              <strong>Color</strong>
            </p>
            <div className="color-grid">
              {["#000", "#fff", "#ff0000", "#0000ff", "#808080", "#f5f5dc"].map(
                (color) => (
                  <div
                    key={color}
                    className="color-circle"
                    style={{
                      backgroundColor: color,
                      border: color === "#fff" ? "1px solid #ddd" : "none",
                    }}
                  />
                ),
              )}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <p>
              <strong>Price Range</strong>
            </p>
            <input type="range" min="0" max="5000" className="price-slider" />
            <div className="price-labels">
              <span>$0</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="filter-section">
            <p>
              <strong>Tags</strong>
            </p>
            <div className="tag-container">
              {["New", "Sale", "Best Seller", "Limited", "Summer"].map(
                (tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="filter-section">
            <p>
              <strong>Rating</strong>
            </p>
            <div className="filter-list">
              {[5, 4, 3, 2, 1].map((star) => (
                <label key={star} className="rating-item">
                  <input type="radio" name="rating" />
                  <span className="stars">
                    {"★".repeat(star)}
                    {"☆".repeat(5 - star)}
                  </span>
                  <span className="rating-text"> & up</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product List */}
        <section style={{ flex: 1 }}>
          <p style={{ fontSize: "12px", color: "#888" }}>Home / Products</p>
          <h2 ref={productSectionRef} style={{ letterSpacing: "2px" }}>
            PRODUCTS
          </h2>

          <div className="product-container">
            <div className="product-grid">
              {currentProducts.map((p) => (
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

            {/* ส่วน Pagination ที่สไตล์เข้ากัน */}
            <div className="pagination-wrapper">
              <button
                className="page-btn"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                PREV
              </button>

              <span className="page-info">
                {currentPage} / {totalPages}
              </span>

              <button
                className="page-btn"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                NEXT
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Product;
