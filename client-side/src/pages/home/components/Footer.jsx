import React from 'react';

// CSS
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='Block'>
            <footer>
                <div className="footerFlex">
                    <div>
                        <a href="#" style={{ display: "flex", width: "fit-content" }}>
                            <img src="/beks_white.png" alt="logo" style={{ width: 120 }} />
                        </a>
                        <span>We are a technology-driven company offering website and app development, tech consulting, digital training, and customized tech solutions for businesses, schools, and individuals.</span>
                    </div>
                    <div className='footerLinks'>
                        <ul>
                            <li>Product</li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                        <ul>
                            <li>Socials</li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">X</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerFlexTwo">
                    <p className='copyright'>© 2025 <span>Beks</span>. All Rights Reserved.</p>
                    <div>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer