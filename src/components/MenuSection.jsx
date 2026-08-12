import React, { useState } from 'react';
import { CoffeeIcon, CroissantIcon, SparklesIcon, PlusIcon, HeartIcon, CheckIcon } from './Icons';

const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'coffee', label: 'Specialty Coffee', icon: CoffeeIcon },
  { id: 'bakery', label: 'Micro-Bakery', icon: CroissantIcon },
  { id: 'breakfast', label: 'FREYA Breakfast' },
  { id: 'beverages', label: 'Matcha & Elixirs' }
];

const MENU_ITEMS = [
  {
    id: 1,
    category: 'coffee',
    name: 'FREYA Salted Cream Coffee',
    price: '₱165',
    tag: 'Signature Best Seller',
    desc: 'Slow-drip Vietnamese Phin dark roast, topped with velvety salted cream foam & cocoa powder.',
    image: '/salted-coffee.jpg',
    badgeColor: 'bg-[#C86D51] text-white'
  },
  {
    id: 2,
    category: 'bakery',
    name: 'Artisan Butter Croissant',
    price: '₱120',
    tag: 'Baked Fresh Daily',
    desc: '72-layer French butter croissant baked fresh every morning with golden flaky layers.',
    image: '/hero-cafe.jpg',
    badgeColor: 'bg-[#D98E3A] text-white'
  },
  {
    id: 3,
    category: 'bakery',
    name: 'Pain au Chocolat',
    price: '₱135',
    tag: 'Chef Choice',
    desc: 'Flaky sourdough pastry filled with rich 65% Belgian dark chocolate batons.',
    image: '/hero-cafe.jpg',
    badgeColor: 'bg-[#2C201C] text-white'
  },
  {
    id: 4,
    category: 'breakfast',
    name: 'FREYA Breakfast Toast Plate',
    price: '₱240',
    tag: 'Breakfast Favorite',
    desc: 'Toasted house sourdough, soft scrambled eggs, crispy bacon, avocado slice & cherry tomatoes.',
    image: '/hero-cafe.jpg',
    badgeColor: 'bg-[#607765] text-white'
  },
  {
    id: 5,
    category: 'coffee',
    name: 'Hanoi Egg Cream Espresso',
    price: '₱175',
    tag: 'Vietnamese Classic',
    desc: 'Custard-whipped egg yolk cream over intense dark roast Phin coffee.',
    image: '/salted-coffee.jpg',
    badgeColor: 'bg-[#C86D51] text-white'
  },
  {
    id: 6,
    category: 'beverages',
    name: 'Uji Matcha Salted Cream Latte',
    price: '₱180',
    tag: 'Ceremonial Grade',
    desc: 'Whisked Japanese ceremonial Uji matcha, fresh milk, and signature salted cream foam top.',
    image: '/candle-workshop.jpg',
    badgeColor: 'bg-[#607765] text-white'
  },
  {
    id: 7,
    category: 'bakery',
    name: 'Country Sourdough Loaf',
    price: '₱210',
    tag: 'Whole Loaf',
    desc: 'Naturally fermented 36-hour sourdough loaf with crisp caramelized crust & open crumb.',
    image: '/hero-cafe.jpg',
    badgeColor: 'bg-[#D98E3A] text-white'
  },
  {
    id: 8,
    category: 'beverages',
    name: 'Iced Coconut Cold Brew',
    price: '₱160',
    tag: 'Refreshing',
    desc: '18-hour steep cold brew with whipped coconut foam and toasted coconut chips.',
    image: '/salted-coffee.jpg',
    badgeColor: 'bg-[#C86D51] text-white'
  }
];

export default function MenuSection({ onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section bg-[#FAF6F0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <CroissantIcon size={16} />
            Artisan Offerings
          </span>
          <h2 className="section-title">
            Explore the FREYA Menu
          </h2>
          <p className="section-desc">
            Handcrafted beverages and freshly baked artisan loaves served daily at our Lipa City studio.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#C86D51] text-white shadow-md scale-105'
                  : 'bg-white text-[#594E47] border border-[#2C201C]/10 hover:border-[#C86D51] hover:text-[#C86D51]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="glass-card overflow-hidden flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-[#F4EFE6]">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Tag Badge */}
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                  {item.tag}
                </span>

                <span className="absolute bottom-3 right-3 px-3 py-1 bg-[#2C201C]/80 backdrop-blur-md text-white font-serif font-bold text-sm rounded-lg border border-white/20">
                  {item.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#211A17] group-hover:text-[#C86D51] transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#594E47] line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-2 border-t border-[#2C201C]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8F8177]">Fresh Batch</span>
                  <button 
                    onClick={() => onSelectItem(item)}
                    className="btn btn-secondary btn-sm text-xs font-bold flex items-center gap-1 hover:bg-[#C86D51] hover:text-white hover:border-[#C86D51]"
                  >
                    <PlusIcon size={14} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
