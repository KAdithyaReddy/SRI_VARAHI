import React from 'react';
import { Zap, Brain, Rocket, Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumBackground from '../components/PremiumBackground';
import InteractiveButton from '../components/InteractiveButton';

const InnovationPage: React.FC = () => {
  const innovations = [
    {
      icon: Brain,
      title: "LendCRM",
      description: "Revolutionary customer relationship management platform designed specifically for lending institutions and financial services.",
      features: [
        "AI-powered lead scoring and qualification",
        "Automated loan processing workflows",
        "Real-time risk assessment and analytics",
        "Integrated compliance and regulatory reporting",
        "Mobile-first customer portal",
        "Advanced data visualization and insights"
      ],
      status: "Live Platform",
      users: "10,000+ Active Users"
    },
    {
      icon: Rocket,
      title: "AI Analytics Suite",
      description: "Next-generation business intelligence platform that transforms raw data into actionable insights using advanced machine learning.",
      features: [
        "Predictive analytics and forecasting",
        "Natural language query processing",
        "Automated report generation",
        "Real-time dashboard customization",
        "Cross-platform data integration",
        "Intelligent anomaly detection"
      ],
      status: "Beta Testing",
      users: "500+ Beta Users"
    },
    {
      icon: Target,
      title: "SecureCloud Framework",
      description: "Enterprise-grade cloud security framework that provides zero-trust architecture and comprehensive threat protection.",
      features: [
        "Multi-layer security protocols",
        "Automated threat response",
        "Compliance automation tools",
        "Identity and access management",
        "Continuous security monitoring",
        "Incident response automation"
      ],
      status: "Development",
      users: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <PremiumBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl p-6">
                  <img 
                    src="/image copy.png" 
                    alt="ARC IT LLC" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl opacity-20 blur-xl animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Innovation Lab
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                Shaping Tomorrow's Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Pioneering breakthrough solutions that redefine industry standards and create new possibilities for digital transformation.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Our Innovations
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Innovation Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions developed in-house to address real-world business challenges and drive industry transformation.
            </p>
          </div>

          <div className="space-y-24">
            {innovations.map((innovation, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg animate-pulse`}>
                      <innovation.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800">{innovation.title}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium">
                          {innovation.status}
                        </span>
                        <span className="text-gray-500 text-sm">{innovation.users}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {innovation.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-slate-800">Key Features:</h4>
                    {innovation.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-start group animate-fade-in-up"
                        style={{ animationDelay: `${index * 300 + featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <InteractiveButton variant="outline">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </InteractiveButton>
                  </Link>
                </div>

                {/* Visual Element */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <innovation.icon className="w-32 h-32 text-white/80" />
                      </div>
                      
                      {/* Animated Particles */}
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white/30 rounded-full animate-ping"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random()}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results from our innovative solutions across various industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group animate-fade-in-up">
              <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-cyan-400 mb-4">15+</div>
                <p className="text-xl text-gray-300">Active Projects</p>
              </div>
            </div>
            
            <div className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-cyan-400 mb-4">50+</div>
                <p className="text-xl text-gray-300">Patents Filed</p>
              </div>
            </div>
            
            <div className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-cyan-400 mb-4">$2M+</div>
                <p className="text-xl text-gray-300">R&D Investment</p>
              </div>
            </div>
            
            <div className="group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="bg-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-cyan-400 mb-4">100+</div>
                <p className="text-xl text-gray-300">Innovation Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Innovate Together?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Partner with us to bring your innovative ideas to life and create solutions that transform industries.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                <Brain className="w-5 h-5 mr-2" />
                Start Your Innovation Journey
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationPage;