import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import "../assets/styles/navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    function closeMenu(){
        setMenuOpen(false);
    }

    return (
        <header>
            <nav>
                <div className="navbar">
                    <h1>Kibandaski.</h1>
                    <ul className={`nav-links ${menuOpen? "active": ""}`}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeMenu}>Menu</NavLink></li>
                        <li><NavLink to="/mobile-app" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeMenu}>Mobile App</NavLink></li>
                        <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeMenu}>Contact Us</NavLink></li>
                    </ul>
                    <div className="nav-right">
                        <img src="/images/magnifying-glass-solid-full.svg" alt="magnifying glass image" />
                        <div className="search-items-container">
                            <img src="/images/bag-shopping-solid-full.svg" alt="shopping bag image" />
                            <div className="float"></div>
                        </div>
                        <button>Sign in</button>
                        <div className="hamburger" onClick={toggleMenu}>
                            {menuOpen ? "\u2715" : "\u2630"}
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Navbar;