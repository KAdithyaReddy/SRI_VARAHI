import React from 'react';
import { CheckCircle, GraduationCap, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../../components/InteractiveButton';
import TrustedPartners from '../../components/TrustedPartners';

const EducationPage: React.FC = () => {
  const benefits = [
    "FERPA-compliant student data protection",
    "Modern learning management systems",
    "Campus network security and infrastructure",
    "Remote learning and digital classroom solutions",
    "Student information system integration",
    "Educational technology support and training"
  ];

  const services = [
    {
      title: "Learning Management Systems",
      description: "Modern LMS platforms that enhance teaching effectiveness and student engagement in digital learning environments.",
      image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Student Information Systems",
      description: "FERPA-compliant student data management systems that streamline administrative processes and protect privacy.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Campus Network Infrastructure",
      description: "Secure, scalable network infrastructure that supports modern educational technology and digital learning initiatives.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      title: "Digital Classroom Solutions",
      description: "Interactive digital classroom technologies that enhance teaching and learning experiences for students and educators.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
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
                Education
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Technology
                </span>
              </h1>
              <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
                FERPA-compliant educational technology solutions that enhance learning outcomes, protect student privacy, and modernize educational institutions for the digital age.
              </p>
              <Link to="/contact">
                <InteractiveButton size="large">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Transform Your Educational Technology
                </InteractiveButton>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Education Technology"
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
              Why Educational Institutions Choose Our Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Specialized educational technology solutions that prioritize student privacy, learning outcomes, and institutional efficiency.
            </p>
          </div>

          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Educational institutions face the dual challenge of protecting student privacy while leveraging technology to enhance learning outcomes and operational efficiency. Our educational technology solutions are designed with deep understanding of FERPA requirements, student data privacy concerns, and the unique needs of educational environments from K-12 schools to higher education institutions.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                We recognize that educational technology must serve multiple stakeholders including students, educators, administrators, and parents, each with different needs and technical capabilities. Our solutions are designed to be intuitive and accessible while providing the robust functionality required for modern educational delivery, from learning management systems and student information systems to digital classroom tools and assessment platforms.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                Our comprehensive educational technology solutions support the entire educational ecosystem, from enrollment and student services to curriculum delivery and assessment. We help educational institutions implement secure, scalable technology platforms that enhance teaching effectiveness, improve student engagement, and streamline administrative processes while ensuring compliance with educational privacy regulations and accessibility requirements.
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
              Our Educational Technology Solutions
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational technology solutions designed for modern schools, colleges, and universities.
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
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Modernize Your Educational Technology?</h2>
          <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
            Let's discuss how our FERPA-compliant solutions can enhance learning outcomes and institutional efficiency.
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

export default EducationPage;