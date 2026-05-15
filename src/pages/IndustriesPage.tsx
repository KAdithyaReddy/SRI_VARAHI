import React from 'react';
import { Shield, Heart, DollarSign, Building, DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumBackground from '../components/PremiumBackground';
import InteractiveButton from '../components/InteractiveButton';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant solutions protecting patient data while enabling digital innovation and improving patient outcomes.",
      icon: "🏥",
      stats: "500+ Healthcare Clients Protected",
      details: [
        "HIPAA Compliance Management",
        "Electronic Health Records Security",
        "Telemedicine Infrastructure",
        "Medical Device Integration",
        "Patient Data Protection",
        "Regulatory Audit Support"
      ]
    },
    {
      title: "Financial Services",
      description: "Bank-level security and compliance for financial institutions, credit unions, and fintech companies.",
      icon: "🏦",
      stats: "99.99% Uptime Achieved",
      details: [
        "PCI-DSS Compliance",
        "SOX Compliance Support",
        "Fraud Detection Systems",
        "Secure Payment Processing",
        "Risk Management Solutions",
        "Regulatory Reporting"
      ]
    },
    
   
    {
      title: "Education",
      description: "FERPA-compliant solutions protecting student data while enabling modern learning environments.",
      icon: "🎓",
      stats: "50,000+ Students Protected",
      details: [
        "FERPA Compliance",
        "Student Information Systems",
        "Learning Management Platforms",
        "Campus Network Security",
        "Remote Learning Infrastructure",
        "Digital Classroom Solutions"
      ]
    },
    {
      title: "Professional Services",
      description: "Scalable IT solutions for consulting firms, accounting practices, and professional service organizations.",
      icon: "💼",
      stats: "200+ Firms Supported",
      details: [
        "Client Data Protection",
        "Project Management Systems",
        "Secure Communication Tools",
        "Document Management",
        "Time & Billing Systems",
        "Remote Work Solutions"
      ]
    }
  ];

  const compliance: Array<{
    name: string;
    icon: LucideIcon;
    description: string;
  }> = [
    { name: "HIPAA", icon: Heart, description: "Healthcare data protection" },
    { name: "PCI-DSS", icon: DollarSign, description: "Payment card security" },
    { name: "SOX", icon: Building, description: "Financial reporting compliance" },
    { name: "FERPA", icon: Shield, description: "Educational records privacy" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        <PremiumBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Industry-Specific
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-gradient">
                IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Deep expertise in regulated industries where security, compliance, and reliability are non-negotiable.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large">
                Discuss Your Industry Needs
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Specialized Expertise Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges, regulations, and requirements of your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100 hover:border-cyan-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={getIndustryImage(industry.title)} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="text-cyan-400 font-medium text-xs uppercase tracking-wide">
                    {industry.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance & Regulatory Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We ensure your technology meets all regulatory requirements and industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Secure Your Industry?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Let's discuss how our industry-specific solutions can address your unique challenges.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                Schedule Industry Consultation
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  // Helper function to get industry images
  function getIndustryImage(industryTitle: string) {
    const imageMap: { [key: string]: string } = {
      'Healthcare': 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Financial Services': 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Manufacturing': 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Legal Services': 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Education': 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'Professional Services': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    };
    return imageMap[industryTitle] || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600';
  }
};

export default IndustriesPage;