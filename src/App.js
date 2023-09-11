import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from './components/shared/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Review from './components/Review/Review';
import Card from './components/shared/Card/Card';
import { CurrencyProvider } from './context/currency';
import { OrderProvider } from './context/order';
import Footer from './components/shared/Footer/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false); 
  const [totalAmount, setTotalAmount] = useState(0); 

  const updateCart = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);

    const itemCount = storedCartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  };

  useEffect(() => {

    updateCart();
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const router = createBrowserRouter ([
    {
      element: (
        <>
          <Header cartItemCount={cartItemCount} />
          <Outlet />
          <Footer />
        </>
      ),
        children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path:"/home", 
          element:<Home />
        },
        {
          path:"/about", 
          element:<About />
        },
        {
          path:"/menu", 
          element:<Menu />
        },
        {
          path:"/review",
          element:<Review />
        },
        {
          path:"/card",
          element:<Card />
        },
        
 
      ]
    }
  ]);

  return (
    <div>
      <OrderProvider>
        <CurrencyProvider>
          <RouterProvider router={router}>

          </RouterProvider>
        </CurrencyProvider>
      </OrderProvider>
    </div>
  )
}

export default App;
