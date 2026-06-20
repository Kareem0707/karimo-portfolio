import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { FadeIn } from '../components/ui/FadeIn';

const Counter = ({ from, to, duration, decimals = 0, suffix = "" }: { from: number, to: number, duration: number, decimals?: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, suffix, inView]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-28 md:py-36 relative overflow-hidden z-20">
      
      {/* Stock Market Upward Arrow Background */}
      <svg
        className="absolute w-full h-full inset-0 pointer-events-none opacity-[0.12] sm:opacity-20 z-0"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5b412" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#f5b412" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f5b412" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 380 L 150 280 L 300 320 L 500 180 L 650 220 L 850 60 L 1050 90 L 1150 -50"
          fill="none"
          stroke="url(#glowLine)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        {/* Animated Arrow Head */}
        <motion.path
          d="M 1030 95 L 1150 -50 L 1090 -70"
          fill="none"
          stroke="#f5b412"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 2.3, ease: "easeOut" }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        <FadeIn delay={0.1} y={30} className="flex flex-col items-center justify-center text-center flex-1">
          <div className="text-[#f5b412] font-black text-[clamp(4rem,10vw,120px)] leading-none tracking-tighter mb-2" style={{ textShadow: '0 0 30px rgba(245,180,18,0.3)' }}>
            <Counter from={0} to={11} duration={2} suffix="+" />
          </div>
          <span className="text-[#D7E2EA] uppercase tracking-widest text-sm sm:text-base md:text-lg font-medium opacity-80">
            Clients
          </span>
        </FadeIn>

        <FadeIn delay={0.3} y={30} className="flex flex-col items-center justify-center text-center flex-1">
          <div className="text-[#f5b412] font-black text-[clamp(4rem,10vw,120px)] leading-none tracking-tighter mb-2" style={{ textShadow: '0 0 30px rgba(245,180,18,0.3)' }}>
            <Counter from={0} to={27} duration={2} suffix="+" />
          </div>
          <span className="text-[#D7E2EA] uppercase tracking-widest text-sm sm:text-base md:text-lg font-medium opacity-80">
            Projects Delivered
          </span>
        </FadeIn>

        <FadeIn delay={0.5} y={30} className="flex flex-col items-center justify-center text-center flex-1">
          <div className="text-[#f5b412] font-black text-[clamp(4rem,10vw,120px)] leading-none tracking-tighter mb-2" style={{ textShadow: '0 0 30px rgba(245,180,18,0.3)' }}>
            <Counter from={0} to={96.3} duration={2.5} decimals={1} suffix="%" />
          </div>
          <span className="text-[#D7E2EA] uppercase tracking-widest text-sm sm:text-base md:text-lg font-medium opacity-80">
            Satisfaction Rate
          </span>
        </FadeIn>

      </div>
    </section>
  );
};

export default StatsSection;
