import React from 'react';
import './Popup.css';
import Button from '../shared/Button/Button';
import '/Users/berina/Desktop/workspace/reactBurger/react-burger/src/App.css';

const Popup = ({ message, onYesClick, onNoClick, selectedItemsAmount, onOkayClick }) => {
    const showYesNoButtons = onYesClick && onNoClick;
    console.log(selectedItemsAmount)
    return (
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
          <div className="popup-buttons">
            {selectedItemsAmount === undefined ||  selectedItemsAmount !== 0 ? (
              <>
                <Button change={onYesClick} className="yesButtonPopup yes" >Yes</Button>
                <Button change={onNoClick} className="noButtonPopup ">No</Button>
              </>
            ) : (
              <Button change={onOkayClick}>Okay</Button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;
