import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner container">
                <div className="header-logo">
                    <a href="/">
                        <img src="/latten_it_solutions.png" alt="Logo" />
                    </a>
                </div>
                <div className="header-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='tel:4402134860'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;