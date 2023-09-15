import { burgerData } from '../../../data/menu.data';
import Button from '../Button/Button';
import { useCurrency } from '../../../context/currency';
import '../../shared/Card/card.css';
import '../../../App.css';
import { useState } from 'react';
import { convertCurrency, returnCurrencySymbol } from '../../services/global';
import { useOrderContext } from '../../../context/order';

const Cart = () => {
  const [ setCartItems] = useState([]);
  const [ setTotalAmount] = useState(0);
  const [ setCartItemCount] = useState(0);
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const itemCount = storedCartItems.reduce((total, item) => total + item.quantity, 0);
  const { currency } = useCurrency();
  const { 
    orders, 
    handleOrder, 
    handleDecrease, 
    handleRemoveItem,
    handleSubmit, 
  } = useOrderContext();

  const updateCart = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    const totalAmount = storedCartItems.reduce((total, item) => {
      const burgerItem = burgerData.find((burger) => burger.name === item.name);
      const itemPrice = item.quantity * burgerItem.discountPrice;
      return total + itemPrice;
    }, 0);

    setTotalAmount(totalAmount);

    const itemCount = storedCartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  };

  return (
    <>
      <section className="section cart">
        <div className="coontainer">
          <h3 className="section-title">Your Cart</h3>

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
                      <h3 className="price-currency">
                        {convertCurrency(itemPrice, currency)}
                        {returnCurrencySymbol(currency)}
                      </h3>
                      <p className="product-description">{item.description}</p>
                      <div className="provo">
                        <label className="quantityyy" htmlFor="quantity" style={{ marginRight: '0.5rem' }}>
                          Quantity:
                        </label>
                        <span className="quantityyy" style={{ marginRight: '0.5rem' }}>{item.quantity}</span>
                        <Button className="btn-quantity" disabled={item.quantity === 1 ? true : false} change={() => handleDecrease(item.name)}>
                          -
                        </Button>
                        <Button className="btn-quantity" change={() => handleOrder(item.name)}>
                          +
                        </Button>
                      </div>
                      <div className="remove-button">
                        <Button className="btn-remove" change={() => handleRemoveItem(index)}>
                          Remove
                        </Button>
                      </div>
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
    </>
  );
};

export default Cart;