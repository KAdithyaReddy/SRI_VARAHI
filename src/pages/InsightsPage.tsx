import React from 'react';
import { useState, useMemo } from 'react';
import { Clock, ArrowRight, TrendingUp, Shield, Cloud, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumBackground from '../components/PremiumBackground';
import InsightCard from '../components/InsightCard';
import InteractiveButton from '../components/InteractiveButton';

const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const insights = [
    {
      title: "The Future of Zero Trust Architecture: A Complete Guide for 2025",
      excerpt: "As cyber threats evolve, traditional perimeter-based security models are becoming obsolete. Zero Trust Architecture represents a fundamental shift in how organizations approach cybersecurity.",
      date: "December 15, 2024",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cybersecurity"
    },
    {
      title: "Cloud Cost Optimization: 10 Strategies That Actually Work",
      excerpt: "Proven methodologies for reducing cloud infrastructure costs while maintaining performance and security. Learn from real-world implementations.",
      date: "December 10, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cloud Computing"
    },
    {
      title: "Advanced Threat Detection with Machine Learning",
      excerpt: "Exploring how AI and machine learning algorithms are revolutionizing cybersecurity threat identification and automated response systems.",
      date: "November 30, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cybersecurity"
    },
    {
      title: "Multi-Cloud Strategy: Best Practices for Enterprise",
      excerpt: "Comprehensive guide to implementing and managing multi-cloud environments for maximum flexibility, performance, and cost optimization.",
      date: "November 25, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cloud Computing"
    },
    {
      title: "AI-Powered Threat Detection: Beyond Traditional Security",
      excerpt: "How artificial intelligence and machine learning are revolutionizing cybersecurity threat identification and response.",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Artificial Intelligence"
    },
    {
      title: "Digital Transformation ROI: Measuring Success",
      excerpt: "Key metrics and methodologies for measuring the return on investment of digital transformation initiatives in modern enterprises.",
      date: "November 22, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business Strategy"
    },
    {
      title: "HIPAA Compliance in the Cloud: A Healthcare IT Guide",
      excerpt: "Navigate the complexities of maintaining HIPAA compliance while leveraging cloud technologies for healthcare organizations.",
      date: "November 28, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Healthcare IT"
    },
    {
      title: "Telemedicine Security: Protecting Patient Data",
      excerpt: "Essential security measures and compliance requirements for telemedicine platforms and remote healthcare delivery systems.",
      date: "November 18, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Healthcare IT"
    },
    {
      title: "The ROI of Proactive IT Management",
      excerpt: "Quantifying the business value of proactive IT services versus reactive support models with real case studies and metrics.",
      date: "November 20, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business Strategy"
    },
    {
      title: "IT Budget Planning: Strategic Allocation for Growth",
      excerpt: "Best practices for IT budget planning and resource allocation to maximize business value and support strategic growth initiatives.",
      date: "November 12, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business Strategy"
    },
    {
      title: "Ransomware Prevention: A Multi-Layered Approach",
      excerpt: "Comprehensive strategies for preventing, detecting, and responding to ransomware attacks in enterprise environments.",
      date: "November 15, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cybersecurity"
    },
    {
      title: "Industrial IoT Security: Protecting Smart Factories",
      excerpt: "Comprehensive security strategies for Industrial Internet of Things deployments in manufacturing and industrial environments.",
      date: "November 10, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Manufacturing"
    },
    {
      title: "Digital Transformation in Manufacturing: IoT Security",
      excerpt: "Securing Industrial Internet of Things (IoT) devices and networks in modern manufacturing environments.",
      date: "November 8, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Manufacturing"
    },
    {
      title: "Supply Chain Cybersecurity: Risk Management",
      excerpt: "Essential strategies for securing supply chain networks and managing cybersecurity risks in interconnected manufacturing ecosystems.",
      date: "November 5, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Manufacturing"
    },
    {
      title: "Virtual CIO Services: When and Why Your Business Needs One",
      excerpt: "Understanding the strategic value of Virtual CIO services and how they can accelerate your digital transformation.",
      date: "October 30, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Leadership"
    },
    {
      title: "Financial Services Cybersecurity: Regulatory Compliance",
      excerpt: "Navigating the complex regulatory landscape of financial services cybersecurity and compliance requirements.",
      date: "October 25, 2024",
      readTime: "11 min read",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Financial Services"
    },
    {
      title: "Disaster Recovery Planning: Beyond Backup Solutions",
      excerpt: "Comprehensive disaster recovery strategies that ensure business continuity in the face of any disruption.",
      date: "October 18, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Business Continuity"
    }
  ];

  const categories = [
    { name: "All", count: insights.length, icon: TrendingUp },
    { name: "Cybersecurity", count: insights.filter(insight => insight.category === "Cybersecurity").length, icon: Shield },
    { name: "Cloud Computing", count: insights.filter(insight => insight.category === "Cloud Computing").length, icon: Cloud },
    { name: "Business Strategy", count: insights.filter(insight => insight.category === "Business Strategy").length, icon: Brain },
    { name: "Healthcare IT", count: insights.filter(insight => insight.category === "Healthcare IT").length, icon: TrendingUp },
    { name: "Manufacturing", count: insights.filter(insight => insight.category === "Manufacturing").length, icon: TrendingUp }
  ];

  const filteredInsights = useMemo(() => {
    if (selectedCategory === 'All') {
      return insights;
    }
    return insights.filter(insight => insight.category === selectedCategory);
  }, [selectedCategory, insights]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <PremiumBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Technology Insights
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient">
                & Industry Trends
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on cybersecurity, cloud technology, digital transformation, and industry best practices.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large">
                Subscribe to Our Newsletter
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group ${
                  selectedCategory === category.name 
                    ? 'bg-cyan-400 text-white' 
                    : 'bg-white hover:bg-cyan-50'
                }`}
              >
                <category.icon className={`w-4 h-4 mr-2 ${
                  selectedCategory === category.name 
                    ? 'text-white' 
                    : 'text-cyan-400 group-hover:text-cyan-600'
                }`} />
                <span className={`font-medium ${
                  selectedCategory === category.name 
                    ? 'text-white' 
                    : 'text-slate-800 group-hover:text-cyan-600'
                }`}>
                  {category.name}
                </span>
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  selectedCategory === category.name 
                    ? 'bg-white/20 text-white' 
                    : 'bg-cyan-100 text-cyan-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {selectedCategory === 'All' ? 'All Insights' : `${selectedCategory} Insights`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCategory === 'All' 
                ? 'Expert analysis, practical guides, and industry trends to help you make informed technology decisions.'
                : `Specialized insights and expert analysis focused on ${selectedCategory.toLowerCase()} trends and best practices.`
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <InsightExpandableCard 
                key={index}
                {...insight} 
                delay={index * 100}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <InteractiveButton variant="outline" size="large">
              Load More Articles
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay Informed</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Get the latest technology insights, security updates, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <InteractiveButton variant="light">
                Subscribe
              </InteractiveButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Expandable Insight Card Component
const InsightExpandableCard: React.FC<{
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  delay: number;
}> = ({ title, excerpt, date, readTime, image, category, delay }) => {
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
        <div className="absolute top-4 left-4 bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
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
                This comprehensive analysis explores cutting-edge technology trends and provides actionable insights for business leaders. Our expert research covers implementation strategies, industry best practices, and future-proofing techniques.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Insights:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Strategic implementation frameworks</li>
                  <li>• ROI optimization methodologies</li>
                  <li>• Risk mitigation strategies</li>
                  <li>• Industry-specific recommendations</li>
                  <li>• Future technology roadmaps</li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Expert Analysis by Sri Vaarahi Global Solutions</span>
                <span>Technology Insights</span>
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

export default InsightsPage;