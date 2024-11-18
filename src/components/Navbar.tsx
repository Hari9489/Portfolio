import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="backdrop-blur-md bg-black/20 fixed w-full z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2"
          >
            <Network className="text-pink-500" size={24} />
            <span className="font-bold text-xl gradient-text">Harinesh MK</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-colors hover:text-pink-400 ${
                    isActive ? 'text-pink-500' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 h-0.5 bg-pink-500 bottom-0"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-pink-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-pink-500/20 text-pink-500' 
                          : 'text-gray-300 hover:bg-pink-500/10 hover:text-pink-400'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}