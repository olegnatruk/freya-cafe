import React, { useState } from 'react';
import { CoffeeIcon, SparklesIcon, CheckIcon, PlusIcon } from './Icons';

const BASES = [
  { id: 'phin', name: 'Vietnamese Phin Dark Roast', price: 110, desc: 'Bold, slow-drip traditional dark roast' },
  { id: 'coldbrew', name: '18-Hour Slow Steep Cold Brew', price: 120, desc: 'Smooth, chocolatey low-acid steep' },
  { id: 'matcha', name: 'Uji Ceremonial Japanese Matcha', price: 130, desc: 'Earthy, vibrant green whisked tea' },
  { id: 'espresso', name: 'Double Shot Espresso Base', price: 100, desc: 'Concentrated rich espresso shot' }
];

const FOAMS = [
  { id: 'salted', name: 'FREYA Salted Cream Foam', price: 55, tag: 'Most Popular' },
  { id: 'egg', name: 'Hanoi Whipped Egg Custard', price: 65, tag: 'Rich & Creamy' },
  { id: 'coconut', name: 'Whipped Tropical Coconut Foam', price: 50, tag: 'Dairy-Free' },
  { id: 'vanilla', name: 'Madagascar Vanilla Cold Foam', price: 45, tag: 'Subtle Sweet' }
];

const PAIRINGS = [
  { id: 'croissant', name: 'Artisan Butter Croissant', price: 120 },
  { id: 'chocolat', name: 'Pain au Chocolat', price: 135 },
  { id: 'none', name: 'No Pastry Pairing', price: 0 }
];

export default function BrewCustomizer({ onOrderCustomBrew }) {
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [selectedFoam, setSelectedFoam] = useState(FOAMS[0]);
  const [sweetness, setSweetness] = useState('50% Sweetness');
  const [selectedPairing, setSelectedPairing] = useState(PAIRINGS[0]);

  const totalPrice = selectedBase.price + selectedFoam.price + selectedPairing.price;

  const handleOrder = () => {
    onOrderCustomBrew({
      base: selectedBase.name,
      foam: selectedFoam.name,
      sweetness,
      pairing: selectedPairing.name,
      totalPrice
    });
  };

  return (
    <section id="customizer" className="section bg-[#FAF6F0] relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="section-header">
          <span className="section-tag">
            <SparklesIcon size={16} />
            Interactive Coffee Lab
          </span>
          <h2 className="section-title">
            Build Your FREYA Custom Brew
          </h2>
          <p className="section-desc">
            Combine your favorite coffee base, signature whipped cream top, sweetness, and fresh sourdough pairing.
          </p>
        </div>

        {/* Customizer Tool Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#2C201C]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Base */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#C86D51] block mb-2">
                Step 1 • Choose Coffee Base
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASES.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => setSelectedBase(b)}
                    className={`p-3.5 rounded-2xl cursor-pointer border transition-all ${
                      selectedBase.id === b.id 
                        ? 'border-[#C86D51] bg-[#F4E4DF]/40 text-[#211A17] ring-1 ring-[#C86D51]' 
                        : 'border-[#2C201C]/10 hover:border-[#C86D51]/50 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-serif font-bold text-sm">{b.name}</span>
                      <span className="text-xs font-bold text-[#C86D51]">₱{b.price}</span>
                    </div>
                    <p className="text-[11px] text-[#8F8177]">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Foam Top */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#C86D51] block mb-2">
                Step 2 • Select Whipped Cream Top
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOAMS.map((f) => (
                  <div
                    key={f.id}
                    onClick={() => setSelectedFoam(f)}
                    className={`p-3.5 rounded-2xl cursor-pointer border transition-all ${
                      selectedFoam.id === f.id 
                        ? 'border-[#C86D51] bg-[#F4E4DF]/40 text-[#211A17] ring-1 ring-[#C86D51]' 
                        : 'border-[#2C201C]/10 hover:border-[#C86D51]/50 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-serif font-bold text-sm">{f.name}</span>
                      <span className="text-xs font-bold text-[#C86D51]">+₱{f.price}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF6F0] text-[#594E47] font-semibold">
                      {f.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Sweetness Level */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#C86D51] block mb-2">
                Step 3 • Sweetness Preference
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['25% Light', '50% Standard', '75% Sweet', '100% Rich'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSweetness(s)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-semibold border transition-all ${
                      sweetness === s 
                        ? 'bg-[#C86D51] text-white border-[#C86D51]' 
                        : 'bg-[#FAF6F0] text-[#594E47] border-[#2C201C]/10 hover:border-[#C86D51]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Pastry Pairing */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#C86D51] block mb-2">
                Step 4 • Optional Pastry Pairing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PAIRINGS.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPairing(p)}
                    className={`p-3 rounded-xl cursor-pointer border text-center transition-all ${
                      selectedPairing.id === p.id 
                        ? 'border-[#C86D51] bg-[#F4E4DF]/40 font-bold text-[#211A17]' 
                        : 'border-[#2C201C]/10 text-[#594E47] hover:border-[#C86D51]'
                    }`}
                  >
                    <span className="text-xs block font-serif">{p.name}</span>
                    <span className="text-[11px] font-bold text-[#C86D51]">
                      {p.price > 0 ? `+₱${p.price}` : 'Free'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Cup Preview Summary Column */}
          <div className="lg:col-span-5 bg-[#2C201C] text-white rounded-2xl p-6 flex flex-col justify-between h-full border border-white/10 space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-xs text-[#E8A858] font-bold uppercase tracking-wider">FREYA Custom Brew</span>
                  <h3 className="text-xl font-serif font-bold text-white">Your Order Summary</h3>
                </div>
                <CoffeeIcon size={24} className="text-[#E8A858]" />
              </div>

              {/* Cup Visual representation */}
              <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Base Coffee:</span>
                  <span className="font-bold text-white">{selectedBase.name}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Foam Top:</span>
                  <span className="font-bold text-[#E8A858]">{selectedFoam.name}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Sweetness:</span>
                  <span className="font-bold text-white">{sweetness}</span>
                </div>

                {selectedPairing.id !== 'none' && (
                  <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                    <span className="text-white/70">Pastry Pairing:</span>
                    <span className="font-bold text-white">{selectedPairing.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80">Estimated Total:</span>
                <span className="text-3xl font-serif font-bold text-[#E8A858]">₱{totalPrice}</span>
              </div>

              <button 
                onClick={handleOrder}
                className="btn btn-primary w-full py-3.5 text-center justify-center font-bold"
              >
                Order This Custom Brew
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
