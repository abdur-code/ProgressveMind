import { FaGraduationCap, FaUserTie, FaChalkboardTeacher, FaUsers, FaHandshake } from 'react-icons/fa';
import { FiBriefcase, FiMonitor, FiAward, FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import CTA from '../components/ui/CTA';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      id: 'student-success',
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Student Success',
      age: 'Ages 15-22',
      description: 'Build foundational skills and confidence for academic and career success through hands-on learning.',
      gradient: 'from-purple-600/20 to-purple-800/20',
      border: 'border-purple-700/30',
      iconColor: 'text-purple-400',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      id: 'graduate-launchpad',
      icon: <FiBriefcase className="text-3xl" />,
      title: 'Graduate Launchpad',
      age: 'Ages 21-27',
      description: 'Bridge the gap between education and employment with industry-relevant skills and mentorship.',
      gradient: 'from-indigo-600/20 to-indigo-800/20',
      border: 'border-indigo-700/30',
      iconColor: 'text-indigo-400',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      id: 'skilled-to-successful',
      icon: <FaUserTie className="text-3xl" />,
      title: 'Skilled to Successful',
      age: 'Ages 25-35',
      description: 'Advance your career with specialized training, leadership development, and executive coaching.',
      gradient: 'from-pink-600/20 to-pink-800/20',
      border: 'border-pink-700/30',
      iconColor: 'text-pink-400',
      buttonColor: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      id: 'climb-contribute',
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: 'Climb & Contribute',
      age: 'Ages 30-49',
      description: 'Grow in leadership while giving back through mentorship and community building.',
      gradient: 'from-blue-600/20 to-blue-800/20',
      border: 'border-blue-700/30',
      iconColor: 'text-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const programBenefits = [
    {
      icon: <FaUsers className="text-3xl text-purple-400" />,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of experience.'
    },
    {
      icon: <FaHandshake className="text-3xl text-indigo-400" />,
      title: 'Hands-on Learning',
      description: 'Practical projects and real-world applications.'
    },
    {
      icon: <FiMonitor className="text-3xl text-pink-400" />,
      title: 'Flexible Schedule',
      description: 'Programs designed to fit your busy life.'
    },
    {
      icon: <FiAward className="text-3xl text-blue-400" />,
      title: 'Certification',
      description: 'Earn recognized certifications upon completion.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero
        title={['Our', 'Programs']}
        subtitle="Comprehensive programs designed to help you grow personally and professionally at every stage of your journey."
        badge="Our Offerings"
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
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.id}
              gradient={program.gradient}
              border={program.border}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl ${program.iconColor} bg-opacity-20 flex items-center justify-center border ${program.border} group-hover:bg-opacity-30 transition-all`}>
                  {program.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  <span className="text-sm font-medium text-purple-300">{program.age}</span>
                </div>
              </div>
              <p className="text-purple-100 mb-6">{program.description}</p>
              <div className="flex justify-start">
                <Button 
                  variant="primary"
                  to={`/programs/${program.id}`}
                  className={`${program.buttonColor} text-sm whitespace-nowrap`}
                >
                  Learn More <FiArrowRight className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Program Benefits"
          subtitle="We provide the tools and support you need to succeed in your personal and professional life."
          badge="Why Choose Us"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programBenefits.map((benefit, index) => (
            <Card key={index}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-700/20 flex items-center justify-center mb-6 border border-purple-700/30">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-purple-100">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTA
        title="Ready to Transform Your Future?"
        subtitle="Join our community of learners and mentors today."
        badge="Get Started"
        primaryButton={{
          text: 'Apply Now',
          to: '/apply'
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

export default Programs;
