import React from 'react';

const SectionHeader = ({ 
  title,
  subtitle,
  badge,
  className = ''
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
      {subtitle && (
        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 