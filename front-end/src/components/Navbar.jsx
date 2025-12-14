import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import "../assets/styles/navbar.css"

function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu(){
        setMenuOpen(!menuOpen);
    }

    return(
        <header>
            <nav>
                <div className="navbar">
                    <h1>Kibandaski.</h1>
                    <ul className="nav-links">
                        <li><NavLink to="/" className={({isActive})=> isActive? "nav-item active": "nav-item"}>Home</NavLink></li>
                        <li><NavLink to="/menu" className={({isActive})=> isActive? "nav-item active": "nav-item"}>Menu</NavLink></li>
                        <li><NavLink to="/mobile-app" className={({isActive})=> isActive? "nav-item active": "nav-item"}>Mobile App</NavLink></li>
                        <li><NavLink to="/contact-us" className={({isActive})=> isActive? "nav-item active": "nav-item"}>Contact Us</NavLink></li>
                    </ul>
                    <div className="nav-right">
                        <img src="/images/magnifying-glass-solid-full.svg" alt="magnifying glass image" />
                        <div className="search-items-container">
                            <img src="/images/bag-shopping-solid-full.svg" alt="shopping bag image" />
                            <div className="float"></div>
                        </div>
                        <button>Sign in</button>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        {menuOpen? "\u2615": "\u2630"}
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;