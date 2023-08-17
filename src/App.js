// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/shared/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Menu from './components/Menu';
// import Review from './components/Review';
// import Card from './components/shared/Card';
// import './css/styles.css';
// import { CurrencyProvider } from './components/services/global';


// const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItemCount, setCartItemCount] = useState(0);
  // const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // const updateCart = () => {
  //   const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   setCartItems(storedCartItems);

  //   const itemCount = storedCartItems.reduce((total, item) => total + item.quantity, 0);
  //   setCartItemCount(itemCount);
  // };

  // useEffect(() => {
  //   updateCart();
  // }, []);


  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   setCartItems(storedCartItems);
  // }, []);
  

//   return (
//     <Router>
//         <CurrencyProvider>
          // <Routes>
          //   <Route path="/" element={<Home />} />
          //   <Route path="/home" element={<Home />} />
          //   <Route path="/about" element={<About />} />
          //   <Route path="/menu" element={<Menu />} />
          //   <Route path="/review" element={<Review />} />
          //   <Route path="/card" element={<Card />} />
          // </Routes>

//           {/* <Navbar cartItemCount={cartItemCount} /> */}
//           {/* <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} /> */}

//         </CurrencyProvider>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from './components/shared/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Review from './components/Review/Review';
import Card from './components/shared/Card/Card';
import { CurrencyProvider } from './context/currency';
import Footer from './components/shared/Footer/Footer';
import { SignalCellularConnectedNoInternet4BarSharp } from '@mui/icons-material';
import { CartProvider } from 'react-use-cart';
import { OrderProvider } from './context/order';


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
      element: <Header cartItemCount={cartItemCount}/>,
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
      {/* <OrderProvider> */}
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
