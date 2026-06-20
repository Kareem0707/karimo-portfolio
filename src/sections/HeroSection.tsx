import React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { ContactButton } from '../components/ui/ContactButton';
import { Magnet } from '../components/ui/Magnet';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative w-full">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        {['About', 'Services', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] px-4 pt-4 pb-8 -mx-4 -mt-4 -mb-8 font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:text-[#f5b412] transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-between relative w-full mt-6 sm:mt-4 md:-mt-5">
        
        {/* Centered Heading */}
        <div className="flex-1 flex flex-col justify-center items-center w-full px-4 sm:px-6 md:px-8 z-20">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="font-black uppercase tracking-tight w-full text-[13.5vw] sm:text-[10vw] md:text-[10vw] lg:text-[11vw] text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 lg:gap-8">
              <span className="bg-[#f5b412] text-[#0C0C0C] px-[0.15em] py-[0.25em] leading-[0.75] mb-1 sm:mb-0">
                HI,
              </span>
              <span className="flex items-center whitespace-nowrap">
                <span className="hero-heading">I&apos;M&nbsp;KAREE</span>
                <span style={{ WebkitTextFillColor: '#f5b412', color: '#f5b412' }}>M</span>
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.25} y={40}>
            <h2 className="text-[#D7E2EA] font-semibold uppercase tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.8em] text-[5.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.2vw] text-center mt-3 sm:mt-4">
              Web Developer
            </h2>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-10 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
          <FadeIn delay={0.35} y={20} className="w-[55%] sm:w-auto sm:max-w-[220px] md:max-w-[260px]">
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[0.85rem] sm:text-[clamp(0.75rem,1.4vw,1.5rem)]">
              a web developer and ui/ux designer driven by crafting striking, high-performance digital experiences
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* Centered Magnetic Portrait */}
          {/* Portrait Image Removed as per user request */}
      </div>
    </section>
  );
};

export default HeroSection;
