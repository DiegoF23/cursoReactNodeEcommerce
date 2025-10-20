import React from 'react';

const Button = ({ onClick, children = 'Agregar al carrito', variant = 'primary', disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${disabled ? 'btn-disabled' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
