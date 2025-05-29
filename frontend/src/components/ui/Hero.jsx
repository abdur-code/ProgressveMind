import React from 'react';

const Hero = ({ 
  title,
  subtitle,
  badge,
  className = ''
}) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className={`text-center ${className}`}>
          {badge && (
            <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {typeof title === 'string' ? (
              <span className="block text-white">{title}</span>
            ) : (
              <>
                <span className="block text-white">{title[0]}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                  {title[1]}
                </span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero; 