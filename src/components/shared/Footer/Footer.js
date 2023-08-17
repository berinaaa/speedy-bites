import React from 'react';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/shared/Footer/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';



const Footer = () => {
    const handleMapButtonClick = () => {
        window.location.href = 'https://www.google.com/maps/place/Tetovo/@42.0076196,20.9483313,14z/data=!3m1!4b1!4m6!3m5!1s0x1353f0e82a50e8db:0x5587e34b46cad34c!8m2!3d42.0069115!4d20.9715269!16zL20vMDQxeWo1?entry=ttu';
      };
      const handleGmailButtonClick = () => {
        window.location.href = 'https://accounts.google.com/InteractiveLogin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AeDOFXiZE9KKyFj77idl0ZfIh0OxnbNnXZvlftZsDnTB9QstqgqD_KxLC3Y2fJxFTeo52QR1p679&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
      };
      const handleCallButtonClick = () => {
        window.location.href = 'https://support.microsoft.com/en-us/topic/make-and-receive-phone-calls-from-your-pc-21564230-abf6-f2bb-c7b7-1b15570662f5#ID0EFD=iOS';
      };
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Speedy<span>Bites</span>
        </h3>
        <p className="footer-links">
            <Link to="/Home" className="nav-link">Home| </Link>
            <Link to="/About" className="nav-link">About| </Link>
            <Link to="/Menu" className="nav-link">Menu| </Link>
            <Link to="/Review" className="nav-link">Review| </Link>
            <Link to="/Card" className="nav-link">Card</Link>
        </p>
      </div>

      <div className="footer-center">
        <div>
        <Button change={handleMapButtonClick}>
            <i className="fa fa-map-pin"></i>
          </Button>
          <p>
            <span>Tetovo</span> North Macedonia
          </p>
        </div>
        <div>
        <Button change={handleCallButtonClick}>
          <i className="fa fa-phone"></i>
          </Button>          
          <p>071 111 000</p>
          
        </div>
        <div>
          <Button change={handleGmailButtonClick}>
          <i className="fa fa-envelope"></i>
          </Button>
          <p>
            <a href="mailto:support@company.com">speedyburger@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span> FastFood is your go-to restaurant for delicious fast food items that satisfy your taste buds. 
          We offer a wide range of burgers, fries, pizzas, and more.
        </p>
        <div className="footer-icons">
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/">
          <i className="fab fa-github"></i>
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
