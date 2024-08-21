// src/components/Button/Button.js
import React from 'react';
import './Button.css'; // Import the CSS file for styling

const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`} // Combine default 'btn' class with any additional classes passed in
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;