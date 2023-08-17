import React, { useCallback, useContext, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../shared/Footer/Footer';
import Button from '../shared/Button/Button';
import { burgerData } from '../../data/menu.data';
import Popup from '../Popup/Popup'; // Import the Popup component
import { useCurrency } from '../../context/currency';
import mc from '../../images/mc.png';
import nno from '../../images/nno.png';
import subway from '../../images/subway.png';
import fg from '../../images/fg.png';
import bk from '../../images/bk.png';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/Menu/menu.css'
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';
import { convertCurrency, returnCurrencySymbol } from '../services/global';
import { useOrderContext } from '../../context/order';


// const Menu = () => {
  const Menu = () => {
  const [ showPopup, setShowPopup ]  = useState(false);
  const [ selectedBurger, setSelectedBurger ] = useState('');
  const { currency } = useCurrency();
  const [ cartItemCount, setCartItemCount ] = useState();
  const [ cartItems, setCartItems ] = useState([]);
  const { orders, setOrders, handleOrder} =  useOrderContext();

  const addToCart = (burgerName) => {
    setSelectedBurger(burgerName);
    setShowPopup(true);
    setCartItemCount(cartItemCount + 1);
  };

  // const handleYesClick = () => {

  //   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   const existingItem = cartItems.find((item) => item.name === selectedBurger);
  //   if (existingItem) {
  //     existingItem.quantity++;
  //   } else {
  //     const burger = burgerData.find((item) => item.name === selectedBurger);
  //     if (burger) {
  //       cartItems.push({
  //         name: burger.name,
  //         quantity: 1,
  //         image: burger.image,
  //         description: burger.description,
  //         discountPrice: burger.discountPrice,
  //         realPrice: burger.realPrice,
  //       });
  //     } else {
  //       console.error('Burger not found in burgerData.');
  //       return;
  //     }
  //   }

  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   setShowPopup(false);
  //   setCartItems(cartItems)
  //   handleOrder(selectedBurger)
  // };

  const handleYesClick = () => {
    handleOrder(selectedBurger);
    setShowPopup(false);
  }

  
  const handleNoClick = () => {
    setSelectedBurger('');
    setShowPopup(false);
  };
  return (
    <>
        {/* <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} /> */}
        <div className="responsive-container">
          <p className="team-head-text"></p>
          <div className="responsive-container-inner">
            <div className="product-container">
              {burgerData.map((item, index) => (
                <div className="product-card" key={index}>
                  <div className="product-image-wrapper">
                    <img className="product-image" src={item.imageUrl} alt={item.name} />
                  </div>
                  <p className="product-name">{item.name}</p>
                  <div className='komplet'>
                  <p style={{ paddingTop: '21px'}}>{item.description}</p>
                  </div>
                  <div className='butoni'>
                    <div className="product-price flex">
                      <span className="discounted-price">{convertCurrency(item.discountPrice, currency)}{returnCurrencySymbol(currency)}</span>
                      <span className="original-price">{convertCurrency(item.realPrice, currency)}{returnCurrencySymbol(currency)}</span>
                    </div>
                    <Button change={() => addToCart(item.name)}>
                      <i className="fas fa-shopping-bag"></i>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


<section className="section brand">
        <div className="brand-container container">
          <h4 className="section-subtitle"><i>Our Trusted Brands</i></h4>
      
          <div className="brand-images">
            <div className="brand-image">
              <img src={bk} alt="Brand 1" className="brand-img"/>
            </div>
            <div className="brand-image">
              <img src={fg} alt="Brand 2" className="brand-img"/>
            </div>
            <div className="brand-image">
              <img src={mc} alt="Brand 3" className="brand-img"/>
            </div>
            <div className="brand-image">
              <img src={nno} alt="Brand 4" className="brand-img"/>
            </div>
            <div className="brand-image">
              <img src={subway} alt="Brand 5" className="brand-img"/>
            </div>
          </div>
        </div>
      </section>
  

      {showPopup && (
        <Popup
          message={`Do you want to add "${selectedBurger}" to the cart?`}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
        />
      )}
      <Footer />
    </>
  );
};

export default Menu;