import React from 'react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  result: string;
  image: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  client, 
  industry, 
  result, 
  image, 
  delay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Industry badge */}
        <div className="absolute top-4 left-4 bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
          {industry}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">{client}</p>
        
        {/* Result highlight */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg mb-4">
          <p className="text-cyan-600 font-semibold">{result}</p>
        </div>
        
        {/* Expanded Content */}
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 pt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Challenge:</h4>
                <p className="text-sm text-gray-600">
                  The client faced significant security vulnerabilities and operational inefficiencies that were impacting their business operations and customer trust.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Our Solution:</h4>
                <p className="text-sm text-gray-600">
                  We implemented a comprehensive security framework with 24/7 monitoring, advanced threat detection, and proactive maintenance protocols.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Key Metrics:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>• 99.9% Uptime Achieved</div>
                  <div>• 50% Cost Reduction</div>
                  <div>• Zero Security Breaches</div>
                  <div>• 24/7 Support Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-cyan-400 font-medium hover:text-cyan-600 transition-colors duration-300 group/btn"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-300 group-hover/btn:translate-x-1 ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-lg"></div>
      </div>
    </div>
  );
};

export default CaseStudyCard;