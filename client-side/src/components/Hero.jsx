import React from 'react';

// CSS
import "../styles/Hero.css";

function Hero() {
  let span = {
    fontSize: 16,
    fontWeight: 550
  }

  return (
    <div className="heroBlock" style={{ position: "relative" }}>
      <div className='Hero'>
        <center><p className='subHead'>More than a solution</p></center>
        <center><p className="heading">Your Partner in Tech Solutions, Development, and Training</p></center>
        <center>
          <p className="desc">Whether you need a custom website, a mobile app, tech consulting, or digital skills training, we help businesses, schools, and individuals achieve their technology goals.</p>
        </center>
        <div className="links">
          <a href="#join" className="wait">Contact us</a>
        </div>

        <center>
          <div className="heroImg">
            <img src="/hero/hero.avif" alt="image" />
          </div>
        </center>

        <div className="logos" style={{ zIndex: 1, position: "relative" }}>
          <center><span style={span}>Trusted by Schools, Businesses, and Growing Teams</span></center>
          <div>
            <img src="/hero/l1.svg" alt="image" />
            <img src="/hero/l2.svg" alt="image" />
            <img src="/hero/l3.svg" alt="image" />
            <img src="/hero/l4.svg" alt="image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero