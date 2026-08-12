import React from 'react';
import { CloseIcon, CheckIcon, CoffeeIcon, CandleIcon } from './Icons';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#211A17]/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#FAF6F0] rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#2C201C]/10 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white text-[#211A17] hover:bg-[#C86D51] hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <CloseIcon size={18} />
        </button>

        {/* Modal Title */}
        {title && (
          <h3 className="text-2xl font-serif font-bold text-[#211A17] mb-4 pr-8">
            {title}
          </h3>
        )}

        {/* Content */}
        <div>
          {children}
        </div>

      </div>
    </div>
  );
}
