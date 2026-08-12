import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CoffeeSpotlight from './components/CoffeeSpotlight';
import WorkshopSection from './components/WorkshopSection';
import BrewCustomizer from './components/BrewCustomizer';
import AtmosphereGallery from './components/AtmosphereGallery';
import ReviewsSection from './components/ReviewsSection';
import VisitContactSection from './components/VisitContactSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import FloatingBeans from './components/FloatingBeans';
import { CoffeeIcon, CandleIcon, CheckIcon, SparklesIcon } from './components/Icons';

export default function App() {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [customBrewOrder, setCustomBrewOrder] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setReserveModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#211A17] flex flex-col font-sans relative">
      
      {/* Ambient Floating Coffee Beans */}
      <FloatingBeans />

      {/* Top Navbar */}
      <Navbar onOpenReserve={() => setReserveModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenReserve={() => setReserveModalOpen(true)} />
        <CoffeeSpotlight onSelectCoffee={(coffee) => setSelectedMenuItem(coffee)} />
        <MenuSection onSelectItem={(item) => setSelectedMenuItem(item)} />
        <WorkshopSection onOpenReserve={() => setReserveModalOpen(true)} />
        <BrewCustomizer onOrderCustomBrew={(brew) => setCustomBrewOrder(brew)} />
        <AtmosphereGallery />
        <ReviewsSection />
        <VisitContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Workshop / Table Booking Modal */}
      <Modal 
        isOpen={reserveModalOpen} 
        onClose={() => setReserveModalOpen(false)}
        title="Reserve Workshop or Table"
      >
        {bookingSuccess ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#607765] text-white flex items-center justify-center mx-auto">
              <CheckIcon size={28} />
            </div>
            <h4 className="font-serif font-bold text-2xl text-[#211A17]">Reservation Sent!</h4>
            <p className="text-sm text-[#594E47]">
              We have received your reservation request for FREYA Lipa City. We will confirm your slot via SMS/Call shortly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
            <div className="p-3.5 bg-[#F4E4DF] rounded-xl text-xs font-semibold text-[#A8543B] flex items-center gap-2">
              <CandleIcon size={16} />
              Candle Workshop (₱850/head) • Table Reservations Free
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                Full Name *
              </label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Maria Santos"
                className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                  Mobile Phone *
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="0917 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                  Number of Guests
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm bg-white">
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3-4">3 - 4 Persons</option>
                  <option value="5+">5+ Group Session</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                Reservation Type
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm bg-white">
                <option value="candle">Candle-Making 102 Workshop (₱850/head)</option>
                <option value="table">Studio Cafe Table Reservation</option>
                <option value="bakery">Micro-Bakery Pickup Order</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                Preferred Date & Time
              </label>
              <input 
                type="text" 
                placeholder="e.g. Saturday at 2:00 PM"
                className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm bg-white"
              />
            </div>

            <button 
              type="submit"
              className="btn btn-primary w-full py-3.5 text-center justify-center font-bold mt-2"
            >
              Confirm Reservation Request
            </button>
          </form>
        )}
      </Modal>

      {/* Menu Item Detail Modal */}
      {selectedMenuItem && (
        <Modal 
          isOpen={!!selectedMenuItem} 
          onClose={() => setSelectedMenuItem(null)}
          title={selectedMenuItem.name}
        >
          <div className="space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden bg-[#F4EFE6]">
              <img 
                src={selectedMenuItem.image} 
                alt={selectedMenuItem.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-[#C86D51] text-white text-xs font-bold rounded-full">
                {selectedMenuItem.tag || 'Handcrafted'}
              </span>
              <span className="text-2xl font-serif font-bold text-[#C86D51]">
                {selectedMenuItem.price}
              </span>
            </div>

            <p className="text-[#594E47] text-sm leading-relaxed">
              {selectedMenuItem.desc || selectedMenuItem.description}
            </p>

            {selectedMenuItem.flavorNotes && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8F8177] block mb-1.5">
                  Flavor Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMenuItem.flavorNotes.map((note, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-[#F4E4DF] text-[#A8543B] font-semibold">
                      • {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#2C201C]/10 flex gap-3">
              <button 
                onClick={() => {
                  setSelectedMenuItem(null);
                  setReserveModalOpen(true);
                }}
                className="btn btn-primary w-full text-center justify-center font-bold"
              >
                Order / Reserve at Cafe
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Custom Brew Order Modal */}
      {customBrewOrder && (
        <Modal 
          isOpen={!!customBrewOrder} 
          onClose={() => setCustomBrewOrder(null)}
          title="Custom FREYA Brew Created!"
        >
          <div className="space-y-4">
            <div className="p-4 bg-[#2C201C] text-white rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs text-[#E8A858] uppercase font-bold tracking-wider">
                <span>FREYA Coffee Lab</span>
                <span>Total: ₱{customBrewOrder.totalPrice}</span>
              </div>

              <div className="space-y-1 text-sm">
                <p><strong>Base:</strong> {customBrewOrder.base}</p>
                <p><strong>Top:</strong> {customBrewOrder.foam}</p>
                <p><strong>Sweetness:</strong> {customBrewOrder.sweetness}</p>
                {customBrewOrder.pairing !== 'No Pastry Pairing' && (
                  <p><strong>Pastry:</strong> {customBrewOrder.pairing}</p>
                )}
              </div>
            </div>

            <p className="text-xs text-[#594E47] text-center">
              Show this custom brew card to our barista at JP Laurel Highway, Lipa City to prepare your exact drink!
            </p>

            <button 
              onClick={() => setCustomBrewOrder(null)}
              className="btn btn-primary w-full text-center justify-center font-bold"
            >
              Done & Save Brew Card
            </button>
          </div>
        </Modal>
      )}

    </div>
  );
}
