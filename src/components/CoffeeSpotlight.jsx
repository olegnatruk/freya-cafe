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
    popular: true,
    boldness: 90,
    creaminess: 85,
    sweetness: 60,
    ingredients: ['Dak Lak Dark Roast', 'House Salted Cream', 'Cocoa Powder']
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
    popular: false,
    boldness: 85,
    creaminess: 95,
    sweetness: 75,
    ingredients: ['Whipped Egg Yolk', 'Condensed Milk', 'Robusta Espresso']
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
    popular: false,
    boldness: 75,
    creaminess: 70,
    sweetness: 50,
    ingredients: ['18-Hr Steeped Brew', 'Fresh Coconut Foam', 'Toasted Flakes']
  },
  {
    id: 'sua-da',
    name: 'Saigon Condensed Milk Iced Coffee',
    vietnameseName: 'Cà Phê Sữa Đá',
    price: '₱150',
    tag: 'Traditional Brew',
    description: 'Authentic slow-drip Phin dark roast poured over sweet condensed milk and served with crushed ice.',
    flavorNotes: ['Caramelized Sweetness', 'Strong Espresso', 'Crushed Ice'],
    image: '/hero-cafe.jpg',
    popular: false,
    boldness: 95,
    creaminess: 65,
    sweetness: 70,
    ingredients: ['Phin Drip Robusta', 'Sweet Condensed Milk', 'Crushed Ice']
  }
];

const CRAFT_STEPS = [
  { step: '01', title: 'Phin Gravity Drip', desc: '100% Robusta & Arabica beans extracted slowly through a metal Phin filter.' },
  { step: '02', title: 'Artisan Cream Layering', desc: 'Hand-whipped sea salt cream or egg yolk custard added in precise balance.' },
  { step: '03', title: 'Bittersweet Dusting', desc: 'Topped with premium cocoa dust or toasted coconut flakes.' }
];

export default function CoffeeSpotlight({ onSelectCoffee }) {
  const [selectedCoffee, setSelectedCoffee] = useState(VIETNAMESE_COFFEES[0]);

  return (
    <section id="coffee-spotlight" className="section bg-[#2C201C] text-white relative overflow-hidden">
      
      {/* Decorative ambient background blur */}
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
            Authentic Vietnamese Creations, <br />
            <span className="italic text-[#E8A858]">Reimagined at FREYA.</span>
          </h2>
          <p className="text-[#FAF6F0]/80 text-base md:text-lg">
            Experience the rich harmony of authentic slow-drip Phin brewing paired with FREYA’s signature artisan creams and whipped tops.
          </p>
        </div>

        {/* Feature Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Coffee Image & Flavor Radar Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
              <img 
                src={selectedCoffee.image} 
                alt={selectedCoffee.name} 
                className="w-full h-[380px] md:h-[440px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C201C] via-transparent to-transparent"></div>
              
              {/* Steaming Steam SVG Overlay */}
              <div className="absolute top-12 right-12 pointer-events-none opacity-80">
                <svg width="32" height="40" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[#E8A858]">
                  <path d="M6 28 C 4 20, 10 16, 8 8 C 7 4, 9 2, 8 0" className="animate-steam-1" />
                  <path d="M14 30 C 12 22, 18 18, 16 10 C 15 6, 17 3, 16 0" className="animate-steam-2" />
                  <path d="M22 28 C 20 20, 26 16, 24 8 C 23 4, 25 2, 24 0" className="animate-steam-3" />
                </svg>
              </div>

              {/* Tag overlay */}
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

            {/* Key Ingredients Pill Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8A858] mr-1">Craft Ingredients:</span>
              {selectedCoffee.ingredients.map((ing, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/10 text-[#FAF6F0]/90 font-medium border border-white/10">
                  ✓ {ing}
                </span>
              ))}
            </div>

          </div>

          {/* Coffee Selection & Brewing Process */}
          <div className="lg:col-span-6 space-y-6">
            
            <h3 className="text-xl font-serif font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Select Your Signature Brew</span>
              <span className="text-xs font-sans font-normal text-[#FAF6F0]/60">Hand-crafted upon order</span>
            </h3>

            {/* Coffee Item Selector Cards */}
            <div className="space-y-3">
              {VIETNAMESE_COFFEES.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setSelectedCoffee(item)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    selectedCoffee.id === item.id 
                      ? 'bg-white/10 border-[#C86D51] shadow-lg translate-x-2' 
                      : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${selectedCoffee.id === item.id ? 'bg-[#C86D51] animate-pulse' : 'bg-white/20'}`}></div>
                      <h4 className="font-serif font-bold text-base text-white">{item.name}</h4>
                    </div>
                    <span className="font-serif text-base font-bold text-[#E8A858]">{item.price}</span>
                  </div>

                  <p className="text-xs text-[#FAF6F0]/70 pl-6 mb-2">
                    {item.description}
                  </p>

                  <div className="pl-6 flex flex-wrap gap-2">
                    {item.flavorNotes.map((note, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#FAF6F0]/80">
                        • {note}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Phin Craft Timeline */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A858] flex items-center gap-2">
                <CoffeeIcon size={14} />
                The FREYA Phin Extraction Method
              </h4>

              <div className="grid grid-cols-3 gap-3">
                {CRAFT_STEPS.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold text-[#C86D51] block">{s.step}</span>
                    <h5 className="font-serif text-xs font-bold text-white">{s.title}</h5>
                    <p className="text-[10px] text-[#FAF6F0]/70 leading-tight">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Action Button */}
            <div className="pt-2">
              <button 
                onClick={() => onSelectCoffee(selectedCoffee)}
                className="btn btn-primary w-full py-4 text-base justify-center font-bold shadow-xl hover:scale-[1.02] transition-transform"
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
