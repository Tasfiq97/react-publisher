import React from 'react';
import "./Header.css"

const Header = () => {
    // title section 
    return (
        <div>
        <div className="header-sec">
            <h1>Billionaire <span>Publications</span> </h1>
            {/* nav section  */}

            <nav className="navbar">
                <a href="/about">About Us</a>
                <a href="/publication">Our publications</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact Us</a>

            </nav>
        </div>
        {/* total cost section  */}
        <div className="total-sec">
            <h1>Total Budget For Publication  : <span>$ 22,500,000</span></h1>
        </div>
        </div>
        
    );
};

export default Header;