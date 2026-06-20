import React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <FadeIn y={30}>
          <h2 className="text-[#D7E2EA] font-black uppercase text-[clamp(3rem,10vw,120px)] leading-none mb-6">
            Let's Talk
          </h2>
        </FadeIn>
        
        <FadeIn y={20} delay={0.2} className="mb-16">
          <p className="text-[#D7E2EA] opacity-60 text-lg md:text-xl max-w-2xl">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-20 w-full max-w-4xl justify-center">
          <FadeIn y={20} delay={0.3} className="flex-1">
            <a href="mailto:kelshafie8743@gmail.com" className="flex flex-col items-center justify-center gap-4 p-8 rounded-[30px] border border-[rgba(215,226,234,0.1)] hover:border-[#f5b412] active:border-[#f5b412] hover:bg-[rgba(245,180,18,0.05)] active:bg-[rgba(245,180,18,0.1)] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[rgba(215,226,234,0.05)] flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <Mail className="w-8 h-8 text-[#f5b412]" />
              </div>
              <span className="text-[#D7E2EA] font-medium text-lg md:text-xl group-hover:text-[#f5b412] group-active:text-[#f5b412] transition-colors duration-300 break-all">kelshafie8743@gmail.com</span>
            </a>
          </FadeIn>

          <FadeIn y={20} delay={0.4} className="flex-1">
            <a href="https://wa.me/201116610361" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 rounded-[30px] border border-[rgba(215,226,234,0.1)] hover:border-[#f5b412] active:border-[#f5b412] hover:bg-[rgba(245,180,18,0.05)] active:bg-[rgba(245,180,18,0.1)] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[rgba(215,226,234,0.05)] flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f5b412]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <span className="text-[#D7E2EA] font-medium text-lg md:text-xl group-hover:text-[#f5b412] group-active:text-[#f5b412] transition-colors duration-300">01116610361</span>
            </a>
          </FadeIn>
        </div>
      </div>

      <div className="w-full border-t border-[rgba(215,226,234,0.1)] pt-8 mt-10 text-center">
        <p className="text-[#D7E2EA] opacity-40 text-sm tracking-wide uppercase">
          &copy; 2025 KarimoDesign. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
