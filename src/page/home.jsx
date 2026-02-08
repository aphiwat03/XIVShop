import React from "react";
import "../assets/css/home.css";
import { CiShoppingBasket } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import logoImg from "../assets/pic/logo.png";
import { Link } from "react-router-dom";
const newArrivals = [
  {
    id: 1,
    name: "Abstract Line Shirt",
    price: "$120",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: "$45",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Graphic Print Oversize",
    price: "$89",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Beige Knit Polo",
    price: "$110",
    img: "https://www.chanel.com/puls-img/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1759155329614-homepage-fashion-one-desktop-18_2510x5760.jpg",
  },
  {
    id: 5,
    name: "Classic White Tee",
    price: "$45",
    img: "https://www.chanel.com/puls-img/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1757509136328-homepage-fashion-one-desktop-17_2510x5760.jpg",
  },
  {
    id: 6,
    name: "Graphic Print Oversize",
    price: "$89",
    img: "https://www.chanel.com/puls-img/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1742562149976-homepagecorpoonedesktopjpg_3240x5760.jpg",
  },
];

const collections = [
  {
    id: 1,
    title: "MEN",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    title: "WOMEN",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    title: "KID",
    img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=500",
  },
];
function Home({ onLogout }) {
  return (
    <div className="home-container">
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
      <header className="hero-section">
        <div className="hero-text">
          <h1>
            NEW <br />
            COLLECTION
          </h1>
          <p>
            Summer <br />
            2025
          </p>
          <button className="cta-btn">Go To Shop →</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
            alt="Hero Modal"
          ></img>
        </div>
      </header>

      <section className="section-container">
        <div className="section-header">
          <h2
            style={{
              fontSize: "3rem",
              lineHeight: "1",
              fontWeight: 500,
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            NEW
            <br />
            THIS WEEK
            <span
              style={{
                fontSize: "1.2rem",
                color: "#666",
                verticalAlign: "top",
                marginLeft: "15px ",
              }}
            >
              (120)
            </span>
          </h2>
          <a href="#" style={{ color: "#b1b0b0" }}>
            <span className="italic-text">See all</span>
          </a>
        </div>

        <div className="product-grid">
          {newArrivals.map((item) => (
            <div key={item.id} className="product-card">
              <div className="img-wrapper">
                <img src={item.img} alt={item.name}></img>
              </div>
              <div className="product-info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container bg-light">
        <div className="hero-text">
          <h2>
            XIV
            <br />
            COLLECTIONS
            <br />
            25-26
          </h2>
        </div>
        <div className="collection-grid">
          {collections.map((col) => (
            <div key={col.id} className="collection-card">
              <img src={col.img} alt={col.title} />
              <h3>{col.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="approach-section">
        <h2>OUR APPROACH TO FASHOON DESIGN</h2>
        <p>
          at elegant vogue , we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time each design
          is meticulously crafted, ensuring the highest quelity exqulsite finish
        </p>
        <div className="collage-grid">
          <div className="collage-item c1">
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300"
              alt=""
            />
          </div>
          <div className="collage-item c2">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300"
              alt=""
            />
          </div>
          <div className="collage-item c3">
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=300"
              alt=""
            />
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-col contact-col">
            <h3>Info</h3>
            <h5 style={{ color: "#cccccc" }}>
              ABOUT/
              <br />
              CONTRACTS
            </h5>
          </div>
          <div className="footer-col center-col">
            <div className="footer-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60"
                alt="Brand Aesthetics"
              />
              <span className="brand-overlay">XIV</span>
            </div>
          </div>
        </div>

        <div className="footer-col empty-col"></div>
        <div className="footer-bottom">
          <p style={{ color: "white" }}>© 2025 — copyright</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
