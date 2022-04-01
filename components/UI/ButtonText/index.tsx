import React, { ButtonHTMLAttributes, useEffect } from 'react';

interface ButtonTextProps {
   onClick?: Function;
   className?: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ children, onClick, className }) => {
   return (
      <button onClick={onClick as undefined} className={`p-2 transition hover:underline ${className || ''}`}>
         {children}
      </button>
   );
};

export default ButtonText;
