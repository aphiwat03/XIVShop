import React from 'react';
import '../assets/css/home.css';
import { CiShoppingBasket } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom'; // 1. อย่าลืม import Link
 const newArrivals = [
  { id: 1, name: "Abstract Line Shirt", price: "$120", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Classic White Tee", price: "$45", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Graphic Print Oversize", price: "$89", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Beige Knit Polo", price: "$110", img: "https://images.unsplash.com/photo-1620012253295-c15cc3fe5d3d?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Classic White Tee", price: "$45", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" },
  { id:6, name: "Graphic Print Oversize", price: "$89", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400" },
  ];

  const collections = [
  { id: 1, title: "Summer Vibes", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500" },
  { id: 2, title: "Urban Street", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" },
  { id: 3, title: "Formal Casual", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=500" },
  ];
function Home({ onLogout }) {
  
  return (
    <div className="home-container">
        <nav className='navbar'>
          <div className='logo'>XIV QR</div>
          <ul className='nav-links'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          <div className='nav-actions'>
          <button className="icon-btn"><IoMdHeartEmpty /></button>
          <button className="icon-btn"><CiShoppingBasket /></button>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
          </div>
        </nav>
        <header className='hero-section'>
        <div className='hero-text'>
          <h1>NEW <br/>COLLECTION</h1>
          <p>Summer <br/>2025</p>
          <button className='cta-btn'>Go To Shop →</button><span><button>s</button><button>d</button></span>
        </div>
        <div className='hero-image'>
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" alt='Hero Modal'></img>
        </div>
        </header>

        <section className='section-container'>
          <div className='section-header'>
          <h2 style={{ 
                fontSize: '3rem', 
                lineHeight: '1', 
                fontWeight: 500, 
                marginBottom: '1rem', 
                fontStyle: 'italic' 
            }}>
            NEW
            <br/>
            THIS WEEK<span style={{ fontSize: '1.2rem', color: '#666', verticalAlign: 'top', marginLeft:'15px '}}>(120)</span>
          </h2> 
          <span className='italic-text'>See all</span>
          </div>

          <div className='product-grid'>
            {newArrivals.map((item) => (
              <div key={item.id} className='product-card'>
                <div className='img-wrapper'>
                  <img src={item.img} alt={item.name}></img>
                </div>
                <div className='product-info'> 
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='section-container bg-light'>
            <div className="hero-text">
              <h2>XIV<br/>COLLECTIONS<br/>23-34</h2>
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

        <section className='approach-section'>
          <h2>OUR APPROACH TO FASHOON DESIGN</h2>
          <p>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
           <div className='collage-grid'>
             <div className="collage-item c1"><img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300" alt="" /></div>
             <div className="collage-item c2"><img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300" alt="" /></div>
             <div className="collage-item c3"><img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=300" alt="" /></div>
           </div>
        </section>

        <footer className="footer">
        <p>© 2025 XIV QR Fashion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;