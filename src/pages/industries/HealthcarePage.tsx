import React from 'react';
import { CheckCircle, Heart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const HealthcarePage: React.FC = () => {
  const benefits = [
    "HIPAA-compliant technology solutions",
    "Enhanced patient data security and privacy",
    "Streamlined healthcare operations and workflows",
    "Improved patient care through digital innovation",
    "Regulatory compliance and audit support",
    "Scalable healthcare IT infrastructure"
  ];

  const services = [
    {
      title: "Electronic Health Records (EHR)",
      description: "Secure, compliant EHR systems that improve patient care and operational efficiency.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Telemedicine Solutions",
      description: "HIPAA-compliant telehealth platforms enabling remote patient consultations and care.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Healthcare Data Analytics",
      description: "Advanced analytics solutions for population health management and clinical insights.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Medical Device Integration",
      description: "Seamless integration of medical devices with healthcare IT systems and workflows.",
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
                Healthcare
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  IT Solutions
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                HIPAA-compliant technology solutions that enhance patient care, improve operational efficiency, and ensure regulatory compliance in healthcare organizations.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Heart className="w-5 h-5 mr-2" />
                  Secure Your Healthcare IT
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Healthcare IT"
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
              Why Healthcare Organizations Choose Us
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Specialized healthcare IT solutions that prioritize patient safety, data security, and regulatory compliance.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                The healthcare industry faces unique challenges in balancing patient care excellence with stringent regulatory requirements, data security concerns, and operational efficiency demands. Our healthcare IT solutions are specifically designed to address these complex requirements while enabling healthcare organizations to leverage technology for improved patient outcomes, streamlined operations, and enhanced care delivery models.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We understand that healthcare data is among the most sensitive and regulated information types, requiring specialized expertise in HIPAA compliance, data encryption, access controls, and audit trails. Our team brings deep healthcare domain knowledge combined with technical expertise to deliver solutions that not only meet regulatory requirements but also support clinical workflows, improve patient engagement, and enable data-driven healthcare decisions.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From electronic health records and telemedicine platforms to medical device integration and population health management systems, we provide comprehensive healthcare IT solutions that transform how healthcare organizations operate. Our focus on interoperability, scalability, and user experience ensures that our solutions enhance rather than hinder clinical workflows while maintaining the highest standards of security and compliance.
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
              Our Healthcare IT Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions designed for modern medical practices and healthcare systems.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Transform Healthcare IT?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our HIPAA-compliant solutions can enhance patient care and operational efficiency.
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

export default HealthcarePage;