import React from 'react';
import Button from './Button';

const CTA = ({ 
  title,
  subtitle,
  badge,
  primaryButton,
  secondaryButton,
  className = ''
}) => {
  return (
    <div className={`relative bg-gradient-to-r from-purple-900/90 to-indigo-900/90 py-24 border-t border-gray-800 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
            {badge}
          </span>
        )}
        <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
        {subtitle && (
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButton && (
            <Button 
              variant="primary"
              to={primaryButton.to}
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </Button>
          )}
          {secondaryButton && (
            <Button 
              variant="secondary"
              to={secondaryButton.to}
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA; 