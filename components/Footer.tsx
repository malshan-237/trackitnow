import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl text-white">TrackItNow</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Advanced GPS tracking solutions for personal and commercial fleet management. Secure, reliable, and real-time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/product" className="hover:text-blue-400 transition">Features</Link></li>
              <li><Link to="/product" className="hover:text-blue-400 transition">Hardware</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition">Integration</Link></li>
              <li><Link to="/demo" className="hover:text-blue-400 transition">Live Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-blue-400 transition">Help Center</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition">Installation Guide</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact Support</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@trackitnow.com</span>
              </li>
              <li>123 Tech Park Blvd</li>
              <li>Innovation City, ST 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} TrackItNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
