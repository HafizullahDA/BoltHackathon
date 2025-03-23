import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes, FaRocket, FaCode, FaUsers, FaTrophy, FaBuilding, FaCalendar, FaUserPlus, FaQuestionCircle } from 'react-icons/fa';

const sections = [
  { id: 'hero', label: 'Home', icon: FaRocket },
  { id: 'about', label: 'About', icon: FaCode },
  { id: 'categories', label: 'Categories', icon: FaTrophy },
  { id: 'timeline', label: 'Timeline', icon: FaCalendar },
  { id: 'judges', label: 'Judges', icon: FaUsers },
  { id: 'sponsors', label: 'Sponsors', icon: FaBuilding },
  { id: 'register', label: 'Register', icon: FaUserPlus },
  { id: 'faq', label: 'FAQ', icon: FaQuestionCircle }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#00f5ff]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.h1 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Bolt.New
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-300 hover:text-[#00f5ff] px-3 py-2 text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('register')}
                className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] 
                         text-white font-medium hover:shadow-lg hover:shadow-[#00f5ff]/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#00f5ff] focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-300 
                       hover:text-[#00f5ff] hover:bg-white/5 rounded-md transition-colors"
              whileHover={{ x: 10 }}
            >
              <section.icon className="mr-3" />
              {section.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection('register')}
            className="w-full mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#8A2BE2] 
                     text-white font-medium hover:shadow-lg hover:shadow-[#00f5ff]/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}; 