import React from 'react';
import '../../shared/Button/button.css';
import '../../../App.css';

const Button = ({ change, children, disabled }) => {
  return (
    <button className='button' disabled={disabled} onClick={change}>
      {children}
    </button>
  );
};

export default Button;