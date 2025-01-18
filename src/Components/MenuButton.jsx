import React, { useState } from 'react';

const MenuButton = ({onToggle}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return ( 
    <button
    onClick={toggleMenu}
    className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center relative cursor-pointer"
    >
    <span
        className={`absolute w-6 h-[3px] bg-white transition-all duration-300 ease-in-out transform ${
        isActive ? 'translate-y-0 rotate-45' : '-translate-y-2'
        }`}
    ></span>
    <span
        className={`absolute w-6 h-[3px] bg-white transition-opacity duration-300 ease-in-out ${
        isActive ? 'opacity-0' : 'opacity-100'
        }`}
    ></span>
    <span
        className={`absolute w-6 h-[3px] bg-white transition-all duration-300 ease-in-out transform ${
        isActive ? 'translate-y-0 -rotate-45' : 'translate-y-2'
        }`}
    ></span>
    </button>
  );
};

export default MenuButton;
