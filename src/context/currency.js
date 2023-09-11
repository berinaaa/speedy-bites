import { createContext, useState, useContext, useEffect } from "react";
import '../App.css';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('currency') || 'USD';
  });

  const handleMoneyValueChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        handleMoneyValueChange,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};