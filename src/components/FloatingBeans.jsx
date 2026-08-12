import React from 'react';

const BEANS = [
  { id: 1, top: '15%', left: '5%', size: 28, delay: '0s', duration: '7s', opacity: 0.25, rotate: '12deg' },
  { id: 2, top: '40%', right: '4%', size: 36, delay: '2s', duration: '9s', opacity: 0.2, rotate: '-25deg' },
  { id: 3, top: '70%', left: '8%', size: 24, delay: '1s', duration: '8s', opacity: 0.3, rotate: '45deg' },
  { id: 4, top: '85%', right: '10%', size: 32, delay: '3s', duration: '10s', opacity: 0.2, rotate: '-15deg' },
  { id: 5, top: '25%', right: '15%', size: 20, delay: '4s', duration: '6.5s', opacity: 0.15, rotate: '60deg' }
];

export function CoffeeBeanSVG({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C7.03 2 3 6.03 3 11c0 5.5 4.5 10 10 10s9-4.5 9-10c0-4.97-4.03-9-10-9zm.5 16.5c-3.5 0-6.5-2.5-7.2-5.8 1.8.8 3.8.7 5.5-.3 2.1-1.2 3.2-3.3 3.2-5.7 0-.7-.1-1.3-.3-1.9 3.1.8 5.3 3.5 5.3 6.7.1 3.8-3.1 7-6.5 7z" />
    </svg>
  );
}

export function SteamSVG({ className = "w-6 h-8 text-[#C86D51]/40" }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M6 28 C 4 20, 10 16, 8 8 C 7 4, 9 2, 8 0" className="animate-steam-1" />
      <path d="M12 30 C 10 22, 16 18, 14 10 C 13 6, 15 3, 14 0" className="animate-steam-2" />
      <path d="M18 28 C 16 20, 22 16, 20 8 C 19 4, 21 2, 20 0" className="animate-steam-3" />
    </svg>
  );
}

export default function FloatingBeans() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {BEANS.map((bean) => (
        <div
          key={bean.id}
          className="absolute text-[#C86D51] transition-transform animate-float-bean"
          style={{
            top: bean.top,
            left: bean.left,
            right: bean.right,
            opacity: bean.opacity,
            animationDelay: bean.delay,
            animationDuration: bean.duration,
            transform: `rotate(${bean.rotate})`
          }}
        >
          <CoffeeBeanSVG size={bean.size} />
        </div>
      ))}
    </div>
  );
}
