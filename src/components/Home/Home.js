import React from 'react';
import burgerImage from '../../images/burger.jpeg'; // Import the image using require
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/Home/home.css'
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';


const Home = ({cartItemCount}) => {
  return ( 
    <>
    <section className="home" id="home">
      <div className="home-content">
        <div className="swiper-slide">
          <img src={burgerImage} alt="" className="home-img" /> 
          <div className="home-details">
            <div className="home-text">
              <h4 className="homeSubtitle">Serving Savory Delights.</h4>
              <h2 className="homeTitle">Quick Bites with <br /> Irresistible Flavor.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
</>
  );
};
export default Home;
