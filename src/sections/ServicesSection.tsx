import React from 'react';
import { FadeIn } from '../components/ui/FadeIn';

const servicesData = [
  {
    num: '01',
    name: 'Web Development',
    desc: 'Building fast, responsive, and robust websites tailored to your unique business needs. We ensure high performance and seamless functionality.',
  },
  {
    num: '02',
    name: 'UX/UI Design',
    desc: 'Designing intuitive, user-centric interfaces that offer seamless digital experiences. We focus on usability and aesthetics to engage your audience.',
  },
  {
    num: '03',
    name: 'Graphic Design',
    desc: 'Creating visually compelling graphics and branding materials that capture your identity. We deliver striking designs that leave a lasting impression.',
  },
  {
    num: '04',
    name: 'Digital Marketing',
    desc: 'Developing strategic marketing campaigns to boost your online presence and reach. We leverage data-driven insights to maximize your brand visibility.',
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn y={30}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {servicesData.map((service, index) => (
          <FadeIn 
            key={service.num} 
            delay={index * 0.1} 
            y={20}
            className="flex flex-col sm:flex-row items-start sm:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-0"
          >
            <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none w-full sm:w-1/3 mb-4 sm:mb-0">
              {service.num}
            </div>
            <div className="flex flex-col w-full sm:w-2/3">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2">
                {service.name}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
