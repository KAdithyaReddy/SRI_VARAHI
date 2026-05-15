import React from 'react';
import { CheckCircle, Briefcase, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const ProfessionalServicesPage: React.FC = () => {
  const benefits = [
    "Client data protection and confidentiality",
    "Project management and collaboration tools",
    "Time tracking and billing automation",
    "Document management and version control",
    "Secure client communication platforms",
    "Business intelligence and reporting solutions"
  ];

  const services = [
    {
      title: "Client Relationship Management",
      description: "Comprehensive CRM solutions that help professional service firms manage client relationships and business development.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Project Management Systems",
      description: "Advanced project management platforms that streamline workflows and improve project delivery for professional services.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Time & Billing Solutions",
      description: "Automated time tracking and billing systems that improve accuracy and efficiency in professional service operations.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Document Management",
      description: "Secure document management and collaboration systems that protect client confidentiality and improve productivity.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
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
                Professional Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Scalable technology solutions for consulting firms, accounting practices, and professional service organizations. Enhance client service while protecting confidential information.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Optimize Your Professional Services
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Professional Services Technology"
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
              Why Professional Service Firms Choose Our Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Specialized technology solutions that enhance client service delivery, protect confidential information, and improve operational efficiency.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Professional service organizations operate in highly competitive environments where client satisfaction, operational efficiency, and data security are critical success factors. Our technology solutions for professional services firms are designed to enhance client relationships, streamline project delivery, and protect sensitive client information while providing the scalability and flexibility required to support business growth and changing market demands.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We understand the unique challenges facing professional service firms, from managing complex client relationships and project timelines to ensuring accurate time tracking and billing processes. Our solutions integrate seamlessly with existing business processes while providing advanced capabilities for project management, resource allocation, client communication, and business intelligence that enable firms to deliver exceptional client service while maintaining profitability.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From customer relationship management and project collaboration platforms to time tracking and billing systems, we provide comprehensive technology solutions that support the entire professional services lifecycle. Our focus on user experience, integration capabilities, and data security ensures that our solutions enhance rather than complicate professional workflows while providing the insights and automation necessary for competitive advantage.
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
              Our Professional Services Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for modern professional service organizations and consulting firms.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Enhance Your Professional Services?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our technology solutions can improve client service delivery and operational efficiency.
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

export default ProfessionalServicesPage;