import React from 'react';
import '../assets/css/home.css';

// --- MOCK DATA (ข้อมูลจำลอง) ---
const newArrivals = [
  { id: 1, name: "Abstract Line Shirt", price: "$120", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Classic White Tee", price: "$45", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Graphic Print Oversize", price: "$89", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Beige Knit Polo", price: "$110", img: "https://images.unsplash.com/photo-1620012253295-c15cc3fe5d3d?auto=format&fit=crop&q=80&w=400" },
];

const collections = [
  { id: 1, title: "Summer Vibes", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=500" },
  { id: 2, title: "Urban Street", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" },
  { id: 3, title: "Formal Casual", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=500" },
];

function Home({ onLogout }) {
  return (
    <div className="home-container">
      {/* 1. Navbar (ส่วนหัว) */}
      <nav className="navbar">
        <div className="logo">XIV QR</div>
        <ul className="nav-links">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="nav-actions">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">🛒</button>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      {/* 2. Hero Section (แบนเนอร์ใหญ่) */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>NEW<br />COLLECTION</h1>
          <p>Summer 2025</p>
          <button className="cta-btn">Go To Shop →</button>
        </div>
        <div className="hero-image">
           <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" alt="Hero Model" />
        </div>
      </header>

      {/* 3. New This Week (สินค้าใหม่) */}
      <section className="section-container">
        <div className="section-header">
          <h2>NEW <span className="italic-text">THIS WEEK</span></h2>
          <span className="see-all">See All</span>
        </div>
        
        <div className="product-grid">
          {newArrivals.map((item) => (
            <div key={item.id} className="product-card">
              <div className="img-wrapper">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="product-info">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Collections (คอลเลคชั่น) */}
      <section className="section-container bg-light">
        <div className="section-header">
          <h2>XIV <br /> COLLECTIONS</h2>
          <p className="subtitle">24-25</p>
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

      {/* 5. Approach (ส่วนล่างสุดจากรูป) */}
      <section className="approach-section">
        <h2>OUR APPROACH TO FASHION DESIGN</h2>
        <p>At elegant vogue, we blend creativity with craftsmanship to create fashion that transcends trends.</p>
        <div className="collage-grid">
             <div className="collage-item c1"><img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=300" alt="" /></div>
             <div className="collage-item c2"><img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=300" alt="" /></div>
             <div className="collage-item c3"><img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=300" alt="" /></div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="footer">
        <p>© 2025 XIV QR Fashion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;