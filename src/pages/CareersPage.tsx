import React from 'react';
import { Users, Heart, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumBackground from '../components/PremiumBackground';
import InteractiveButton from '../components/InteractiveButton';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance programs to keep you and your family healthy."
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      description: "Continuous learning opportunities, certifications, conferences, and career advancement programs."
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries, performance bonuses, equity participation, and comprehensive benefits package."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, unlimited PTO, and family-friendly policies."
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and provide resources to turn innovative ideas into reality."
    },
    {
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and foster an environment of mutual respect and support."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, certifications, and professional development."
    },
    {
      title: "Work-Life Integration",
      description: "We support flexible work arrangements that help our team members thrive both professionally and personally."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
        <PremiumBackground />
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
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl opacity-20 blur-xl animate-ping"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Join Our Team
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                Shape the Future of Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Be part of a dynamic team that's revolutionizing the IT industry. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Sri Vaarahi Global Solutions
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Values
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our culture and drive our success as a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-cyan-900"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fade-in-up">

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your Journey?
            </h2>

            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
              Join a team that values innovation, collaboration, and personal growth. Let's build the future together.
            </p>

            <Link to="/contact">
              <InteractiveButton size="large" variant="light">
                <Users className="w-5 h-5 mr-2" />
                Send Your Resume
              </InteractiveButton>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;