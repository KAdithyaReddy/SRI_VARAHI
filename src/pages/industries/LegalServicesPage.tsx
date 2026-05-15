import React from 'react';
import { CheckCircle, Scale, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const LegalServicesPage: React.FC = () => {
  const benefits = [
    "Attorney-client privilege protection",
    "Secure document management and encryption",
    "Case management and workflow automation",
    "E-discovery and litigation support",
    "Compliance with legal industry regulations",
    "Secure client communication platforms"
  ];

  const services = [
    {
      title: "Legal Document Management",
      description: "Secure, encrypted document management systems that protect attorney-client privilege and sensitive legal information.",
      image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Case Management Systems",
      description: "Comprehensive case management platforms that streamline legal workflows and improve client service delivery.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "E-Discovery Solutions",
      description: "Advanced e-discovery tools and services that support litigation processes and regulatory compliance.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Client Communication Platforms",
      description: "Secure client portals and communication systems that maintain confidentiality and improve client relationships.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
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
                Legal Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Secure, compliant technology solutions for law firms and legal departments. Protect attorney-client privilege while enhancing operational efficiency and client service.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Scale className="w-5 h-5 mr-2" />
                  Secure Your Legal Practice
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Legal Services Technology"
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
              Why Legal Professionals Trust Our Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Specialized legal technology solutions that prioritize confidentiality, security, and compliance with legal industry standards.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                The legal profession operates under strict confidentiality requirements and ethical obligations that demand the highest levels of data security and privacy protection. Our legal technology solutions are specifically designed to meet these stringent requirements while enabling law firms and legal departments to leverage modern technology for improved efficiency, better client service, and enhanced case management capabilities.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We understand the critical importance of attorney-client privilege and the need for secure communication channels, encrypted document storage, and robust access controls that protect sensitive legal information. Our solutions incorporate advanced security measures, audit trails, and compliance features that ensure legal professionals can confidently use technology tools while maintaining their ethical and professional obligations.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From case management systems and document review platforms to e-discovery tools and client communication portals, we provide comprehensive legal technology solutions that streamline legal workflows, improve collaboration, and enhance client service delivery. Our solutions are designed to integrate seamlessly with existing legal processes while providing the security, reliability, and compliance features required in the legal industry.
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
              Our Legal Technology Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal technology solutions designed for modern law firms and legal departments.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Modernize Your Legal Practice?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our secure, compliant solutions can enhance your legal operations while protecting client confidentiality.
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

export default LegalServicesPage;