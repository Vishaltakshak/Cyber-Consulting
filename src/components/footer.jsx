import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2D5F] text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-600 pb-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Cyber Security Consulting
          </h2>
          <p className="text-gray-400">
            Safeguarding your digital ecosystem with strategic, end-to-end security solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#7246FD] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#7246FD] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#7246FD] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#7246FD] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">📞 +91 98765 43210</p>
          <p className="text-gray-400">✉️ contact@cyberconsults.com</p>
          <p className="text-gray-400 mt-2">📍 Bengaluru, India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Cyber Security Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
