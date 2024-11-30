import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import AdminIcon from './AdminIcon';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = useAuthStore();

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center"
            >
              <Heart className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white ml-2">HUGS</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Home
            </Link>
            <Link to="/booking" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Book Session
            </Link>
            <Link to="/faculty" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Our Faculty
            </Link>
            <Link to="/therapy-approaches" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Approaches
            </Link>
            <Link to="/resources" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Resources
            </Link>
            <Link to="/faq" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Contact
            </Link>
            <Link to="/feedback" className="text-white hover:text-secondary px-3 py-2 transition-colors">
              Feedback
            </Link>
            <ThemeToggle />
            <AdminIcon />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <AdminIcon />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Book Session
              </Link>
              <Link
                to="/faculty"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Our Faculty
              </Link>
              <Link
                to="/therapy-approaches"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Approaches
              </Link>
              <Link
                to="/resources"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/feedback"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Feedback
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}