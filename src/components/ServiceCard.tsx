import React from 'react';
import { useState } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  delay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3 border border-gray-100 hover:border-cyan-200 animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with 3D hover effect */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-cyan-400/25">
            <Icon className="w-8 h-8 text-white" />
          </div>
          {/* Floating particles effect */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
        </div>
        
        {/* Title with kinetic underline */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300 relative">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-500"></span>
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Expanded Content */}
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-slate-800 mb-3">Detailed Service Overview:</h4>
            <p className="text-sm text-gray-700 mb-3">
              Our comprehensive approach ensures your technology infrastructure operates at peak performance while maintaining the highest security standards. We provide end-to-end solutions tailored to your specific business requirements.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                24/7 Monitoring & Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                Proactive Maintenance
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                Scalable Solutions
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                Expert Consultation
              </div>
            </div>
          </div>
        </div>
        
        {/* Features list with staggered animation */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
              style={{ 
                transform: 'translateX(-10px)',
                opacity: 0,
                animation: `slideInLeft 0.5s ease-out ${delay + 200 + index * 100}ms forwards`
              }}
            >
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Interactive CTA */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-cyan-400 font-medium hover:text-cyan-600 transition-all duration-300 flex items-center group/btn"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <svg 
            className={`w-4 h-4 ml-2 transform transition-all duration-300 group-hover/btn:translate-x-1 ${isExpanded ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
          </svg>
        </button>
      </div>
      
      {/* Hover ripple effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-cyan-400/10 rounded-full group-hover:w-96 group-hover:h-96 group-hover:-translate-x-48 group-hover:-translate-y-48 transition-all duration-700 ease-out"></div>
      </div>
    </div>
  );
};

export default ServiceCard;