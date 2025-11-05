import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Shops", href: "/shops" },
    { name: "Services", href: "/services" },
  ];

  const services = [
    { name: "Web Development", href: "/services/web" },
    { name: "Mobile Apps", href: "/services/mobile" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Digital Marketing", href: "/services/marketing" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/bageljoon", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com/bageljoon", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com/bageljoon", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/bageljoon", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#7B5A3A] via-[#6D4C2F] to-[#3A2E25] text-[#F5EBDD] w-full overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B8C1A3] blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5EBDD]/40 blur-3xl rounded-full"></div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <motion.div
          data-aos="fade-up"
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=60&w=500"
            alt="Bageljoon Logo"
            className="h-14 w-auto drop-shadow-md"
          />
          <p className="text-[#F5EBDD]/90 text-sm leading-relaxed max-w-xs">
            California-style <span className="font-semibold text-[#FFFFFF]">sourdough bagels</span> and 
            artisanal coffee — crafted with warmth and balance.
          </p>
          <div className="flex items-center space-x-2 text-[#B8C1A3] text-sm">
            <div className="w-2 h-2 bg-[#B8C1A3] rounded-full animate-pulse"></div>
            <span>We’re open to collaborations</span>
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="100"
          className="space-y-5"
        >
          <h2 className="text-lg font-semibold uppercase tracking-wider border-b border-[#F5EBDD]/20 pb-2">
            Company
          </h2>
          <ul className="space-y-3">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="group text-[#F5EBDD]/80 hover:text-[#B8C1A3] transition-colors duration-300 flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#F5EBDD]/40 rounded-full mr-3 group-hover:bg-[#B8C1A3] transition-colors"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="200"
          className="space-y-5"
        >
          <h2 className="text-lg font-semibold uppercase tracking-wider border-b border-[#F5EBDD]/20 pb-2">
            Services
          </h2>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.href}
                  className="group text-[#F5EBDD]/80 hover:text-[#B8C1A3] transition-colors duration-300 flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#F5EBDD]/40 rounded-full mr-3 group-hover:bg-[#B8C1A3] transition-colors"></span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          data-aos="fade-up"
          data-aos-delay="300"
          className="space-y-5"
        >
          <h2 className="text-lg font-semibold uppercase tracking-wider border-b border-[#F5EBDD]/20 pb-2">
            Contact
          </h2>
          <div className="space-y-4">
            <a
              href="mailto:hello@bageljoon.com"
              className="flex items-center space-x-3 text-[#F5EBDD]/80 hover:text-[#B8C1A3] transition-colors group"
            >
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg group-hover:bg-[#B8C1A3]/30 transition-colors">
                <FaEnvelope className="text-sm" />
              </div>
              <span className="text-sm">hello@bageljoon.com</span>
            </a>

            <a
              href="tel:+13001234567"
              className="flex items-center space-x-3 text-[#F5EBDD]/80 hover:text-[#B8C1A3] transition-colors group"
            >
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg group-hover:bg-[#B8C1A3]/30 transition-colors">
                <FaPhone className="text-sm" />
              </div>
              <span className="text-sm">(858) 555-0123</span>
            </a>

            <div className="flex items-start space-x-3 text-[#F5EBDD]/80">
              <div className="p-2 bg-[#3A2E25]/30 rounded-lg mt-1">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <span className="text-sm leading-relaxed">
                123 Coastal Ave, La Jolla, CA
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5EBDD]/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#F5EBDD]/70 text-sm text-center md:text-left"
          >
            © {currentYear} <span className="font-semibold text-[#FFFFFF]">Bageljoon</span>. All Rights Reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3A2E25]/30 hover:bg-[#B8C1A3]/30 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="text-lg text-[#F5EBDD] group-hover:text-[#FFFFFF]" />
              </a>
            ))}
          </motion.div>

          {/* Policy Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-6 text-[#F5EBDD]/70 text-sm"
          >
            <a href="/terms" className="hover:text-[#B8C1A3] transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-[#B8C1A3] transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="hover:text-[#B8C1A3] transition-colors">
              Cookies
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
