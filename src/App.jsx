import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Resurs/Home";
import AboutUs from "./Resurs/AboutUs";
import Brands from "./Resurs/Brands";
import Team from "./Resurs/Team";
import Blog from "./Resurs/Blog";
import "./App.css";
import Footer from "./Resurs/Footer";

function App() {
  return (
    <div className="allcontainer">
      <Router>
        <div className="the-header">
          <div className="contact-info-left">
            <p>+995123456789</p>
            <p>@ Salocompany@gmail.com</p>
          </div>
          <div className="contact-info-right"></div>
        </div>
        <div className="header navigation logo">
          <div className="image-container">
            <a href="/">
              <img
                src="https://i.ibb.co/WVdNRxm/social-removebg-preview.png"
                alt="social"
              />
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">მთავარი</Link>
              </li>
              <li>
                <Link to="/about-us">ჩვენს შესახებ</Link>
              </li>
              <li>
                <Link to="/brands">ბრენდი</Link>
              </li>
              <li>
                <Link to="/team">პროდუქტები</Link>
              </li>
              <li>
                <Link to="/blog">ბლოგი</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
