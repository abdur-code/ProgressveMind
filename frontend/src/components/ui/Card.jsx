import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  gradient = 'from-purple-900/30 to-indigo-900/30',
  border = 'border-purple-700/30',
  hover = true 
}) => {
  return (
    <div 
      className={`
        bg-gradient-to-br ${gradient} 
        backdrop-blur-sm 
        border ${border} 
        rounded-xl 
        p-8
        ${hover ? 'hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 transform hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card; 