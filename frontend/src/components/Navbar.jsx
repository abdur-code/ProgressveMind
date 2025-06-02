import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/programs", text: "Programs" },
    { to: "#mentorship", text: "Mentorship" },
    { to: "#community", text: "Community" },
  ];

  const handleSignOut = async () => {
    try {
      await fetch('http://localhost:3000/backend/auth/signout', {
        method: 'POST',
        credentials: 'include',
      });
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800' : 'bg-gray-900 bg-opacity-90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Progressive Minds
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-white border-b-2 border-purple-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="/programs"
              className="ml-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/20"
            >
              Join Community
            </Link>
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-purple-400">
                  <FiUser className="h-5 w-5" />
                  <span>{currentUser.username || currentUser.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FiLogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.to
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {link.text}
            </Link>
          ))}
          <Link
            to="/programs"
            className="block w-full text-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
          >
            Join Community
          </Link>
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-purple-400">
                <FiUser className="h-5 w-5" />
                <span>{currentUser.username || currentUser.email}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <FiLogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/signin"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
