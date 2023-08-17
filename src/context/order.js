// import { useEffect, useState } from "react";
// import { createContext, useContext } from "react";
// import { burgerData } from "../data/menu.data";
// const OrderContext = createContext();

// export const useOrderContext = () => useContext(OrderContext);

// export const OrderProvider = ({children}) => {
//     const [orders, setOrders] = useState([])
//     const [orderNumber, setOrderNumber] = useState(0)


//     const handleOrder = (newOrder) => {
//         const burger = burgerData.find((item) => item.name === newOrder);
//         const existingItem = orders.some((item) => item.name === newOrder);
//         if(existingItem){
//             setOrders(prevState => {
//                 return prevState.map(order => {
//                     if(order.name === newOrder) {
//                         return {...order, quantity: order.quantity + 1}
//                     }
//                     return order;
//                 })
//             })
//         } else {
//             setOrders(prevState => [
//                 ...prevState,
//                 {name: burger.name, quantity: 1, image: burger.imageUrl, description: burger.description, discountPrice: burger.discountPrice, realPrice: burger.realPrice }
//             ])
//         }
//         setOrderNumber(prevTotal => prevTotal + 1)
//     }
//     useEffect(() => {
//         localStorage.setItem('orders', orders);
//       }, [orders]);

//     console.log(orderNumber)
//     return (
//         <OrderContext.Provider
//             value={{
//                 orders,
//                 orderNumber,
//                 handleOrder
//             }}
//         >
//             {children}
//         </OrderContext.Provider>
//     )
// }




// prov 2
// import React, { useEffect, useState, createContext, useContext } from "react";
// import { burgerData } from "../data/menu.data";


// const OrderContext = createContext();

// export const useOrderContext = () => useContext(OrderContext); //



//  export const OrderProvider = ({ children }) => { 
//   const [orders, setOrders] = useState(() => {
//     const storedOrders = localStorage.getItem("orders");
//     return storedOrders ? JSON.parse(storedOrders) : [];
//   });

//   const [orderNumber, setOrderNumber] = useState(() => {
//     const storedOrderNumber = localStorage.getItem("orderNumber");
//     return storedOrderNumber ? parseInt(storedOrderNumber, 10) : 0;
//   });

//   const handleOrder = (newOrder) => {
//     const burger = burgerData.find((item) => item.name === newOrder);
//     const existingItem = orders.some((item) => item.name === newOrder);
//     if (existingItem) {
//       setOrders((prevState) => {
//         return prevState.map((order) => {
//           if (order.name === newOrder) {
//             return { ...order, quantity: order.quantity + 1 };
//           }
//           return order;
//         });
//       });
//     } else {
//       setOrders((prevState) => [
//         ...prevState,
//         {
//           name: burger.name,
//           quantity: 1,
//           image: burger.imageUrl,
//           description: burger.description,
//           discountPrice: burger.discountPrice,
//           realPrice: burger.realPrice,
//         },
//       ]);
//     }
//     setOrderNumber((prevTotal) => prevTotal + 1);
//   };



//   useEffect(() => {
//     localStorage.setItem("orders", JSON.stringify(orders));
//     localStorage.setItem("orderNumber", orderNumber.toString());
//   }, [orders, orderNumber]);

//   return (
//     <OrderContext.Provider
//       value={{
//         orders,
//         orderNumber,
//         handleOrder,
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };



// prov 3
import React, { useEffect, useState, createContext, useContext } from "react";
import { burgerData } from "../data/menu.data";
import Popup from "../components/Popup/Popup";

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  const [orderNumber, setOrderNumber] = useState(() => {
    const storedOrderNumber = localStorage.getItem("orderNumber");
    return storedOrderNumber ? parseInt(storedOrderNumber, 10) : 0;
  });

  const handleOrder = (newOrder) => {
    const burger = burgerData.find((item) => item.name === newOrder);
    const existingItem = orders.some((item) => item.name === newOrder);
    if (existingItem) {
      setOrders((prevState) =>
        prevState.map((order) => {
          if (order.name === newOrder) {
            return { ...order, quantity: order.quantity + 1 };
          }
          return order;
        })
      );
    } else {
      setOrders((prevState) => [
        ...prevState,
        {
          name: burger.name,
          quantity: 1,
          image: burger.imageUrl,
          description: burger.description,
          discountPrice: burger.discountPrice,
          realPrice: burger.realPrice,
        },
      ]);
    }
    setOrderNumber((prevTotal) => prevTotal + 1);
  };

  const handleDecrease = (itemName) => {
    setOrders((prevState) =>
      prevState.map((order) => {
        if (order.name === itemName && order.quantity > 1) {
          return { ...order, quantity: order.quantity - 1 };
        }
        return order;
      })
    );
  
    setOrderNumber((prevTotal) => {
      if (prevTotal > 1) { // Prevent decrementing below 1
        const newOrderNumber = prevTotal - 1;
        localStorage.setItem("orderNumber", newOrderNumber.toString());
        return newOrderNumber;
      }
      return prevTotal; 
    });
  };


  const handleRemoveItem = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    setOrderNumber((prevTotal) => {
      if (prevTotal > 0) { // Prevent decrementing below 0
        const newOrderNumber = prevTotal - 1;
        localStorage.setItem("orderNumber", newOrderNumber.toString());
        return newOrderNumber;
      }
      return prevTotal; // Order number remains the same if it's already 0
    });
  };


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


  const [showPopup, setShowPopup] = useState(false);

const handleSubmit = () => {
  if (orders.length > 0) {
    setShowPopup(true);
  }else {
        handleEmptyCartSubmit();
      }
};

const handleEmptyCartSubmit = () => {
  setShowPopup(true);
};

const [totalAmount, setTotalAmount] = useState(0);

const handleConfirmSubmit = () => {
  setOrders([]);
  setTotalAmount(0);
  localStorage.removeItem('orders');
  setShowPopup(false);
  setOrderNumber([]);
}; 



  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("orderNumber", orderNumber.toString());
  }, [orders, orderNumber]);

 
  return (
    <OrderContext.Provider
      value={{
        orders,
        orderNumber,
        handleOrder,
        handleDecrease,
        handleRemoveItem,
        handleSubmit,
        handleEmptyCartSubmit,
        handleConfirmSubmit,
      }}
    >
      {showPopup && (
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
      )}

      {children}
    </OrderContext.Provider>
  );
};

