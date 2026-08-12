import React from 'react';
import { StarIcon, HeartIcon, FacebookIcon } from './Icons';

const REVIEWS = [
  {
    id: 1,
    author: 'Kimmy Kim',
    date: 'Recent Guest',
    rating: 5,
    comment: 'The candle making workshop was such a lovely experience! Highly recommend FREYA for coffee dates & creative weekend activities.',
    recommendation: '100% Recommends Freya Studio Cafe'
  },
  {
    id: 2,
    author: 'Alyssa M.',
    date: 'Lipa Resident',
    rating: 5,
    comment: 'Their Salted Cream Coffee is hands down the best in Lipa City! Paired with their warm sourdough croissants, it’s absolute perfection.',
    recommendation: '100% Recommends Freya Studio Cafe'
  },
  {
    id: 3,
    author: 'Carlos G.',
    date: 'Coffee Enthusiast',
    rating: 5,
    comment: 'Beautiful cozy studio atmosphere, friendly staff, and fantastic Vietnamese slow drip brews. A true hidden gem along JP Laurel Highway.',
    recommendation: '100% Recommends Freya Studio Cafe'
  }
];

export default function ReviewsSection() {
  return (
    <section className="section bg-[#FAF6F0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <StarIcon size={16} fill="#C86D51" />
            Loved by Our Guests
          </span>
          <h2 className="section-title">
            100% Recommended on Facebook
          </h2>
          <p className="section-desc">
            Read what visitors and studio workshop participants say about their FREYA experience.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div key={r.id} className="glass-card p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#D98E3A]">
                  {[...Array(r.rating)].map((_, i) => (
                    <StarIcon key={i} size={18} fill="#D98E3A" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-[#594E47] italic text-base leading-relaxed">
                  "{r.comment}"
                </p>
              </div>

              {/* Author & Badge */}
              <div className="pt-4 border-t border-[#2C201C]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-[#211A17]">{r.author}</h4>
                  <span className="text-xs text-[#8F8177]">{r.date}</span>
                </div>
                
                <span className="px-3 py-1 rounded-full bg-[#F4E4DF] text-[#C86D51] text-[11px] font-bold flex items-center gap-1">
                  <FacebookIcon size={12} /> Recommended
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
