import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar({ click }) {
    return (
        <div className='Navbar'>
            <nav>
                <a href="#" style={{ display: "flex" }}>
                    <img src="/beks_white.png" alt="logo" style={{ width: 100 }} />
                </a>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                <div className="toggle">
                    <a href="#join" className="wait">Contact us</a>
                    <i onClick={click}>
                        <box-icon name='menu' color="white"></box-icon>
                    </i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar