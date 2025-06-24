import React from 'react';

// CSS
import "../styles/Join.css";

function Join() {
    return (
        <div className='Block joinBlock' id='join'>
            <center><p className='subHead' style={{ position: "relative", zIndex: 2 }}>Contact</p></center>
            <center><p className="heading" style={{ position: "relative", zIndex: 2 }}>Contact us <br /><span style={{ color: "#ffffffb3" }}>Be the first to know</span></p></center>

            <form className='list' onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us!");
            }}>
                <input type="text" name="name" placeholder="Enter your name" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="tel" name="phone" placeholder="Enter your phone number" required />
                <textarea name="message" placeholder="Enter your message" rows="4" required style={{
                 width: "100%",
                fontSize: "16px",
                background: "none",
                border: "none",
                outline: "none",
                color: "#fff",
                resize: "none"
                }}></textarea>
                <button type="submit">Contact us</button>
            </form>

        </div>
    )
}

export default Join