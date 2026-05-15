import React from 'react';
import { CheckCircle, Shield, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const ManagedServicesPage: React.FC = () => {
  const benefits = [
    "24/7 proactive monitoring and support",
    "Reduced IT costs and operational overhead",
    "Enhanced security and compliance management",
    "Predictable monthly IT expenses",
    "Access to enterprise-level expertise",
    "Focus on core business while we handle IT"
  ];

  const services = [
    {
      title: "Infrastructure Management",
      description: "Complete management of your IT infrastructure including servers, networks, and cloud resources.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Security Management",
      description: "Comprehensive cybersecurity services including threat monitoring, incident response, and compliance.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Cloud Management",
      description: "End-to-end cloud services management including optimization, monitoring, and cost control.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Help Desk Support",
      description: "Professional IT support services for your end users with fast response times and resolution.",
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
                Managed IT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Services
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Focus on your business while we manage your IT infrastructure. Our comprehensive managed services ensure your technology runs smoothly, securely, and efficiently 24/7.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Shield className="w-5 h-5 mr-2" />
                  Secure Your IT Infrastructure
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Managed Services"
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
              Why Choose Managed Services?
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Let our experts handle your IT so you can focus on what matters most - growing your business.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Managing complex IT infrastructure requires specialized expertise, continuous monitoring, and proactive maintenance—resources that many organizations struggle to maintain in-house. Our managed services provide comprehensive IT support that ensures your technology infrastructure operates at peak performance while reducing costs and minimizing downtime. We serve as your dedicated IT department, handling everything from routine maintenance to strategic technology planning.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our 24/7 monitoring and support services utilize advanced tools and methodologies to identify and resolve issues before they impact your business operations. We provide proactive maintenance, security updates, performance optimization, and capacity planning to ensure your systems remain reliable, secure, and scalable. Our team of certified professionals brings deep expertise across multiple technology domains, from network infrastructure to cloud platforms to cybersecurity.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                With our managed services, you gain predictable IT costs, improved system reliability, enhanced security posture, and access to enterprise-level expertise without the overhead of maintaining a large internal IT team. We work as an extension of your organization, understanding your business objectives and aligning our services to support your strategic goals while ensuring compliance with industry regulations and best practices.
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
              Our Managed IT Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT management solutions that keep your business running smoothly and securely.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Simplify Your IT Management?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let us handle your IT infrastructure so you can focus on growing your business with confidence.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <Clock className="w-5 h-5 mr-2" />
              Get Started Today
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManagedServicesPage;