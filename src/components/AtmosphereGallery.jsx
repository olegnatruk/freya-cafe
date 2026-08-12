import React from 'react';
import { SparklesIcon, InstagramIcon, HeartIcon } from './Icons';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Studio Interior & Seating',
    subtitle: 'Cozy terracotta aesthetic',
    image: '/hero-cafe.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Vietnamese Salted Cream Coffee',
    subtitle: 'Signature velvet foam top',
    image: '/salted-coffee.jpg',
    span: 'col-span-1'
  },
  {
    id: 3,
    title: 'Creative Candle Workshop',
    subtitle: 'Hands-on weekend studio sessions',
    image: '/candle-workshop.jpg',
    span: 'col-span-1'
  },
  {
    id: 4,
    title: 'Micro-Bakery Pastry Bar',
    subtitle: 'Baked fresh daily in Lipa City',
    image: '/hero-cafe.jpg',
    span: 'col-span-1 md:col-span-2'
  }
];

export default function AtmosphereGallery() {
  return (
    <section className="section bg-[#F4EFE6]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <SparklesIcon size={16} />
            Studio Atmosphere
          </span>
          <h2 className="section-title">
            Step Into FREYA
          </h2>
          <p className="section-desc">
            A quiet escape in Lipa City crafted for coffee, conversation, and creative focus.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id}
              className={`relative rounded-3xl overflow-hidden group shadow-md ${img.span} min-h-[260px]`}
            >
              <img 
                src={img.image} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C201C]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform group-hover:-translate-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E8A858] font-bold">{img.subtitle}</span>
                <h3 className="text-xl font-serif font-bold mt-0.5">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-12 text-center">
          <a 
            href="https://web.facebook.com/FreyaStudioCafe" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#211A17] font-semibold text-sm border border-[#2C201C]/10 shadow-sm hover:border-[#C86D51] hover:text-[#C86D51] transition-all"
          >
            <InstagramIcon size={18} className="text-[#C86D51]" />
            Follow @freyastudiocafe on Socials
          </a>
        </div>

      </div>
    </section>
  );
}
