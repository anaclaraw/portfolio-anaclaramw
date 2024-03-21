import React, { useState, useEffect } from 'react';
import SubButtons from './SubButtons';
import { IoIosContrast } from "react-icons/io";
import styles from './style.module.css'

const ButtonConstrast = ({ onContrasteChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  
  const top ={
    marginTop:"51%",
  }

  return (
   <>
      <button
        className="btn-contrast"
        onClick={handleButtonClick}
        
        >
        <IoIosContrast/>
      </button>

      {isOpen && <SubButtons onContrasteChange={onContrasteChange}/>}
          </>
   
  );
};

export default ButtonConstrast;
