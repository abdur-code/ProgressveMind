import React from 'react';

const Section = ({ 
  children, 
  className = '',
  gradient = 'from-gray-900 via-purple-900/20 to-gray-900',
  withBorder = true,
  withPattern = false
}) => {
  return (
    <div className={`py-20 bg-gradient-to-br ${gradient} ${withBorder ? 'border-t border-gray-800' : ''} ${className}`}>
      {withPattern && (
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Section; 