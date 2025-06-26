import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              code_edu
            </h2>
            <p className="text-gray-300">
              Empowering Nepal's tech future with industry-aligned IT education and hands-on training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-all duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-sky-500 p-2 rounded-full transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-700 p-2 rounded-full transition-all duration-300">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white border-l-4 border-secondary pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/courses" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  All Courses
                </a>
              </li>
              <li>
                <a href="/instructors" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Our Instructors
                </a>
              </li>
              <li>
                <a href="/success-stories" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/blog" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white border-l-4 border-secondary pl-3">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="/courses/web-design" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Web Designing
                </a>
              </li>
              <li>
                <a href="/courses/react" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  React Development
                </a>
              </li>
              <li>
                <a href="/courses/python" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Python & Django
                </a>
              </li>
              <li>
                <a href="/courses/ui-ux" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white border-l-4 border-secondary pl-3">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Putalisadak, Kathmandu, Nepal</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <a href="tel:+977-1-XXXXXXX" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +977-1-XXXXXXXXX
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <a href="mailto:info@codeit.com.np" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@infoaartishah.com.np
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} code_edu. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/faq" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;