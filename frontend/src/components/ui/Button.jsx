import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  to, 
  onClick,
  type = 'button'
}) => {
  const baseStyles = 'px-8 py-4 font-semibold rounded-lg transition-all transform hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 shadow-lg hover:shadow-purple-500/30',
    secondary: 'bg-transparent border-2 border-white/20 text-white hover:bg-white/10',
    outline: 'bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button; 