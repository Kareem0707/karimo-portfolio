import React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { AnimatedText } from '../components/ui/AnimatedText';
import { ContactButton } from '../components/ui/ContactButton';

const AboutSection = () => {
  const textContent = "With over 2 years of experience in web development and UI/UX design, I craft high-converting, premium digital experiences that turn visitors into clients. Having built successful platforms across e-commerce, restaurants, lighting showrooms, and brand portfolios, I deliver sleek designs paired with high-performance code built to scale your business.";

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]">
      
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16 gap-12 sm:gap-16 md:gap-20">
          <AnimatedText 
            text={textContent} 
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px] text-[clamp(1.05rem,2vw,1.35rem)]"
          />

          <ContactButton />
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
