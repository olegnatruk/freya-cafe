import React from 'react';
import { CandleIcon, SparklesIcon, CalendarIcon, CheckIcon, StarIcon, ClockIcon } from './Icons';

export default function WorkshopSection({ onOpenReserve }) {
  return (
    <section id="workshops" className="section bg-[#F4EFE6] relative overflow-hidden">
      
      {/* Decorative SVG background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#607765]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Workshop Gallery Card */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/candle-workshop.jpg" 
                alt="Creative Candle Making Workshop at Freya Studio" 
                className="w-full h-[460px] md:h-[520px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C201C]/80 via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[#607765] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
                <CandleIcon size={16} />
                Creative Studio Session
              </div>

              <div className="absolute bottom-6 left-6 right-6 pr-24 sm:pr-32 md:pr-36 max-w-[65%] sm:max-w-[70%] text-white space-y-1.5">
                <span className="text-xs uppercase tracking-widest text-[#E8A858] font-bold">Upcoming Edition</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">Creative Candles: Candle-Making 102</h3>
                <p className="text-xs sm:text-sm text-[#FAF6F0]/85 line-clamp-2 sm:line-clamp-3">
                  Intimate hands-on soy wax candle formulation, custom scent blending, dried botanical styling.
                </p>
              </div>
            </div>

            {/* Price Pill Highlight */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#2C201C]/10 max-w-[240px]">
              <span className="text-xs font-bold text-[#8F8177] uppercase tracking-wider block">Workshop Fee</span>
              <div className="text-2xl font-serif font-bold text-[#C86D51] mt-0.5">₱850 <span className="text-xs font-sans text-[#594E47] font-normal">/ per head</span></div>
              <p className="text-[11px] text-[#607765] font-semibold mt-1 flex items-center gap-1">
                <CheckIcon size={12} /> Includes Coffee & All Materials
              </p>
            </div>

          </div>

          {/* Workshop Info & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#607765]/15 text-[#607765] text-xs font-bold uppercase tracking-widest">
              <SparklesIcon size={16} />
              FREYA Creative Studio
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#211A17] tracking-tight">
              Gather, Create & <br />
              <span className="italic text-[#607765]">Unwind Together.</span>
            </h2>

            <p className="text-[#594E47] text-lg leading-relaxed">
              Beyond coffee and sourdough, <strong>FREYA</strong> is a haven for creative expressions. Join our weekend studio sessions designed to spark joy, mindfulness, and artistic discovery in Lipa City.
            </p>

            {/* Included Features List */}
            <div className="space-y-3.5 pt-2">
              
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#2C201C]/5">
                <div className="w-8 h-8 rounded-lg bg-[#EBF0EC] text-[#607765] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#211A17] text-sm">Full Premium Kit Provided</h4>
                  <p className="text-xs text-[#594E47]">100% natural soy wax, cotton wicks, ceramic jars, essential oil fragrance bar, and dried floral decorations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#2C201C]/5">
                <div className="w-8 h-8 rounded-lg bg-[#F4E4DF] text-[#C86D51] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#211A17] text-sm">Complimentary Beverage & Pastry</h4>
                  <p className="text-xs text-[#594E47]">Enjoy any FREYA Signature Coffee or Iced Tea along with fresh sourdough bites during the 2-hour session.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/70 border border-[#2C201C]/5">
                <div className="w-8 h-8 rounded-lg bg-[#FDFBF7] text-[#D98E3A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#211A17] text-sm">Take Home Your Custom Candle</h4>
                  <p className="text-xs text-[#594E47]">Leave with your beautifully crafted custom scented candle gift box and step-by-step candle care guide.</p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button 
                onClick={onOpenReserve}
                className="btn btn-primary py-3.5 px-8 text-base shadow-lg"
              >
                <CandleIcon size={20} />
                Reserve Workshop Spot (₱850/head)
              </button>
              
              <span className="text-xs text-[#8F8177] font-medium flex items-center gap-1.5">
                <ClockIcon size={14} /> Limited to 12 participants per batch
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
