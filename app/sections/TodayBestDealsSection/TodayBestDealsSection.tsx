'use client'
import React from "react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

interface DealCardProps {
  imageSrc: string;
  index: number;
}

const DealCard: React.FC<DealCardProps> = ({ imageSrc, index }) => (
  <motion.div 
    className="relative flex-shrink-0 w-[284px] h-[360px] max-[1100px]:w-[220px] max-[1100px]:h-[300px] max-[767px]:w-[140px] max-[767px]:h-[200px] max-[767px]:rounded-[20px] rounded-[40px] max-[1100px]:rounded-[30px] overflow-hidden group "
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{ 
      scale: 0.9,
      rotateY: 5,
      transition: { duration: 0.3 }
    }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.img
      className="absolute inset-0 w-full h-full object-cover"
      alt="Food item"
      src={imageSrc}
      whileHover={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />
    <motion.div
      className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      
    </motion.div>
  </motion.div>
);

export default function TodayBestDealsSection  () {
  const { ref, isVisible } = useScrollAnimation();
  
  const dealCards = [
    { imageSrc: "/deal-1.jpg",  },
    { imageSrc: "/deal-2.png",  },
    { imageSrc: "/deal-3.png",  },
    { imageSrc: "/deal-4.png", },
    { imageSrc: "/deal-5.jpg", },
  ];

  return (
    <section ref={ref} className="relative w-full bg-[#fdfdfd]/90 py-10 md:py-20 sm:py-20">
      <motion.img
        className="absolute top-0 left-0 w-full h-full object-center inset-0 z-0"
        alt="Background pattern"
        src="/best-deal-img.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      
      <motion.img  
        className="absolute top-[44px] left-[100px] w-[220px] h-[144px]  max-[600px]:w-[150px] max-[600px]:h-[100px]   max-[1100px]:left-[40px] max-[600px]:left-[20px] object-contain animate-float"  
        alt="Background pattern"  
        src="/img-9.png"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <motion.img  
        className="absolute top-[44px] right-[100px] w-[220px] h-[144px]  max-[600px]:w-[100px] max-[600px]:h-[100px]  max-[1100px]:right-[40px] max-[600px]:right-[20px] object-contain animate-float"  
        alt="Background pattern"  
        src="/img-10.png"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <motion.img  
        className="absolute bottom-[44px] left-[100px] w-[170px] h-[144px] max-[600px]:w-[100px] max-[600px]:h-[100px]  max-[1100px]:left-[40px] max-[600px]:left-[20px] object-contain animate-float"  
        alt="Background pattern"  
        src="/img-11.png"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      <motion.img  
        className="absolute bottom-[0px] right-[100px] w-[185px] h-[164px]  max-[600px]:w-[100px] max-[600px]:h-[100px]   max-[1100px]:right-[40px] max-[600px]:right-[20px] object-contain animate-float"  
        alt="Background pattern"  
        src="/img-8.png"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      
      <div className=" mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
        <motion.h2 
          className="font-poppins font-bold text-white text-center max-[767px]:text-[36px] max-[1100px]:text-[48px] text-[64px] leading-[1.2] mb-10 md:mb-16 sm:mb-15"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          See Today&apos;s Best Deals
        </motion.h2>

        <motion.div 
          className="flex items-center  overflow-x-scroll scrollbar-hide  gap-[60px] max-[1100px]:gap-10 max-[767px]:gap-5 mb-10 md:mb-16 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {dealCards.map((deal, index) => (
            <DealCard key={index} imageSrc={deal.imageSrc} index={index}/>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className=" text-white font-bold    w-[116px] h-[52px] px-8 text-xl max-[1100px]:text-lg max-[767px]:text-sm max-[767px]:h-10 max-[767px]:leading-5 leading-[27px] font-poppins font-bold shadow-md border border-[1px] border-white rounded-full hover-lift">
              See All
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 