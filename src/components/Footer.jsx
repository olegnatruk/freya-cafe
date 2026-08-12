import React from 'react';
import { FacebookIcon, InstagramIcon, CoffeeIcon, CandleIcon, MapPinIcon, HeartIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#1C1512] text-white pt-16 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C86D51] text-white flex items-center justify-center font-serif text-xl font-bold">
                F
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block leading-none">
                  FREYA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A858] block mt-0.5">
                  Studio Cafe & Micro-Bakery
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FAF6F0]/70 max-w-sm">
              Artisan Micro-Bakery & Creative Studio Café in Lipa City, Batangas. <br />
              <em className="text-[#E8A858]">Crafted with intention. Served with soul.</em>
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://web.facebook.com/FreyaStudioCafe" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C86D51] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a 
                href="https://instagram.com/freyastudiocafe" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C86D51] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Quick Navigation</h4>
            <ul className="space-y-2 text-sm text-[#FAF6F0]/70">
              <li><a href="#menu" className="hover:text-[#E8A858] transition-colors">Artisan Menu</a></li>
              <li><a href="#coffee-spotlight" className="hover:text-[#E8A858] transition-colors">Vietnamese Salted Cream Coffee</a></li>
              <li><a href="#workshops" className="hover:text-[#E8A858] transition-colors">Candle-Making Workshops</a></li>
              <li><a href="#customizer" className="hover:text-[#E8A858] transition-colors">Build a Custom Brew</a></li>
              <li><a href="#visit" className="hover:text-[#E8A858] transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">Lipa City Studio</h4>
            <p className="text-sm text-[#FAF6F0]/70">
              JP Laurel Highway, Marauoy, Lipa City, Philippines
            </p>
            <p className="text-sm text-[#FAF6F0]/70">
              Phone: <span className="text-[#E8A858] font-bold">0923 088 3180</span>
            </p>
            <p className="text-sm text-[#FAF6F0]/70">
              Email: <span className="text-[#E8A858]">thehomebakerph@gmail.com</span>
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/50 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Freya Studio Cafe and Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <HeartIcon size={12} className="text-[#C86D51]" /> for Freya Studio Cafe
          </p>
        </div>

      </div>
    </footer>
  );
}
