import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, MapPin } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { SamrudhiLogo } from './SamrudhiLogo';

export const Navbar = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white text-gray-800 border-b border-[#e6c278]/30 shadow-xl">
      {/* Topmost mini info banner */}
      <div className="bg-gradient-to-r from-[#264f24ff] to-[#103f10ff] text-[11px] text-stone-200 py-1.5 px-4 border-b border-[#e6c278]/20 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#e6c278]" />
              Doddaballapur, North Bangalore
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PROJECT_INFO.phoneNumber}`}
              className="flex items-center gap-1 hover:text-[#e6c278] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#e6c278]" />
              <span className="font-semibold">{PROJECT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <SamrudhiLogo className="h-12" textColor="#ffffff" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase">
          <a href="#about" className="hover:text-[#a56e00ff] transition-colors">
            About Project
          </a>
          <a href="#highlights" className="hover:text-[#a56e00ff] transition-colors">
            Highlights
          </a>
          <a href="#amenities" className="hover:text-[#a56e00ff] transition-colors">
            Amenities
          </a>
          <a href="#location" className="hover:text-[#a56e00ff] transition-colors">
            Location Map
          </a>
          <a href="#gallery" className="hover:text-[#a56e00ff] transition-colors">
            Gallery
          </a>
          {/* <a href="#contact" className="hover:text-[#a56e00ff] transition-colors">
            Contact Us
          </a> */}
        </nav>

        {/* CTA Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PROJECT_INFO.phoneNumber}`}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#164a2bff] text-[#e6c278] border border-[#e6c278]/40 hover:bg-[#123822] text-xs font-bold transition-all shadow"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PROJECT_INFO.displayPhone}</span>
          </a>

          <button
            onClick={() => window.location.href='#contact'}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#081a0e] text-xs font-extrabold uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK SITE VISIT</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#e6c278] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a2314] border-b border-[#e6c278]/30 px-6 py-6 space-y-4 text-sm font-semibold tracking-wider uppercase animate-fadeIn">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-[#e6c278]"
          >
            About Project
          </a>
          <a
            href="#highlights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-[#e6c278]"
          >
            Highlights
          </a>
          <a
            href="#amenities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-[#e6c278]"
          >
            Amenities
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-[#e6c278]"
          >
            Location Map
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-[#e6c278]"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-[#e6c278]"
          >
            Contact Us
          </a>

          <div className="pt-4 border-t border-[#e6c278]/20 flex flex-col gap-3">
            <a
              href={`tel:${PROJECT_INFO.phoneNumber}`}
              className="py-2.5 px-4 rounded-lg bg-[#1f6537ff] text-[#e6c278] border border-[#e6c278]/40 text-center text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {PROJECT_INFO.displayPhone}</span>
            </a>

            <button
              onClick={() =>window.location.href='#contact'}
              className="py-2.5 px-4 rounded-lg bg-[#e6c278] text-[#081a0e] text-center text-xs font-extrabold uppercase flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Site Visit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
