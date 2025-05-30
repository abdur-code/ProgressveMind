import { 
  FiArrowRight, 
  FiUsers, 
  FiTarget, 
  FiAward, 
  FiBriefcase, 
  FiBookOpen, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiStar 
} from 'react-icons/fi';
import { FaGraduationCap, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center relative z-10">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
                Empowering India's Youth
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Building the Next Generation of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
                Leaders and Innovators
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering underprivileged youth with tech skills, mentorship, and career opportunities to break the cycle of poverty through education and community support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center">
                Sign Up <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/login" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                Log In
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { 
                id: 'members', 
                value: 'Growing Community', 
                label: 'Active members from diverse backgrounds', 
                icon: <FiUsers className="w-6 h-6 mx-auto mb-2 text-purple-300" /> 
              },
              { 
                id: 'mentors', 
                value: 'Expert Mentors', 
                label: 'Industry professionals guiding our members', 
                icon: <FiAward className="w-6 h-6 mx-auto mb-2 text-purple-300" /> 
              },
              { 
                id: 'programs', 
                value: 'Comprehensive Programs', 
                label: 'Tailored learning pathways for all stages', 
                icon: <FiBookOpen className="w-6 h-6 mx-auto mb-2 text-purple-300" /> 
              },
              { 
                id: 'success-rate', 
                value: 'Proven Impact', 
                label: 'Life-changing outcomes for our members', 
                icon: <FiTarget className="w-6 h-6 mx-auto mb-2 text-purple-300" /> 
              },
            ].map((stat) => (
              <div key={stat.id} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                {stat.icon}
                <p className="text-xl font-bold text-white mt-2">{stat.value}</p>
                <p className="text-sm font-medium text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">Transforming lives through education and mentorship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/20 text-purple-300 mb-4 border border-purple-700/30">
                <FiUsers className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Student Development</h3>
              <p className="text-purple-200 font-medium">Comprehensive training programs helping students build essential skills and confidence for their future careers.</p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 text-indigo-300 mb-4 border border-indigo-700/30">
                <FiBriefcase className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Skill Workshops</h3>
              <p className="text-purple-200 font-medium">Regular workshops and training sessions focused on practical skills and industry-relevant knowledge.</p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm border border-purple-700/30 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-900/20">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-pink-600/20 to-pink-800/20 text-pink-300 mb-4 border border-pink-700/30">
                <FiAward className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Industry Connections</h3>
              <p className="text-purple-200 font-medium">Strong partnerships with industry leaders providing valuable opportunities and insights for our members.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/30 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">About Progressive Minds</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">We are a community-driven initiative dedicated to empowering underprivileged youth through technology education and mentorship.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-8 rounded-xl backdrop-blur-sm border border-purple-700/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiTarget className="text-purple-400 mr-2" /> Our Vision
                </h3>
                <p className="text-purple-100">
                  To build a generation of empowered, skilled, and purpose-driven individuals who excel in life and career, transforming communities through technology and innovation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-8 rounded-xl backdrop-blur-sm border border-purple-700/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <FiAward className="text-indigo-400 mr-2" /> Our Mission
                </h3>
                <p className="text-purple-100">
                  To guide, coach, and mentor students, graduates, and professionals by providing practical knowledge, real-world skills, and a strong support network—both online and offline.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-700/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FiStar className="text-yellow-400 mr-2" /> Our Core Values
              </h3>
              <div className="space-y-6">
                {[
                  { 
                    id: 'empowerment', 
                    icon: <FiTarget className="text-purple-400" />, 
                    title: 'Empowerment', 
                    description: 'We believe in unlocking potential and fostering self-belief through accessible education.' 
                  },
                  { 
                    id: 'practical-growth', 
                    icon: <FiAward className="text-indigo-400" />, 
                    title: 'Practical Growth', 
                    description: 'Focus on real-world skills and actionable knowledge that drives career success.' 
                  },
                  { 
                    id: 'inclusivity', 
                    icon: <FiUsers className="text-pink-400" />, 
                    title: 'Inclusivity', 
                    description: 'Creating equal opportunities for all, regardless of background or circumstances.' 
                  },
                  { 
                    id: 'lifelong-learning', 
                    icon: <FiBookOpen className="text-blue-400" />, 
                    title: 'Lifelong Learning', 
                    description: 'Promoting continuous growth and adaptation in our rapidly evolving digital world.' 
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-start group">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-700/30 flex items-center justify-center border border-purple-700/50 group-hover:border-purple-500/70 transition-colors mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-purple-100 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-300 bg-purple-900/50 rounded-full mb-4">
              Our Offerings
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Our Programs</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">Structured pathways designed for every stage of your career journey with personalized mentorship</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
              },
            ].map((program) => (
              <div key={program.id} className={`group bg-gradient-to-br ${program.gradient} backdrop-blur-sm border ${program.border} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="p-6 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-xl ${program.iconColor} bg-opacity-20 flex items-center justify-center mb-5 border ${program.border} group-hover:bg-opacity-30 transition-all`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                  <span className="inline-block text-sm font-medium text-purple-300 mb-3">{program.age}</span>
                  <p className="text-purple-100 mb-6 flex-grow">{program.description}</p>
                  <button className={`${program.buttonColor} text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 transform group-hover:scale-105 w-full`}>
                    Learn More <FiArrowRight className="inline ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/programs" className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
              View All Programs
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-900/90 to-indigo-900/90 py-24 border-t border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join our community of ambitious individuals and take the first step towards a successful career in tech.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-white/20 text-center">
              Sign Up
            </Link>
            <Link to="/login" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg hover:shadow-white/10 text-center">
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Progressive Minds</h3>
              <p className="text-gray-400">Empowering India's youth through mentorship and skills development.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
                <li><Link to="#mentorship" className="text-gray-400 hover:text-white">Mentorship</Link></li>
                <li><Link to="#community" className="text-gray-400 hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><FiMail className="mr-2" /> contact@progressiveminds.org</li>
                <li className="flex items-center"><FiPhone className="mr-2" /> +91-XXXXXXXXXX</li>
                <li className="flex items-start"><FiMapPin className="mr-2 mt-1 flex-shrink-0" /> <span>Your City, India</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com/progressiveminds" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/progressiveminds" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://instagram.com/progressiveminds" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/progressiveminds" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Progressive Minds. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms" className="hover:text-white">Terms & Conditions</a>
              <a href="/careers" className="hover:text-white">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;