import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/shared/Navbar/navbar.css';
import { Link, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useCurrency } from '../../../context/currency';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';
import { useOrderContext } from '../../../context/order';

const Header = ({ cartItemCount }) => {
  const { currency, handleMoneyValueChange } = useCurrency();
  const { orderNumber } = useOrderContext()
  const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem('cartItems') || []);

  useEffect(() => {
    // Event listener for changes in local storage
    const handleStorageChange = (event) => {
      if (event.key === 'cartItems') { // Replace 'key' with your actual key
        setLocalStorageValue(event.newValue);
      }
    };

    // Add event listener
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Clean up by removing the event listener when component unmounts
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 


  return (
    <>
    <header className="header">
      <nav className="nav container flex">
        <a href="#" className="logo-content flex">
          {/* <span className="logo-text">SpeedyBites</span> */}
          <a href="/Home">
            <span className="logo-text">SpeedyBites</span>
        </a>
        </a>

        <div className="menu-content">
          <ul className="menu-list flex">
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Menu" className="nav-link">Menu</Link>
            <Link to="/Review" className="nav-link">Review</Link>
            <Link to="/Card" className="nav-link">
              Card {orderNumber > 0 && <span className="cart-count">{orderNumber}</span>}
            </Link>
          </ul>
        </div>

        <div className="currency">
          <select value={currency} onChange={(e) => handleMoneyValueChange(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="denar">ДЕН</option>
          </select>
        </div>
      </nav>
    </header>
    <Outlet />
    </>
  );
};


export default Header;
