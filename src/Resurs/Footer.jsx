import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#about">შესახებ</a>
                    <a href="#services">მომსახურებები</a>
                    <a href="#contact">კონტაქტი</a>
                </div>
                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} თქვენი კომპანია. ყველა უფლება დაცულია.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
