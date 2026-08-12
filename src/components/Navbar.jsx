import React, { useState, useEffect } from 'react';
import { CoffeeIcon, CandleIcon, MapPinIcon, PhoneIcon } from './Icons';

export default function Navbar({ onOpenReserve }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-sm border-b border-[#2C201C]/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 text-decoration-none group">
          <div className="w-10 h-10 rounded-full bg-[#C86D51] text-white flex items-center justify-center font-serif text-xl font-bold shadow-md transition-transform group-hover:scale-105">
            F
          </div>
          <div>
            <span className="font-serif text-2xl font-bold text-[#211A17] tracking-tight block leading-none">
              FREYA
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C86D51] block mt-0.5">
              Studio Cafe & Micro-Bakery
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#594E47]">
          <a href="#menu" className="hover:text-[#C86D51] transition-colors">Menu</a>
          <a href="#coffee-spotlight" className="hover:text-[#C86D51] transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D98E3A]"></span>
            Vietnamese Coffee
          </a>
          <a href="#workshops" className="hover:text-[#C86D51] transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#607765]"></span>
            Studio Workshops
          </a>
          <a href="#customizer" className="hover:text-[#C86D51] transition-colors">Build a Brew</a>
          <a href="#visit" className="hover:text-[#C86D51] transition-colors">Visit Us</a>
        </nav>

        {/* Action Controls & Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF0EC] text-[#607765] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#607765] animate-pulse"></span>
            Open Today • Lipa City
          </div>
          <button 
            onClick={onOpenReserve}
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            <CandleIcon size={16} />
            Book Workshop / Table
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#211A17] hover:bg-[#F4EFE6]"
          aria-label="Toggle Navigation Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#2C201C]/10 px-6 py-6 space-y-4 animate-fade-in">
          <a 
            href="#menu" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#211A17] hover:text-[#C86D51]"
          >
            Menu
          </a>
          <a 
            href="#coffee-spotlight" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#211A17] hover:text-[#C86D51]"
          >
            Vietnamese Specialty Coffee
          </a>
          <a 
            href="#workshops" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#211A17] hover:text-[#C86D51]"
          >
            Candle & Studio Workshops
          </a>
          <a 
            href="#customizer" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#211A17] hover:text-[#C86D51]"
          >
            Build Your Brew
          </a>
          <a 
            href="#visit" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#211A17] hover:text-[#C86D51]"
          >
            Location & Hours
          </a>
          <div className="pt-4 border-t border-[#2C201C]/10 flex flex-col gap-3">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="btn btn-primary w-full text-center"
            >
              Book Workshop / Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
