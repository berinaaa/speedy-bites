import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { burgerData } from '../../data/menu.data';
import Popup from '../Popup/Popup';
import { useCurrency } from '../../context/currency';
import '../Menu/menu.css';
import '../../../src/App.css';
import { convertCurrency, returnCurrencySymbol } from '../services/global';
import { useOrderContext } from '../../context/order';

const Menu = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState('');
  const { currency } = useCurrency();
  const [cartItemCount, setCartItemCount] = useState();
  const { handleOrder } = useOrderContext();
  const [expandedCards, setExpandedCards] = useState({});

  const addToCart = (burgerName) => {
    setSelectedBurger(burgerName);
    setShowPopup(true);
    setCartItemCount(cartItemCount + 1);
  };

  const handleYesClick = () => {
    handleOrder(selectedBurger);
    setShowPopup(false);
  };

  const handleNoClick = () => {
    setSelectedBurger('');
    setShowPopup(false);
  };

  const toggleDescription = (index) => {
    setExpandedCards((prevExpandedCards) => ({
      ...prevExpandedCards,
      [index]: !prevExpandedCards[index],
    }));
  };

  return (
    <>
      <div className="product-card-container">
        {burgerData.map((item, index) => (
          <div className="menu-product-card" key={index}>
            <div className="menu-product-tumb">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="menu-product-details">
              <h4>
                <h4 className='itemName'>{item.name}</h4>
              </h4>
              <p>
                {expandedCards[index]
                  ? item.description
                  : item.description.split(' ').slice(0, 4).join(' ')}
                {item.description.split(' ').length > 5 && (
                  <button onClick={() => toggleDescription(index)}>
                    {expandedCards[index] ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </p>
              <div className="menu-product-bottom-details">
                <div className="menu-product-price">
                  <small>
                    {convertCurrency(item.realPrice, currency)}
                    {returnCurrencySymbol(currency)}
                  </small>
                  {convertCurrency(item.discountPrice, currency)}
                  {returnCurrencySymbol(currency)}
                </div>
                <div className="menu-product-links">
                  <button className='specialButton' onClick={() => addToCart(item.name)}>
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <Popup
          message={`Do you want to add "${selectedBurger}" to the cart?`}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
        />
      )}
    </>
  );
};

export default Menu;