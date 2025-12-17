import React, { useState } from "react";
import {Link } from "react-router-dom"
import "../assets/styles/navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] =useState("home")
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
                        <Link onClick={()=>{setActiveMenu("home"); closeMenu()}} className={activeMenu==="home"? "active":""}>Home</Link>
                        <a href="#food-menu-container" onClick={()=>{setActiveMenu("menu"); closeMenu()}} className={activeMenu==="menu"? "active":""}>Menu</a>
                        <a href="#app-download" onClick={()=>{setActiveMenu("mobile-app"); closeMenu()}} className={activeMenu==="mobile-app"? "active":""}>Mobile App</a>
                        <a href="#footer" onClick={()=>{setActiveMenu("contact-us"); closeMenu()}} className={activeMenu==="contact-us"? "active":""}>Contact Us</a>
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