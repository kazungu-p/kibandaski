import React from "react";
import "../assets/styles/footer.css"

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1>kibandaski.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eos reprehenderit quisquam at neque nisi!</p>
                    <div className="footer-social-icons">
                        <img src="/images/facebook.svg" alt="facebook icon" />
                        <img src="/images/x.svg" alt="twittericon" />
                        <img src="/images/linkedin.svg" alt="linkedin icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+25412345678</li>
                        <li>info@kibandaski.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright © {currentYear} Kibandaski.com -All Rights Reserved</p>

        </div>
    )
}

export default Footer;