import React from 'react';
import { IoIosContrast } from "react-icons/io";

const SubButtons = ({ onContrasteChange }) => {
  const handleButtonClick = (value) => {
    onContrasteChange(value);
  };
  return (
    <div >
       <button onClick={() => handleButtonClick('contrast(1)')}>
        <IoIosContrast/>
        Desabilitado
      </button>
      <button    onClick={() => handleButtonClick('invert(100%)')}>
        <IoIosContrast/>
        Invertido
      </button>
      <button onClick={() => handleButtonClick('opacity(55%)')}>
      <IoIosContrast />
        Dessaturado
      </button>
      <button onClick={() => handleButtonClick('saturate(430%)')}>
      <IoIosContrast/>
        Alto 
      </button>
    </div>
  );
};

export default SubButtons;
