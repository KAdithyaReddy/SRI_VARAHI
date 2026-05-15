import React from 'react';
import { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  delay?: number;
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  delay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Expanded Content */}
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 pt-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                This comprehensive guide explores the latest trends and best practices in the technology industry. Our expert analysis provides actionable insights that can help your organization stay ahead of the competition.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Takeaways:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Strategic implementation approaches</li>
                  <li>• Industry-specific considerations</li>
                  <li>• ROI optimization techniques</li>
                  <li>• Future-proofing strategies</li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Published by Sri Vaarahi Global Solutions</span>
                <span>Expert Analysis</span>
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
      
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30"></div>
      </div>
    </article>
  );
};

export default InsightCard;