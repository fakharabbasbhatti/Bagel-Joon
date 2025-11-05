import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-6 font-['Playfair_Display']">
              Send Us a Message
            </h2>
            <div className="w-20 h-1 bg-[#8B7355] mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Have questions about our bagels, coffee, or want to collaborate? 
              We're here to help and would love to hear from you.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Typically, we respond within 24 hours during business days. For urgent 
              matters, feel free to call us directly.
            </p>
            
            <div className="bg-[#F5F1E8] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#5D4037] mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#A8B8A5] rounded-full mr-3"></span>
                  Catering inquiries for events
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#A8B8A5] rounded-full mr-3"></span>
                  Wholesale partnership opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#A8B8A5] rounded-full mr-3"></span>
                  Feedback and suggestions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#A8B8A5] rounded-full mr-3"></span>
                  Press and media inquiries
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="bg-[#F5F1E8] rounded-2xl p-8 shadow-lg"
            data-aos="fade-left"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-[#5D4037] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8B7355]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all duration-300 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#5D4037] mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8B7355]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all duration-300 outline-none"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#5D4037] mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all duration-300 outline-none appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="catering">Catering Services</option>
                  <option value="wholesale">Wholesale Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="press">Press Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#5D4037] mb-2">
                  Message *
                </label>
                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-[#8B7355]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B7355] hover:bg-[#5D4037] text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;