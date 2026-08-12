import React, { useState } from 'react';
import { CoffeeIcon, SparklesIcon, CheckIcon, PlusIcon, HeartIcon } from './Icons';

const VIETNAMESE_COFFEES = [
  {
    id: 'salted-cream',
    name: 'FREYA Salted Cream Coffee',
    vietnameseName: 'Cà Phê Muối',
    price: '₱165',
    tag: 'Must-Try Signature',
    description: 'Bold slow-drip Vietnamese Phin espresso layered beneath a thick, velvety sweet-salted cream top and finished with cocoa dust.',
    flavorNotes: ['Robust Espresso', 'Silky Sea-Salt Cream', 'Bittersweet Cocoa'],
    image: '/salted-coffee.jpg',
    popular: true
  },
  {
    id: 'egg-coffee',
    name: 'Hanoi Egg Cream Espresso',
    vietnameseName: 'Cà Phê Trứng',
    price: '₱175',
    tag: 'Decadent Classic',
    description: 'A creamy, custard-like whipped egg yolk infusion sweetened with condensed milk over rich dark roast coffee.',
    flavorNotes: ['Velvety Custard', 'Condensed Milk', 'Dark Roast'],
    image: '/hero-cafe.jpg',
    popular: false
  },
  {
    id: 'coconut-brew',
    name: 'Iced Coconut Foam Cold Brew',
    vietnameseName: 'Cà Phê Dừa',
    price: '₱160',
    tag: 'Refreshing & Light',
    description: 'Smooth 18-hour cold brew topped with freshly whipped tropical coconut cream and toasted coconut flakes.',
    flavorNotes: ['Tropical Coconut', 'Smooth Cold Brew', 'Light Toast'],
    image: '/salted-coffee.jpg',
    popular: false
  }
];

export default function CoffeeSpotlight({ onSelectCoffee }) {
  const [selectedCoffee, setSelectedCoffee] = useState(VIETNAMESE_COFFEES[0]);

  return (
    <section id="coffee-spotlight" className="section bg-[#2C201C] text-white relative overflow-hidden">
      
      {/* Decorative ambient coffee background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C86D51]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D98E3A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C86D51]/20 text-[#E8A858] text-xs font-bold uppercase tracking-widest border border-[#C86D51]/30 mb-4">
            <CoffeeIcon size={16} />
            Vietnamese Coffee Craft
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
            Three Vietnamese-Inspired Creations, <br />
            <span className="italic text-[#E8A858]">Reimagined at FREYA.</span>
          </h2>
          <p className="text-[#FAF6F0]/80 text-base md:text-lg">
            Experience the rich harmony of authentic slow-drip Phin brewing paired with FREYA’s signature artisan creams and whipped tops.
          </p>
        </div>

        {/* Feature Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Coffee Image Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src={selectedCoffee.image} 
                alt={selectedCoffee.name} 
                className="w-full h-[420px] md:h-[480px] object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C201C] via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#C86D51] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                {selectedCoffee.tag}
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs text-[#E8A858] font-bold uppercase tracking-wider">{selectedCoffee.vietnameseName}</span>
                  <h3 className="text-2xl font-serif font-bold text-white">{selectedCoffee.name}</h3>
                </div>
                <span className="text-2xl font-bold font-serif text-[#E8A858] bg-[#2C201C]/80 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10">
                  {selectedCoffee.price}
                </span>
              </div>
            </div>
          </div>

          {/* Coffee Selection & Flavor Notes */}
          <div className="lg:col-span-6 space-y-6">
            
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Select Coffee Creation</span>
              <span className="text-xs font-sans font-normal text-[#FAF6F0]/60">Hand-crafted upon order</span>
            </h3>

            {/* Coffee Item Selector Cards */}
            <div className="space-y-4">
              {VIETNAMESE_COFFEES.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedCoffee(item)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    selectedCoffee.id === item.id 
                      ? 'bg-white/10 border-[#C86D51] shadow-lg translate-x-2' 
                      : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${selectedCoffee.id === item.id ? 'bg-[#C86D51]' : 'bg-white/20'}`}></div>
                      <h4 className="font-serif font-bold text-lg text-white">{item.name}</h4>
                    </div>
                    <span className="font-serif text-lg font-bold text-[#E8A858]">{item.price}</span>
                  </div>

                  <p className="text-sm text-[#FAF6F0]/70 pl-6 mb-3">
                    {item.description}
                  </p>

                  {/* Flavor badges */}
                  <div className="pl-6 flex flex-wrap gap-2">
                    {item.flavorNotes.map((note, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-[#FAF6F0]/90">
                        • {note}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Action Button */}
            <div className="pt-4 flex items-center gap-4">
              <button 
                onClick={() => onSelectCoffee(selectedCoffee)}
                className="btn btn-primary w-full py-4 text-base justify-center"
              >
                <CoffeeIcon size={20} />
                Order {selectedCoffee.name} ({selectedCoffee.price})
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
