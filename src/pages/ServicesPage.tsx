import React from 'react';
import { Shield, Cloud, Brain, Server, Lock, Zap, Users, CheckCircle, DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumBackground from '../components/PremiumBackground';
import InteractiveButton from '../components/InteractiveButton';

const ServicesPage: React.FC = () => {
  const services: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  }> = [
    {
      icon: Shield,
      title: "Managed Cybersecurity Fortress",
      description: "24/7 AI-powered threat detection and response with zero-trust architecture implementation.",
      features: ["Advanced Threat Detection", "Incident Response", "Compliance Management", "Security Training", "Vulnerability Assessments", "Penetration Testing"]
    },
    {
      icon: Cloud,
      title: "Strategic Cloud Architecture",
      description: "Scalable, secure cloud solutions engineered for enterprise growth and digital transformation.",
      features: ["Cloud Migration", "Multi-Cloud Strategy", "Cost Optimization", "Performance Monitoring", "Disaster Recovery", "Auto-Scaling Solutions"]
    },
    {
      icon: Brain,
      title: "Virtual CIO Services",
      description: "Strategic technology leadership and roadmap development aligned with business objectives.",
      features: ["Technology Strategy", "Budget Planning", "Vendor Management", "Digital Transformation", "Risk Assessment", "Innovation Planning"]
    },
    {
      icon: Server,
      title: "Proactive Infrastructure Management",
      description: "Predictive maintenance and optimization ensuring 99.9% uptime for mission-critical systems.",
      features: ["24/7 Monitoring", "Predictive Analytics", "Automated Remediation", "Performance Optimization", "Capacity Planning", "Hardware Lifecycle Management"]
    },
    {
      icon: Lock,
      title: "Compliance & Risk Management",
      description: "Comprehensive compliance solutions for HIPAA, SOX, PCI-DSS, and other regulatory requirements.",
      features: ["Regulatory Compliance", "Risk Assessments", "Policy Development", "Audit Support", "Documentation Management", "Training Programs"]
    },
    {
      icon: Zap,
      title: "Business Continuity & Disaster Recovery",
      description: "Robust backup and recovery solutions ensuring business operations never stop.",
      features: ["Backup Solutions", "Disaster Recovery Planning", "Business Impact Analysis", "Recovery Testing", "Failover Systems", "Data Protection"]
    }
  ];

  const benefits: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    {
      icon: CheckCircle,
      title: "Proactive Monitoring",
      description: "24/7 surveillance prevents issues before they impact your business"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade protection for your most sensitive data and systems"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        <PremiumBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Comprehensive IT Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient">
                Built for Your Success
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              From cybersecurity to cloud architecture, we provide the complete technology foundation your business needs to thrive in the digital age.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large">
                Schedule Your Free Consultation
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is designed to work together, creating a unified technology ecosystem that drives your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3 border border-gray-100 hover:border-cyan-200 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                    <img 
                      src={getServiceImage(service.title)} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300 relative">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-500"></span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:bg-blue-600 transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Sri Vaarahi Global Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just provide services – we become your strategic technology partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your IT?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Let's discuss how our comprehensive IT services can drive your business forward.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                Get Your Free IT Assessment
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  // Helper function to get service images
  function getServiceImage(serviceTitle: string) {
    const imageMap: { [key: string]: string } = {
      'Managed Cybersecurity Fortress': 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Strategic Cloud Architecture': 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Virtual CIO Services': 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Proactive Infrastructure Management': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Compliance & Risk Management': 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Business Continuity & Disaster Recovery': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    };
    return imageMap[serviceTitle] || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600';
  }
};

export default ServicesPage;