import Footer from '../Footer/Footer';
import { burgerData } from '../../../data/menu.data';
import Button from '../Button/Button';
import Popup from '../../Popup/Popup';
import { useCurrency } from '../../../context/currency';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/shared/Card/card.css';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';
import { useState, useEffect } from 'react';
import { convertCurrency, returnCurrencySymbol } from '../../services/global';
import { useOrderContext } from '../../../context/order';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0); // Add the cartItemCount state
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemCount = storedCartItems.reduce((total, item) => total + item.quantity, 0);
    const { currency } = useCurrency();
    const { 
      orders, 
      handleOrder, 
      handleDecrease, 
      handleRemoveItem,
      handleSubmit, 
      handleConfirmSubmit,

    } = useOrderContext();


const updateCart = () => {
  // const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  // setCartItems(storedCartItems);
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  setCartItems(storedCartItems);

  const totalAmount = storedCartItems.reduce((total, item) => {
    const burgerItem = burgerData.find((burger) => burger.name === item.name);
    const itemPrice = item.quantity * burgerItem.discountPrice;
    return total + itemPrice;
  }, 0);
  console.log('Updated cartItems:', cartItems); // Add this line
  setTotalAmount(totalAmount);
  const itemCount = storedCartItems.reduce((total, item) => total + item.quantity, 0);
  setCartItemCount(itemCount);
};


  // const handleQuantityIncrease = (selectedIndex) => {
  //   const updatedCartItems = [...cartItems];
  //   updatedCartItems[selectedIndex].quantity += 1;
  //   setCartItems(updatedCartItems);
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  //   updateCart();    
  // };

  // const handleQuantityDecrease = (selectedIndex) => {
  //   const updatedCartItems = [...cartItems];
  //   if (updatedCartItems[selectedIndex].quantity > 1) {
  //     updatedCartItems[selectedIndex].quantity -= 1;
  //     setCartItems(updatedCartItems);
  //     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  //     updateCart();
      
  //   }
  // };

  // const handleQuantityChange = (event, selectedIndex) => {
  //   const newQuantity = parseInt(event.target.value, 10);
  //   const updatedCartItems = [...cartItems];
  //   updatedCartItems[selectedIndex].quantity = newQuantity;
  //   setCartItems(updatedCartItems);
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  //   updateCart();
  // };

  // const handleRemoveItem = (index) => {
  //   const updatedCartItems = [...cartItems];
  //   updatedCartItems.splice(index, 1);
  //   setCartItems(updatedCartItems);
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  //   updateCart();   
  // };
  
  
  // const handleConfirmSubmit = () => {
  //   setOrders([]);
  //   setTotalAmount(0);
  //   localStorage.removeItem('orders');
  //   setShowPopup(false);
  // };

  // const handleEmptyCartSubmit = () => {
  //   setShowPopup(true);
  // };

  // const handleSubmit = () => {
  //   if (cartItems.length > 0) {
  //     setShowPopup(true);
  //   } else {
  //     handleEmptyCartSubmit();
  //   }
  // };

  // useEffect(() => {
  //   updateCart();
  //   setCartItemCount(itemCount);
  // }, [cartItemCount]); 

 
  return (
    <>
      {/* <Navbar cartItemCount={cartItemCount} /> */}
      <section className="section cart">
        <div className="container">
          <h2 className="section-title">Your Cart</h2>
          <div className="bag">
            {orders.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              orders.map((item, index) => {
                const burgerItem = burgerData.find((burger) => burger.name === item.name);
                const itemPrice = item.quantity * burgerItem.discountPrice;

                return (
                  <div className="product-containerrr" key={index}>
                    <div className="product-images">
                      <img src={burgerItem.imageUrl} alt={item.name} />
                    </div>
                    <div className="slideshow-buttons"></div>

                    <div className="product-details">
                      <h1>{item.name}</h1>
                      <h2>
                        {convertCurrency(itemPrice, currency)}
                        {returnCurrencySymbol(currency)}
                      </h2>
                      <p className="product-description">{item.description}</p>
                      <div>
                        <label htmlFor="quantity" style={{ marginRight: '0.5rem' }}>
                          Quantity:
                        </label>
                        <span style={{ marginRight: '0.5rem' }}>{item.quantity}</span>
                        <Button className="btn-quantity" disabled={item.quantity === 1 ? true : false} change={() => handleDecrease(item.name)}>
                          -
                        </Button>
                        <Button className="btn-quantity" change={() => handleOrder(item.name)}>
                          +
                        </Button>
                       
                      </div>
                      <Button className="btn-remove" change={() => handleRemoveItem(index)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="total">
            <h3>Total: {convertCurrency(orders.reduce((total, item) => total + item.quantity * item.discountPrice, 0), currency)}
              {returnCurrencySymbol(currency)}</h3>
            
            <Button change={handleSubmit}>Submit</Button>
          </div>
        </div>
      </section>

      {/* {showPopup && (
        <Popup
          message={
            orders.length > 0
              ? 'Are you sure you want to submit your purchase?'
              : 'Your cart is empty. Add items before submitting.'
          }
          onYesClick={handleConfirmSubmit}
          onNoClick={() => setShowPopup(false)}
          onOkayClick={orders.length === 0 ? handleConfirmSubmit : undefined}
          selectedItemsAmount={orders.reduce((total, item) => total + item.quantity * item.discountPrice, 0)}
        />
      )} */}

      <Footer />
    </>
  );
};

export default Cart; 


