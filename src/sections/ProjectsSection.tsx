import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/ui/LiveProjectButton';
import { FadeIn } from '../components/ui/FadeIn';

const projectsData = [
  {
    num: '01',
    category: 'Web Application',
    name: 'Al Raya Lighting',
    link: 'https://alrayalighting.com',
    imgLeftTop: '/images/Screenshot (470).webp',
    imgLeftBot: '/images/Screenshot (471).webp',
    imgRight: '/images/Screenshot (475).webp'
  },
  {
    num: '02',
    category: 'AI Tool',
    name: 'ArtiFix',
    link: 'https://artifix.tech',
    imgLeftTop: '/images/Screenshot (673).webp',
    imgLeftBot: '/images/Screenshot (674).webp',
    imgRight: '/images/Screenshot (681).webp'
  },
  {
    num: '03',
    category: 'Landing Page',
    name: 'Nature Fund',
    link: 'https://friendly-starship-bbf7a4.netlify.app/',
    imgLeftTop: '/images/Screenshot (715).webp',
    imgLeftBot: '/images/Screenshot (716).webp',
    imgRight: '/images/Screenshot (714).webp'
  },
  {
    num: '04',
    category: 'E-Commerce',
    name: 'El-Manasterly Tires',
    link: 'https://el-manasterlytires.netlify.app/',
    imgLeftTop: '/images/Screenshot (478).webp',
    imgLeftBot: '/images/Screenshot (479).webp',
    imgRight: '/images/Screenshot (476).webp'
  },
  {
    num: '05',
    category: 'Digital Agency',
    name: 'Pixel Turtles',
    link: 'https://enchanting-kheer-7dc93c.netlify.app/',
    imgLeftTop: '/images/Screenshot (483).webp',
    imgLeftBot: '/images/Screenshot (484).webp',
    imgRight: '/images/Screenshot (482).webp'
  },
  {
    num: '06',
    category: 'Travel & Tourism',
    name: 'Luxury Travel',
    link: 'https://jovial-marshmallow-10a189.netlify.app',
    imgLeftTop: '/images/Screenshot (684).webp',
    imgLeftBot: '/images/Screenshot (685).webp',
    imgRight: '/images/Screenshot (682).webp'
  }
];

const ProjectCard = ({ project, index, scrollYProgress, totalCards }: any) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  
  // The card scales down slowly as we scroll past it. We map the scroll progress from its point to the end.
  const scale = useTransform(scrollYProgress, [index * (1 / totalCards), 1], [1, targetScale]);

  return (
    <div className="h-[75vh] sm:h-[80vh] lg:h-[90vh] flex items-start sm:items-center justify-center sticky top-0 w-full pt-20 sm:pt-0">
      <motion.div 
        style={{ 
          scale,
          top: `calc(${index * 12}px)` 
        }}
        className="w-full max-w-7xl mx-auto rounded-[30px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 relative origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,8vw,100px)] leading-none">{project.num}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-[10px] sm:text-sm">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,3vw,2.5rem)]">{project.name}</h3>
            </div>
          </div>
          <div className="hidden sm:block">
            <LiveProjectButton link={project.link} />
          </div>
        </div>

        {/* Bottom Row - Images */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 h-full">
          <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 w-full sm:w-[40%]">
            <img src={project.imgLeftTop} alt="Project detail 1" className="w-1/2 sm:w-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[60px] h-[120px] sm:h-[clamp(130px,16vw,230px)]" loading="lazy" />
            <img src={project.imgLeftBot} alt="Project detail 2" className="w-1/2 sm:w-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[60px] h-[120px] sm:h-[clamp(160px,22vw,340px)]" loading="lazy" />
          </div>
          <div className="w-full sm:w-[60%]">
            <img src={project.imgRight} alt="Project main" className="w-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[60px] h-[200px] sm:h-full sm:min-h-[300px]" loading="lazy" />
          </div>
        </div>

        <div className="block sm:hidden w-full mt-1">
          <LiveProjectButton link={project.link} />
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={30}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative pb-[10vh]">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.num} 
            project={project} 
            index={index} 
            scrollYProgress={scrollYProgress} 
            totalCards={projectsData.length} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
