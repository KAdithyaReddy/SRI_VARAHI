import React, { ReactNode } from 'react';

interface InteractiveButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  size?: 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  onClick 
}) => {
  const baseClasses = "relative font-medium rounded-lg transition-all duration-300 group overflow-hidden";
  
  const variantClasses = {
    primary: "bg-cyan-400 text-white hover:bg-cyan-500 shadow-lg hover:shadow-cyan-400/25",
    outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white",
    light: "bg-white text-slate-800 hover:bg-gray-50 shadow-lg hover:shadow-xl"
  };
  
  const sizeClasses = {
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} hover:transform hover:-translate-y-1 hover:scale-105`}
      onClick={onClick}
    >
      {/* Ripple effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-sm"></div>
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Hover glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10"></div>
    </button>
  );
};

export default InteractiveButton;