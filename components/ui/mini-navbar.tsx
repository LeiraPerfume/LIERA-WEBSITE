"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="group relative inline-block overflow-hidden h-6 flex items-center"
    >
      <motion.div 
        className="flex flex-col"
        initial={false}
        whileHover={{ y: -24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-gray-600 text-sm font-medium tracking-wide h-6 flex items-center">{children}</span>
        <span className="text-pink-600 text-sm font-medium tracking-wide border-b border-pink-500 h-6 flex items-center">{children}</span>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-pink-400 to-pink-600"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="Leira Logo"
          width={140}
          height={45}
          className="object-contain h-10 w-auto"
          priority
        />
      </Link>
    </motion.div>
  );

  const navLinksData = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '#shop' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const loginButtonElement = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-200/80 backdrop-blur-sm border border-gray-300/50 rounded-full hover:border-pink-500 hover:text-pink-600 transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md group"
    >
      <span className="group-hover:border-b group-hover:border-pink-500 transition-all duration-300">Login</span>
    </motion.button>
  );

  const signupButtonElement = (
    <motion.div 
      className="relative group w-full sm:w-auto"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 -m-1 rounded-full
                    hidden sm:block
                    bg-gradient-to-r from-pink-400/40 to-pink-600/40
                    opacity-0 filter blur-xl pointer-events-none
                    transition-all duration-500 ease-out
                    group-hover:opacity-100 group-hover:blur-2xl group-hover:-m-2"></div>
      <button className="relative z-10 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl border border-pink-400/50">
        Signup
      </button>
    </motion.div>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                 flex flex-col items-center
                 pl-6 pr-6 py-3.5
                 backdrop-blur-xl
                 ${headerShapeClass}
                 border border-white/30
                 bg-white/40
                 shadow-lg shadow-black/5
                 w-[calc(100%-2rem)] sm:w-auto
                 transition-all duration-500 ease-in-out`}
    >
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 ${headerShapeClass} pointer-events-none`} />
      
      <div className="relative flex items-center justify-between w-full gap-x-6 sm:gap-x-10">
        <div className="flex items-center">
          {logoElement}
        </div>

        <nav className="hidden sm:flex items-center space-x-6 lg:space-x-8">
          {navLinksData.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            >
              <AnimatedNavLink href={link.href}>
                {link.label}
              </AnimatedNavLink>
            </motion.div>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {loginButtonElement}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {signupButtonElement}
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="sm:hidden flex items-center justify-center w-9 h-9 text-gray-700 focus:outline-none rounded-lg hover:bg-gray-200/50 transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden flex flex-col items-center w-full overflow-hidden pt-6 pb-2"
          >
            <nav className="flex flex-col items-center space-y-5 text-base w-full">
              {navLinksData.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors w-full text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-col items-center space-y-4 mt-6 w-full px-4"
            >
              {loginButtonElement}
              {signupButtonElement}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

