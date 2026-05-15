import React from 'react';
import { CheckCircle, DollarSign, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const FinancialServicesPage: React.FC = () => {
  const benefits = [
    "Bank-level security and compliance standards",
    "PCI-DSS and SOX compliance management",
    "Advanced fraud detection and prevention",
    "Secure payment processing solutions",
    "Real-time risk assessment and monitoring",
    "Regulatory reporting and audit support"
  ];

  const services = [
    {
      title: "Digital Banking Solutions",
      description: "Secure, scalable digital banking platforms that enhance customer experience and operational efficiency.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Payment Processing Systems",
      description: "PCI-compliant payment processing solutions with advanced security and fraud prevention capabilities.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Risk Management Platforms",
      description: "Comprehensive risk assessment and management solutions for financial institutions and fintech companies.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting solutions for financial regulations and standards.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 mt-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
                Financial Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Secure, compliant technology solutions for banks, credit unions, and fintech companies. Enhance customer experience while maintaining the highest security standards.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Secure Your Financial Systems
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Financial Services"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Why Financial Institutions Trust Us
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Specialized financial technology solutions that prioritize security, compliance, and customer experience.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                The financial services industry operates in one of the most heavily regulated and security-conscious environments, where trust, compliance, and operational excellence are paramount. Our financial technology solutions are built with deep understanding of banking regulations, risk management requirements, and the critical need for robust security measures that protect both institutions and their customers from evolving cyber threats.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We specialize in developing and implementing technology solutions that help financial institutions navigate complex regulatory landscapes including PCI-DSS, SOX, Basel III, and other industry-specific requirements. Our expertise spans traditional banking systems, fintech innovations, payment processing platforms, and risk management solutions that enable financial institutions to operate efficiently while maintaining the highest standards of security and compliance.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From digital banking platforms and mobile payment solutions to fraud detection systems and regulatory reporting tools, we deliver comprehensive financial technology solutions that enhance customer experience, improve operational efficiency, and support business growth. Our solutions are designed to integrate seamlessly with existing financial infrastructure while providing the scalability and reliability required for mission-critical financial operations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-light text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Our Financial Services Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial technology solutions designed for modern banking and financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-light text-slate-800 mb-4">{service.title}</h3>
                  <p className="font-light text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Modernize Your Financial Systems?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our secure, compliant solutions can transform your financial services operations.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Shield className="w-5 h-5 mr-2" />
              Get Started Today
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FinancialServicesPage;