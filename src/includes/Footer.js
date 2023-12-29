import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner container">
                <div className="footer-logo">
                    <a href="/">
                        <h2>Latten IT Solutions</h2>
                        <p>440-213-4860</p>
                    </a>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href='/services'>Services</a></li>
                        <li><a href='tel:4402134860'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;