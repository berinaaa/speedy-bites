import React from 'react';
import FiveGuysImage from '../../images/FiveGuys.jpeg';
import Footer from '../shared/Footer/Footer';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/About/about.css'
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';

const About = ({cartItemCount}) => {
  return (
    <>
{/* <Navbar cartItemCount={cartItemCount} /> */}
    <section className="section about" id="about">
      <div className="about-content container">
        <div className="about-imageContent">
          <img src={FiveGuysImage} alt="" className="about-img" />

          <div className="aboutImg-textBox">
            <p className="content-description">Sweet, Sour, Salt – with a bit of crunch</p>
          </div>
        </div>

        <div className="about-details">
          <div className="about-text">
            <h4 className="content-subtitle"><i>Our Burger Joint</i></h4>
            <h2 className="content-title">Where Classics Meet <br /> Bold Creations</h2>
            <p className="content-description">We take pride in serving you the best burgers in town.
              Our customers keep coming back because they know we deliver unbeatable taste.</p>

            <ul className="about-lists flex">
              <li className="about-list">Classic Cheeseburger</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;
