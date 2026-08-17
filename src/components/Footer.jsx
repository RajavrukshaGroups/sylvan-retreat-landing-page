import React from 'react';
import { PROJECT_INFO } from '../data/projectData';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { SamrudhiLogo } from './SamrudhiLogo';

export const Footer = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#ffffffff] text-stone-950 pt-12 pb-8 border-t border-[#e6c278]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SamrudhiLogo className="h-12" textColor="#ffffff" />
            </div>

            <p className="text-xs text-stone-950 max-w-sm leading-relaxed">
              Luxury organic farmland plots in Doddaballapur, North Bangalore. Own a peaceful retreat surrounded by nature with fruit cultivation, beekeeping, and managed wooden houses.
            </p>

            <div className="pt-2 text-xs text-stone-300">
              <span className="font-bold text-[#a77207ff] block mb-1">Corporate Office:</span>
              <p className="text-stone-950 max-w-sm leading-normal">{PROJECT_INFO.officeAddress}</p>
            </div>
          </div>

          {/* Quick Links Column (2 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ba7c00ff]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#e6c278] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#e6c278] transition-colors">
                  About Project
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#e6c278] transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e6c278] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e6c278] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Project Highlights Keywords Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b17600ff]">
              Project Highlights
            </h4>
            <ul className="space-y-2 text-xs text-stone-950">
              <li>Farm Land for Sale in Doddaballapur</li>
              <li>Farm Land for Sale in North Bangalore</li>
              <li>Agriculture Land for Sale in Doddaballapur</li>
              <li>Agricultural Land for Sale in North Bangalore</li>
            </ul>
          </div>

          {/* Social Follow Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#a87000ff]">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589460972270"
                className="w-8 h-8 rounded-full bg-green-900 hover:bg-[#e6c278] hover:text-[#0a2214] flex items-center justify-center transition-colors text-stone-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thesamrudhi"
                className="w-8 h-8 rounded-full bg-green-900 hover:bg-[#e6c278] hover:text-[#0a2214] flex items-center justify-center transition-colors text-stone-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#e6c278] hover:text-[#0a2214] flex items-center justify-center transition-colors text-stone-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/918549955955?text=${encodeURIComponent('Hi, I am interested in Samrudhi Sylvan Retreat farmland plots.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#e6c278] hover:text-[#0a2214] flex items-center justify-center transition-colors text-stone-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a> */}
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
          <div>© 2026 Samrudhi Sylvan Retreat. All Rights Reserved.</div>
          <button 
            onClick={onOpenPrivacy}
            className="hover:text-[#154726] transition-colors underline underline-offset-2 cursor-pointer font-medium"
          >
            Privacy Policy
          </button>
        </div>

      </div>
    </footer>
  );
};
