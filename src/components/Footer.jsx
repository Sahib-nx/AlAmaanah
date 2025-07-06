import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: "https://instagram.com/amaanah_estates", label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.footer
      className="bg-gray-900 text-gray-200 py-12 px-4"
      style={{ backgroundColor: '#111827' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="text-[#F59E0B]">AL</span>Amaanah
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-4 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={itemVariants}
            >
              Building tomorrow's infrastructure with precision, innovation, and sustainability at the forefront of every project.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="tel:+917006936512"
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                </motion.div>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  +917006936512
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h4
              className="text-lg font-semibold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              whileHover={{ scale: 1.02 }}
            >
              Quick Links
            </motion.h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h4
              className="text-lg font-semibold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              whileHover={{ scale: 1.02 }}
            >
              Connect With Us
            </motion.h4>
            <div className="space-y-3 mb-6">
              <motion.div
                className="flex items-center justify-center md:justify-start text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                </motion.div>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Amaanahestates@gmail.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center justify-center md:justify-start text-gray-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                </motion.div>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  3RG8+W5R, Kothi Bagh, Srinagar, Jammu and Kashmir 190001
                </span>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialIcons.map(({ Icon, href, label }, index) => {
                const IconComponent = Icon;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                      backgroundColor: '#F59E0B',
                      color: '#111827'
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <motion.div
                      whileHover={{ rotate: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              style={{ fontFamily: 'Inter, sans-serif' }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} AlAmaanah. All rights reserved.
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="mr-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Back to Top
              </span>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;