import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, InstagramIcon, CheckIcon } from './Icons';

export default function VisitContactSection({ onSubmitInquiry }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Workshop Booking',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (onSubmitInquiry) onSubmitInquiry(formData);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', type: 'Workshop Booking', message: '' });
    }, 4000);
  };

  return (
    <section id="visit" className="section bg-[#2C201C] text-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Location & Details Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C86D51]/20 text-[#E8A858] text-xs font-bold uppercase tracking-widest border border-[#C86D51]/30 mb-4">
                <MapPinIcon size={16} />
                Visit FREYA
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Location & Hours in Lipa City
              </h2>

              <p className="text-[#FAF6F0]/80 text-base">
                Stop by for morning sourdough pastries, afternoon salted cream espresso, or weekend candle-making studio sessions.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C86D51]/20 text-[#E8A858] flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Address</h4>
                  <p className="text-sm text-[#FAF6F0]/80 mt-0.5">
                    JP Laurel Highway, Marauoy, Lipa City, Batangas, Philippines
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#607765]/20 text-[#607765] flex items-center justify-center flex-shrink-0">
                  <ClockIcon size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Opening Hours</h4>
                  <p className="text-sm text-[#FAF6F0]/80 mt-0.5">
                    Tuesday – Sunday: 8:00 AM – 8:00 PM <br />
                    <span className="text-xs text-[#E8A858] font-semibold">Closed on Mondays</span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D98E3A]/20 text-[#D98E3A] flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Contact & Orders</h4>
                  <p className="text-sm text-[#FAF6F0]/80 mt-0.5">
                    Phone: <a href="tel:09230883180" className="text-[#E8A858] font-bold hover:underline">0923 088 3180</a> <br />
                    Email: <a href="mailto:thehomebakerph@gmail.com" className="text-[#E8A858] hover:underline">thehomebakerph@gmail.com</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Map Preview Placeholder Widget */}
            <div className="rounded-2xl overflow-hidden border border-white/10 relative h-48 bg-[#211A17] flex items-center justify-center p-6 text-center">
              <div className="space-y-2">
                <MapPinIcon size={32} className="text-[#C86D51] mx-auto animate-bounce-slow" />
                <h4 className="font-serif font-bold text-white text-sm">JP Laurel Highway, Lipa City</h4>
                <a 
                  href="https://maps.google.com/?q=JP+Laurel+Highway+Lipa+City" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary btn-sm text-xs inline-flex items-center gap-1.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Reservation / Inquiry Form Column */}
          <div className="lg:col-span-7 bg-white text-[#211A17] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20">
            
            <h3 className="text-2xl font-serif font-bold text-[#211A17] mb-2">
              Send an Inquiry or Reserve
            </h3>
            <p className="text-sm text-[#594E47] mb-6">
              Have a question about workshop slots, group bookings, or catering? Send us a direct message below.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-[#EBF0EC] rounded-2xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#607765] text-white flex items-center justify-center mx-auto">
                  <CheckIcon size={24} />
                </div>
                <h4 className="font-serif font-bold text-xl text-[#211A17]">Inquiry Received!</h4>
                <p className="text-sm text-[#594E47]">
                  Thank you for reaching out to FREYA. We will get back to you shortly via phone or email!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Maria Santos"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0917 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                      Inquiry Type
                    </label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm bg-white"
                    >
                      <option value="Workshop Booking">Candle Workshop Slot</option>
                      <option value="Table Reservation">Table / Group Reservation</option>
                      <option value="Special Order">Micro-Bakery Bulk Order</option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#594E47] block mb-1">
                    Your Message / Preferred Date
                  </label>
                  <textarea 
                    rows="4"
                    placeholder="Let us know how many guests, preferred date/time, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2C201C]/15 focus:outline-none focus:border-[#C86D51] text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="btn btn-primary w-full py-3.5 text-center justify-center font-bold"
                >
                  Send Inquiry to FREYA
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
