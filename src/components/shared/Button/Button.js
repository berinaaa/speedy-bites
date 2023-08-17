import React from 'react';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/components/shared/Button/button.css';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';


const Button = ({ change, children, disabled }) => {
  return (
    <button className='button' disabled={disabled} onClick={change}>
      {children}
    </button>
  );
};

export default Button;