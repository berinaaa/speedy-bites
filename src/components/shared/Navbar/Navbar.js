import '../../shared/Navbar/navbar.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useCurrency } from '../../../context/currency';
import '../../../App.css';
import { useOrderContext } from '../../../context/order';

const Header = ({ cartItemCount }) => {
  const { currency, handleMoneyValueChange } = useCurrency();
  const { orderNumber } = useOrderContext()
  const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem('cartItems') || []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cartItems') { 
        setLocalStorageValue(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="nav container flex">
            <Link to="/Home">
              <span className="logo-text">SpeedyBites</span>
            </Link>
          <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {isMobileMenuOpen && (
            <span className="cart-count">{orderNumber}</span>
          )}
          <div className={`menu-content ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <ul className="menu-list flex">
              <Link to="/Home" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/About" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
              <Link to="/Menu" className="nav-link" onClick={closeMobileMenu}>
                Menu
              </Link>
              <Link to="/Review" className="nav-link" onClick={closeMobileMenu}>
                Review
              </Link>
              <Link to="/Card" className="nav-link" onClick={closeMobileMenu}>
                Card {orderNumber > 0 && <span className="cart-count">{orderNumber}</span>}
              </Link>
            </ul>
            <div className="currency">
              <select value={currency} onChange={(e) => handleMoneyValueChange(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="denar">ДЕН</option>
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;