import React from 'react';
import { CheckCircle, Building, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const GovernmentPage: React.FC = () => {
  const benefits = [
    "FedRAMP and government compliance standards",
    "Secure cloud infrastructure for public sector",
    "Digital transformation for citizen services",
    "Cybersecurity and data protection solutions",
    "Legacy system modernization and integration",
    "Transparent and accountable technology governance"
  ];

  const services = [
    {
      title: "Digital Government Services",
      description: "Modern digital platforms that improve citizen services and government efficiency while maintaining security and compliance.",
      image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity frameworks that protect government data and infrastructure from evolving threats.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Cloud Infrastructure",
      description: "FedRAMP-compliant cloud solutions that provide secure, scalable infrastructure for government operations.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Legacy System Modernization",
      description: "Strategic modernization of legacy government systems to improve efficiency and reduce operational costs.",
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
                Government
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Secure, compliant technology solutions for government agencies and public sector organizations. Modernize operations while maintaining the highest security and compliance standards.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Building className="w-5 h-5 mr-2" />
                  Modernize Government Operations
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Government Technology"
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
              Why Government Agencies Choose Our Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Specialized government technology solutions that prioritize security, compliance, and citizen service delivery.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Government agencies operate under unique constraints and requirements that demand specialized technology solutions designed for public sector environments. Our government technology solutions are built with deep understanding of federal, state, and local government requirements including FedRAMP compliance, accessibility standards, transparency requirements, and the critical need for robust security measures that protect citizen data and government operations.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We recognize that government technology initiatives must balance multiple objectives including citizen service improvement, operational efficiency, cost effectiveness, and regulatory compliance. Our solutions are designed to help government agencies modernize legacy systems, improve citizen engagement, streamline internal processes, and enhance service delivery while maintaining the highest standards of security, privacy, and accountability required in the public sector.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From digital government services and citizen portals to cybersecurity frameworks and data management systems, we provide comprehensive government technology solutions that transform how agencies operate and serve their constituents. Our focus on interoperability, scalability, and compliance ensures that our solutions integrate effectively with existing government infrastructure while providing the capabilities necessary for digital government transformation.
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
              Our Government Technology Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive government technology solutions designed for public sector modernization and citizen service enhancement.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Modernize Government Operations?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our secure, compliant solutions can enhance citizen services and government efficiency.
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

export default GovernmentPage;