import React from 'react';

export const LiveProjectButton = ({ link }: { link?: string }) => {
  return (
    <a 
      href={link || "#"} 
      target="_blank" 
      rel="noreferrer"
      className="bg-[#f5b412] text-[#0C0C0C] font-bold uppercase tracking-wider px-8 py-3 sm:px-10 sm:py-3.5 rounded-full text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto inline-flex justify-center items-center text-center"
    >
      Live Project
    </a>
  );
};
