import React from 'react';
import Footer from '../shared/Footer/Footer';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/Review/review.css'
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';
import profileImg1 from '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/images/profileImg1.jpg';
import profileImg2 from '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/images/profileImg2.png';
import profileImg3 from '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/images/profileImg3.jpg';


const ReviewsSection = () => {

return (
  <div>

    <div className="menu-container">
      <div className="menu-card">
        <div className="menu-card-image">
          <img src={profileImg1} alt="Breakfast/Eggs" />
        </div>
        <div className="menu-card-text">
          <h2 className="menu-card-title">Johnnetta Smith</h2>
          <p className="menu-card-body">The burgers are always fresh and packed with flavor. I love their fries too, perfectly crispy!</p>
        </div>
      </div>
      <div className="menu-card">
        <div className="menu-card-image">
          <img src={profileImg2} alt="Lunch/Meat" />
        </div>
        <div className="menu-card-text">
          <h2 className="menu-card-title">Aria Doe</h2>
          <p className="menu-card-body">A beef burger with wholewheat patty, juicy lettuce and a side of gluten-free fries</p>
        </div>
      </div>
      <div className="menu-card">
        <div className="menu-card-image">
          <img src={profileImg3} alt="Soups/Meat" />
        </div>
        <div className="menu-card-text">
          <h2 className="menu-card-title">Michael Johnson</h2>
          <p className="menu-card-body">I highly recommend their milkshakes; they are rich and oh-so-delicious!</p>
        </div>
      </div>
    </div>
  </div>
);
};

export default ReviewsSection;
