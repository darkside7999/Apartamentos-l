import React from 'react';
import { Mail, Phone, MapPin, Home } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Apartments Horvat</span>
            </div>
            <p className="text-sm">
              Your perfect getaway destination on the beautiful island of Pag, Croatia.
              Experience comfort and luxury in our three-star rated apartments.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@apartments-horvat.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@apartments-horvat.com</span>
              </a>
              <a href="tel:+38591 486 9104" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+385 91 486 9104</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Pag, Croatia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="block hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Apartments Horvat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}