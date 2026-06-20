import React from 'react';

export const ContactButton = () => {
  return (
    <a
      href="#contact"
      className="rounded-full font-bold uppercase tracking-widest text-[#0C0C0C] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform hover:scale-105 active:scale-95 inline-flex justify-center items-center text-center"
      style={{
        background: '#f5b412',
        boxShadow: '0px 4px 10px rgba(245, 180, 18, 0.3)'
      }}
    >
      Contact Me
    </a>
  );
};
