import { FaUsers, FaHandsHelping, FaBullseye } from 'react-icons/fa';
import { FiTarget, FiAward, FiStar, FiMail, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import CTA from '../components/ui/CTA';
import Footer from '../components/Footer';

const About = () => {
  const features = [
    {
      icon: <FaUsers className="text-3xl text-purple-400" />,
      title: 'Inclusive Community',
      description: 'We believe in creating opportunities for all, regardless of background or circumstances.'
    },
    {
      icon: <FaHandsHelping className="text-3xl text-indigo-400" />,
      title: 'Mentorship',
      description: 'Connecting experienced professionals with young individuals to guide their personal and professional growth.'
    },
    {
      icon: <FaBullseye className="text-3xl text-pink-400" />,
      title: 'Skill Development',
      description: 'Providing practical skills and knowledge to help youth succeed in their chosen paths.'
    }
  ];

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Passionate about youth empowerment and education reform with extensive experience in social impact.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        email: '#'
      }
    },
    {
      name: 'Jane Smith',
      role: 'Program Director',
      bio: 'Dedicated to creating impactful learning experiences and curriculum development.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      social: {
        email: '#'
      }
    },
    {
      name: 'Alex Johnson',
      role: 'Mentorship Lead',
      bio: 'Believes in the power of mentorship to transform lives and build strong communities.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      social: {
        email: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero
        title={['About', 'Progressive Minds']}
        subtitle="Empowering the next generation of leaders through mentorship, education, and community building."
        badge="Our Story"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center">
            Sign Up <FiArrowRight className="ml-2" />
          </Link>
          <Link to="/login" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
            Log In
          </Link>
        </div>
      </Hero>

      <Section>
        <SectionHeader
          title="Our Mission & Vision"
          subtitle="To create a supportive ecosystem where young individuals can develop essential life skills, gain valuable mentorship, and build meaningful connections to achieve their full potential."
          badge="Our Purpose"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-700/20 flex items-center justify-center mb-6 border border-purple-700/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-purple-100">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Meet Our Team"
          subtitle="The passionate individuals driving our mission forward with dedication and expertise"
          badge="Our Leaders"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <div className="relative h-64 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <img 
                  className="h-32 w-32 rounded-full border-4 border-white/80 z-10 transform group-hover:scale-110 transition-transform duration-300" 
                  src={member.image} 
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-3">
                    <a href={`mailto:${member.social.email}`} className="h-10 w-10 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center text-white">
                      <FiMail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-purple-300 font-medium mb-3">{member.role}</p>
                <p className="text-purple-100">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CTA
        title="Ready to Transform Your Future?"
        subtitle="Join our community of ambitious individuals and take the first step towards a successful career in tech."
        badge="Join Us"
        primaryButton={{
          text: 'Explore Programs',
          to: '/programs'
        }}
        secondaryButton={{
          text: 'Contact Us',
          to: '/contact'
        }}
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup" className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-white/20 text-center">
            Sign Up
          </Link>
          <Link to="/login" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg hover:shadow-white/10 text-center">
            Log In
          </Link>
        </div>
      </CTA>

      <Footer />
    </div>
  );
};

export default About;
