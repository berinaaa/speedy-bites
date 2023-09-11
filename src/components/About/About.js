import React from 'react';
import FiveGuysImage from '../../images/FiveGuys.jpeg';
import '../About/about.css';
import '../../../src/App.css';

const About = ({}) => {
  return (
    <>
      <section className="aboutSection about" id="about">
        <div className="about-content aboutContainer">
          <div className="about-imageContent">
            <img src={FiveGuysImage} alt="" className="about-img" />
            <div className="aboutImg-textBox">
              <p className="content-description">Sweet, Sour, Salt – with a bit of crunch</p>
            </div>
          </div>
          <div className="about-details">
            <div className="about-text">
              <h4 className="content-subtitle"><i>Our Burger Joint</i></h4>
              <h1 className="content-title expand-animation">Where Classics Meet Bold Creations</h1>
              <p className="content-description">
                We take pride in serving you the best burgers in town.
                Our customers keep coming back because they know we deliver unbeatable taste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;