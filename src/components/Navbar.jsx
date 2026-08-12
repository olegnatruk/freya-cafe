import React, { useState, useEffect } from 'react';
import { CoffeeIcon, CandleIcon, MapPinIcon, PhoneIcon, SparklesIcon, InstagramIcon, FacebookIcon, CloseIcon } from './Icons';

const NAV_LINKS = [
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'coffee-spotlight', label: 'Vietnamese Coffee', href: '#coffee-spotlight', badge: 'Popular' },
  { id: 'workshops', label: 'Studio Workshops', href: '#workshops', badge: '₱850/head' },
  { id: 'customizer', label: 'Build a Brew', href: '#customizer' },
  { id: 'visit', label: 'Visit Us', href: '#visit' }
];

export default function Navbar({ onOpenReserve }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // Handle scroll detection and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking
      const sections = NAV_LINKS.map(link => document.querySelector(link.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#2C201C] text-white text-xs py-1.5 px-4 transition-all border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span className="px-2 py-0.5 rounded-full bg-[#C86D51] text-[10px] font-bold uppercase tracking-wider">
                Weekend Workshop
              </span>
              <span className="text-[#FAF6F0]/90 hidden sm:inline">
                Candle-Making 102 slots open for this Saturday • All materials & specialty coffee included
              </span>
              <span className="text-[#FAF6F0]/90 sm:hidden">
                Candle Workshop slots open for Saturday!
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[#FAF6F0]/80">
              <a href="tel:09230883180" className="hover:text-[#E8A858] flex items-center gap-1 font-semibold">
                <PhoneIcon size={12} /> 0923 088 3180
              </a>
              <button 
                onClick={() => setShowAnnouncement(false)} 
                className="hover:text-white p-0.5 rounded"
                aria-label="Dismiss Announcement"
              >
                <CloseIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Header */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF6F0]/90 backdrop-blur-xl shadow-md border-b border-[#2C201C]/10 py-3' 
          : 'bg-gradient-to-b from-[#FAF6F0]/90 to-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 text-decoration-none group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C86D51] to-[#A8543B] text-white flex items-center justify-center font-serif text-xl font-bold shadow-md transition-transform group-hover:scale-105 group-hover:rotate-6 relative">
              F
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E8A858] rounded-full animate-ping opacity-75"></span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-[#211A17] tracking-tight block leading-none group-hover:text-[#C86D51] transition-colors">
                FREYA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C86D51] block mt-0.5">
                Studio Cafe & Micro-Bakery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Active Indicator Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-[#2C201C]/10 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 relative flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#C86D51] text-white shadow-sm scale-105'
                      : 'text-[#594E47] hover:text-[#C86D51] hover:bg-[#F4EFE6]/60'
                  }`}
                >
                  {link.label}
                  {link.badge && !isActive && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#F4E4DF] text-[#A8543B] font-bold">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Controls & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF0EC] text-[#607765] text-xs font-semibold border border-[#607765]/15">
              <span className="w-2 h-2 rounded-full bg-[#607765] animate-pulse"></span>
              Open Today • Lipa City
            </div>

            <button 
              onClick={onOpenReserve}
              className="btn btn-primary btn-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <CandleIcon size={16} />
              Book Workshop / Table
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/80 border border-[#2C201C]/10 text-[#211A17] hover:bg-[#F4EFE6]"
            aria-label="Toggle Navigation Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <div className="md:hidden bg-[#FAF6F0] border-b border-[#2C201C]/10 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#2C201C]/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51]">Studio Navigation</span>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#607765] bg-[#EBF0EC] px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#607765] animate-pulse"></span>
                Open Today
              </div>
            </div>

            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.id}
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F4EFE6] text-base font-bold text-[#211A17] transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#F4E4DF] text-[#A8543B]">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2C201C]/10 space-y-3">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="btn btn-primary w-full text-center justify-center font-bold py-3.5"
              >
                <CandleIcon size={18} />
                Book Workshop / Table
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-[#8F8177]">
                <span>Call Us: 0923 088 3180</span>
                <span>Lipa City, Batangas</span>
              </div>
            </div>

          </div>
        )}
      </div>

    </header>
  );
}
