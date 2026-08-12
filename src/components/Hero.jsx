import React from 'react';
import { CoffeeIcon, CroissantIcon, CandleIcon, StarIcon, SparklesIcon, MapPinIcon } from './Icons';

export default function Hero({ onOpenReserve }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F4EFE6] to-[#FAF6F0]">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C86D51]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D98E3A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4E4DF] text-[#A8543B] text-xs md:text-sm font-bold tracking-wide uppercase shadow-sm">
              <SparklesIcon size={16} className="text-[#C86D51]" />
              Artisan Micro-Bakery & Studio Café
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#211A17] tracking-tight leading-[1.1]">
              Crafted with intention. <br />
              <span className="italic text-[#C86D51]">Served with soul.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-lg text-[#594E47] max-w-xl font-normal leading-relaxed">
              Welcome to <strong>FREYA</strong> — Lipa City's cozy sanctuary for Vietnamese-inspired salted cream coffee, freshly baked sourdough pastries, and inspiring creative studio workshops.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#menu" className="btn btn-primary text-base">
                <CoffeeIcon size={20} />
                Explore Menu
              </a>
              <button onClick={onOpenReserve} className="btn btn-secondary text-base">
                <CandleIcon size={20} className="text-[#C86D51]" />
                Book Studio Workshop
              </button>
            </div>

            {/* Proof Badges & Location */}
            <div className="pt-6 border-t border-[#2C201C]/10 grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-1 text-[#D98E3A] font-bold text-lg">
                  <StarIcon size={18} fill="#D98E3A" />
                  <span>100%</span>
                </div>
                <p className="text-xs text-[#8F8177]">Recommended (11 Reviews)</p>
              </div>

              <div>
                <div className="font-serif font-bold text-[#211A17] text-lg">8.4K+</div>
                <p className="text-xs text-[#8F8177]">Community Followers</p>
              </div>

              <div>
                <div className="font-serif font-bold text-[#211A17] text-lg flex items-center gap-1">
                  <MapPinIcon size={16} className="text-[#C86D51]" />
                  <span>Lipa City</span>
                </div>
                <p className="text-xs text-[#8F8177]">JP Laurel Highway</p>
              </div>
            </div>

          </div>

          {/* Visual Imagery Column */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Hero Card Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/hero-cafe.jpg" 
                alt="Freya Studio Cafe Interior in Lipa City" 
                className="w-full h-[460px] md:h-[540px] object-cover"
              />
              
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211A17]/60 via-transparent to-transparent"></div>
              
              {/* Bottom Card Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF6F0]/80">Micro-Bakery & Cafe</span>
                    <h3 className="text-xl font-serif font-bold">Freya Studio Atmosphere</h3>
                  </div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium border border-white/30">
                    Marauoy, Lipa
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Highlight Badge 1: Salted Cream Coffee */}
            <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#2C201C]/10 max-w-[230px] hidden sm:block animate-float-bean">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4E4DF] flex items-center justify-center text-[#C86D51] relative">
                  <CoffeeIcon size={22} />
                  {/* Steaming Coffee Effect */}
                  <div className="absolute -top-4 left-2.5 pointer-events-none opacity-80">
                    <svg width="18" height="20" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[#C86D51]">
                      <path d="M6 28 C 4 20, 10 16, 8 8 C 7 4, 9 2, 8 0" className="animate-steam-1" />
                      <path d="M14 30 C 12 22, 18 18, 16 10 C 15 6, 17 3, 16 0" className="animate-steam-2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C86D51] uppercase tracking-wide">Signature Brew</span>
                  <h4 className="text-sm font-bold text-[#211A17] font-serif">Salted Cream Coffee</h4>
                </div>
              </div>
            </div>

            {/* Floating Highlight Badge 2: Candle Workshop */}
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#2C201C]/10 max-w-[240px] hidden sm:block animate-float-bean" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] flex items-center justify-center text-[#607765] relative">
                  <CandleIcon size={22} />
                  {/* Flame Flicker Effect */}
                  <div className="absolute -top-2 left-4 text-[#D98E3A] animate-flame-flicker pointer-events-none">
                    <div className="w-2 h-2.5 rounded-full bg-[#E8A858] blur-[1px]"></div>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#607765] uppercase tracking-wide">Studio Activity</span>
                  <h4 className="text-sm font-bold text-[#211A17] font-serif">Candle-Making 102</h4>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
