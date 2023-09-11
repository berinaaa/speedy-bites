import React from 'react';
import '../../shared/Footer/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../App.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Speedy<span>Bites</span></h3>
        <p className="footer-links">
          <a href="/Home" className="link-1">Home</a>
          <a href="/About">About</a>
          <a href="/Menu">Menu</a>
          <a href="/Review">Review</a>
          <a href="/Card">Card</a>
        </p>
        <p className="footer-company-name">Speedy Bites © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fas fa-map-pin"></i>
          <p>Tetovo, North Macedonia</p>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <p>071 111 000</p>
        </div>
        <div>
          <i className="fas fa-envelope"></i>
          <p><a href="mailto:speedyburger@gmail.com">speedyburger@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          FastFood is your go-to restaurant for delicious fast food items that satisfy your taste buds. 
          We offer a wide range of burgers, fries, pizzas, and more.
        </p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.github.com/"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;