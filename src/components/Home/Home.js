import React, { useState, useEffect } from 'react';
import burgerImage from '../../images/burger.jpeg';
import Footer from '../shared/Footer/Footer';
import './home.css'; 
import '../../App.css'; 

const Home = ({ cartItemCount }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 1000); 

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <div className={`swiper-slide ${animate ? 'animate' : ''}`}>
            <img src={burgerImage} alt="" className="home-img" />
            <div className="home-details">
              <div className="home-text">
                <h1 className="homeSubtitle scale-up-center">Get ready to level up your taste game and 
                experience a one-way ticket to Yumtown!</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
