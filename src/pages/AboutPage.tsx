import React from 'react';
import { Shield, Users, Award, Target, Heart, Lightbulb, Zap, Brain, Rocket, Globe, Eye, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveButton from '../components/InteractiveButton';
import AnimatedCounter from '../components/AnimatedCounter';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Proactive Partnership",
      description: "We don't just respond to problems – we prevent them. Our proactive approach keeps your technology running smoothly while you focus on growing your business.",
      color: "from-cyan-400 to-blue-600"
    },
    {
      icon: Heart,
      title: "Unwavering Security",
      description: "Security isn't an afterthought – it's built into everything we do. Your data and systems are protected at every level with military-grade protocols.",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Lightbulb,
      title: "Radical Transparency",
      description: "No hidden fees, no surprise charges, no technical jargon. We believe in complete transparency in our pricing, processes, and communication.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We leverage cutting-edge technology and AI-powered solutions to keep you ahead of the competition and future-proof your business.",
      color: "from-green-400 to-teal-600"
    },
    {
      icon: Users,
      title: "Human-Centered Technology",
      description: "Technology should empower people, not complicate their lives. We design solutions that are intuitive, accessible, and user-friendly.",
      color: "from-indigo-400 to-purple-600"
    },
    {
      icon: Globe,
      title: "Scalable Excellence",
      description: "Whether you're a startup or enterprise, our solutions grow with you. We build technology foundations that scale seamlessly with your success.",
      color: "from-red-400 to-pink-600"
    }
  ];

  const missionVision = [
    {
      icon: Target,
      title: "Our Mission",
      subtitle: "Transforming Technology Into Strategic Advantage",
      description: "To transform business technology from a reactive necessity into a proactive strategic asset. We believe every organization deserves technology that works seamlessly, securely, and strategically to drive growth and innovation.",
      details: [
        "Eliminate technology-related business disruptions through proactive monitoring and maintenance",
        "Provide enterprise-grade cybersecurity that protects against evolving threats",
        "Enable digital transformation that creates competitive advantages",
        "Deliver transparent, predictable IT services that align with business objectives",
        "Empower teams with technology that enhances productivity and collaboration"
      ],
      color: "from-cyan-400 to-blue-600",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      icon: Eye,
      title: "Our Vision",
      subtitle: "A World Where Technology Empowers Every Business",
      description: "We envision a future where every business, regardless of size or industry, has access to enterprise-level technology solutions that drive innovation, protect against threats, and enable unlimited growth potential.",
      details: [
        "Democratize access to advanced cybersecurity and cloud technologies",
        "Create a world where small businesses compete on equal technological footing",
        "Establish new standards for proactive IT service delivery",
        "Build lasting partnerships that evolve with technological advancement",
        "Foster innovation through strategic technology consulting and implementation"
      ],
      color: "from-purple-400 to-pink-600",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    },
    {
      icon: Compass,
      title: "Our Philosophy",
      subtitle: "Technology Should Be Your Greatest Asset, Not Your Biggest Headache",
      description: "We believe technology should be invisible when it works and invaluable when you need it. Our philosophy centers on creating technology experiences that are so seamless, secure, and strategic that they become your competitive advantage.",
      details: [
        "Proactive prevention is always better than reactive solutions",
        "Security and compliance are non-negotiable foundations",
        "Transparency builds trust, and trust builds lasting partnerships",
        "Innovation without reliability is just expensive experimentation",
        "Every technology decision should drive measurable business value"
      ],
      color: "from-green-400 to-teal-600",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl p-4">
                  <img 
                    src={`${import.meta.env.BASE_URL}img1.png`} 
                    alt="Sri Vaarahi Global Solutions" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
              We're Your Strategic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-normal">
                Technology Partner
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Founded on the revolutionary belief that technology should be a strategic advantage, not a constant headache. We transform IT from a cost center into your most powerful competitive edge.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large">
                <Rocket className="w-5 h-5 mr-2" />
                Partner With Us Today
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Philosophy */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
              Our Foundation & Future
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Built on unwavering principles, driven by an ambitious vision, guided by proven philosophy.
            </p>
          </div>

          <div className="space-y-24">
            {missionVision.map((item, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-light text-slate-800">{item.title}</h3>
                      <p className="text-lg text-cyan-600 font-light">{item.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl font-light text-gray-600 leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  <div className="space-y-4">
                    {item.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex}
                        className="flex items-start group animate-fade-in-up"
                        style={{ animationDelay: `${index * 300 + detailIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="font-light text-gray-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="w-full h-80 rounded-3xl shadow-2xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Our Core Values Drive Everything We Do
            </h2>
            <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:transform hover:-translate-y-3 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative z-10`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-light mb-4 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                    {value.title}
                  </h3>
                  <p className="font-light text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
                    {value.description}
                  </p>
                  
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">Our Impact in Numbers</h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              Measurable results that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-cyan-100">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-cyan-400 mb-4">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-xl font-light text-gray-600">Businesses Protected</p>
              </div>
            </div>
            
            <div className="group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-purple-400 mb-4">
                  <AnimatedCounter end={95} decimals={1} suffix="%" />
                </div>
                <p className="text-xl font-light text-gray-600">Uptime Achieved</p>
              </div>
            </div>
            
            <div className="group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-green-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-green-400 mb-4">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <p className="text-xl font-light text-gray-600">Security Monitoring</p>
              </div>
            </div>
            
            <div className="group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-orange-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-light text-orange-400 mb-4">
                  <AnimatedCounter end={5} suffix=" Years" />
                </div>
                <p className="text-xl font-light text-gray-600">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to Transform Your Technology?</h2>
            <p className="text-xl font-light mb-10 max-w-2xl mx-auto text-gray-300">
              Let's discuss how we can turn your technology challenges into competitive advantages.
            </p>
            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                <Zap className="w-5 h-5 mr-2" />
                Start the Transformation
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;