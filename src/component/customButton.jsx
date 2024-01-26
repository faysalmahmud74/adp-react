import React from 'react';

const ButtonComponent = ({ label, onClick, type }) => {
  const buttonClasses = {
    save: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
    cancel: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
  };

  const selectedClass = buttonClasses[type] || buttonClasses.save; // Default to 'save' if type is not recognized

  return (
    <button
      className={`focus:outline-none ${selectedClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
