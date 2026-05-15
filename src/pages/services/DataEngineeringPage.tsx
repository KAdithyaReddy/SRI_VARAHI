import React from 'react';
import { CheckCircle, Database, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const DataEngineeringPage: React.FC = () => {
  const benefits = [
    "Scalable data pipelines for growing businesses",
    "Real-time data processing and analytics",
    "Improved data quality and governance",
    "Reduced data processing costs",
    "Enhanced data security and compliance",
    "Faster time-to-insights for decision making"
  ];

  const services = [
    {
      title: "Data Pipeline Development",
      description: "Build robust, scalable data pipelines that handle large volumes of data efficiently.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Data Warehouse Design",
      description: "Design and implement modern data warehouses optimized for analytics and reporting.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "ETL/ELT Solutions",
      description: "Extract, transform, and load data from multiple sources into unified systems.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Real-time Data Streaming",
      description: "Implement real-time data streaming solutions for immediate insights and actions.",
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
                Data Engineering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Solutions
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                Transform raw data into valuable business insights with our comprehensive data engineering services. Build scalable, reliable data infrastructure that powers your analytics and AI initiatives.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <Database className="w-5 h-5 mr-2" />
                  Build Your Data Infrastructure
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Data Engineering"
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
              Why Data Engineering Matters
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Unlock the full potential of your data with robust engineering solutions that ensure quality, scalability, and accessibility.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Data is the lifeblood of modern businesses, but raw data alone is not enough. Our data engineering services transform your disparate data sources into a unified, reliable, and scalable data infrastructure that powers intelligent decision-making across your organization. We specialize in building robust data pipelines that can handle massive volumes of structured and unstructured data from multiple sources.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our team of certified data engineers brings deep expertise in modern data technologies including Apache Spark, Kafka, Airflow, and cloud-native data services from AWS, Azure, and Google Cloud. We design and implement data architectures that are not only performant and reliable but also cost-effective and future-proof, ensuring your data infrastructure can scale with your business growth.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                From real-time streaming data processing to batch ETL operations, from data lake implementations to modern data warehouse solutions, we provide comprehensive data engineering services that establish a solid foundation for your analytics and AI initiatives. Our focus on data quality, governance, and security ensures that your data assets remain accurate, compliant, and protected.
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
              Our Data Engineering Services
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive data engineering solutions to build, maintain, and optimize your data infrastructure.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Engineer Your Data Success?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's build a data infrastructure that scales with your business and drives intelligent decision-making.
          </p>
          <Link to="/contact">
            <InteractiveButton size="large" variant="light">
              <BarChart3 className="w-5 h-5 mr-2" />
              Start Your Data Journey
            </InteractiveButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataEngineeringPage;