import React from 'react';
import Footer from '../shared/Footer/Footer';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/Review/review.css'
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';


const ReviewsSection = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className="new-responsive-container new-main-container">
  <p className="new-text-block new-team-head-text"></p>
  <div className="new-responsive-container">
    <div className="new-card-container">
      <div className="new-card">
        <div className="new-team-image-wrapper">
          <img className="new-team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png" alt="Johnnetta Smith" />
        </div>
        <p className="new-text-block new-name">Johnnetta Smith</p>
        <p>Regular Customer</p>
        <p>"This fast food restaurant is simply amazing! The burgers are always fresh and packed with flavor. I love their fries too, perfectly crispy!"</p>
      </div>
    </div>
    <div className="new-card-container">
      <div className="new-card">
        <div className="new-team-image-wrapper">
          <img className="new-team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png" alt="Jane Doe" />
        </div>
        <p className="new-text-block new-name">Jane Doe</p>
        <p>Food Blogger</p>
        <p>"The fast food here is a treat for the taste buds! I highly recommend their milkshakes; they are rich and oh-so-delicious!"</p>
      </div>
    </div>
    <div className="new-card-container">
      <div className="new-card">
        <div className="new-team-image-wrapper">
          <img className="new-team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png" alt="Michael Johnson" />
        </div>
        <p className="new-text-block new-name">Michael Johnson</p>
        <p>Happy Customer</p>
        <p>"This fast food restaurant has become my go-to place for quick and tasty meals. Their friendly staff and cozy ambiance make dining here a pleasure."</p>
      </div>
    </div>
  </div>
</div>
    <Footer />
    </>
  );
};

export default ReviewsSection;
