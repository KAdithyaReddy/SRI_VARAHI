import React from 'react';
import { CheckCircle, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const InsuranceServicesPage = () => {

  const benefits = [
    "Advanced policy management systems",
    "Secure customer data protection and compliance",
    "Automated claims processing workflows",
    "AI-powered risk assessment and fraud detection",
    "Regulatory compliance and audit support",
    "Enhanced customer communication platforms"
  ];

  const services = [
    {
      title: "Policy Management Solutions",
      description:
        "Comprehensive digital policy management systems designed to streamline underwriting, renewals, and customer lifecycle management.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Claims Processing Automation",
      description:
        "Smart claims management platforms that automate verification, approvals, settlements, and customer notifications.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Risk Assessment & Fraud Detection",
      description:
        "AI-powered analytics solutions that help insurers identify risks and prevent fraudulent claims.",
      image:
        "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Customer Engagement Platforms",
      description:
        "Modern communication and customer engagement systems that improve customer experience and retention.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-32 mt-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
                Insurance Industry
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  Technology
                </span>
              </h1>

              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Smart and secure technology solutions for insurance companies to automate operations,
                improve customer experience, and streamline claims management.
              </p>

              <Link to="/contact">
                <InteractiveButton size="large">
                  <Shield className="w-5 h-5 mr-2" />
                  Transform Your Insurance Operations
                </InteractiveButton>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Insurance Technology"
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
              Why Insurance Companies Choose Our Solutions
            </h2>

            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Industry-focused solutions designed for automation, compliance, and customer satisfaction.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >

                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>

                <p className="font-light text-gray-700 leading-relaxed">
                  {benefit}
                </p>

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
              Our Insurance Technology Solutions
            </h2>

            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions for modern insurance providers.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-light text-slate-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="font-light text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

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

          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Modernize Your Insurance Business?
          </h2>

          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let’s discuss how our technology solutions can improve efficiency,
            security, and customer satisfaction.
          </p>

          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <BarChart3 className="w-5 h-5 mr-2" />
              Get Started Today
            </InteractiveButton>
          </Link>

        </div>

      </section>

    </div>
  );
};

export default InsuranceServicesPage;