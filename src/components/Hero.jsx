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
        
        <center><p className='subHead'>More than just tech Solutions</p></center>
        <center><p className="heading">Empowering Students with Future-Ready Tech Skills</p></center>
        <center>
          <p className="desc">
            We help secondary school students unlock their potential by teaching coding, web development, graphics design, robotics, and other digital skills needed for the future.
          </p>
        </center>


        <div className="links">
          <a href="#join" className="wait">Contact Us</a>
        </div>

        <center>
          <div className="heroImg">
            <img src="/hero/hero.avif" alt="image" />
          </div>
        </center>

        <div className="logos" style={{ zIndex: 1, position: "relative" }}>
          <center><span style={span}>Trusted by Schools and Learning Communities</span></center>
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

export default Hero;
