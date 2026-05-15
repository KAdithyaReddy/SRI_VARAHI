import React from 'react';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: string;
  stats: string;
  delay?: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  icon, 
  stats, 
  delay = 0 
}) => {
  return (
    <div 
      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-gray-100 hover:border-cyan-200 animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Stats */}
        <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
          {stats}
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-cyan-400/5 rounded-full group-hover:w-80 group-hover:h-80 group-hover:-translate-x-40 group-hover:-translate-y-40 transition-all duration-700 ease-out"></div>
      </div>
    </div>
  );
};

export default IndustryCard;