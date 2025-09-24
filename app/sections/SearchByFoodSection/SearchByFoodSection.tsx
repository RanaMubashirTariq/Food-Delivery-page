'use client'
import React , {useRef, useState} from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../lib/useScrollAnimation";

interface FoodCategoryCardProps {
  imageSrc: string;
  name: string;
  index: number;
}

const FoodCategoryCard: React.FC<FoodCategoryCardProps> = ({
  imageSrc,
  name,
  index,
}) => (
  <motion.div 
    className="cursor-pointer flex flex-col items-center space-y-2 flex-shrink-0 w-[218px] max-[767px]:w-[150px] "
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{ 
      scale: 0.9,
      transition: { duration: 0.3 }
    }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <motion.div 
      className="w-full h-[270px] max-[767px]:h-[180px] rounded-full overflow-hidden border-4 border-white flex-shrink-0 relative"
    >
      <motion.img
        className="w-full h-[218px] max-[767px]:h-[150px] rounded-full object-center"
        src={imageSrc}
        alt={name}
      />
    </motion.div>
    <motion.p 
      className="font-poppins font-bold text-[#bc430d] text-[22px] max-[767px]:text-[16px] leading-[120%] text-center"
      whileHover={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {name}
    </motion.p>
  </motion.div>
);

export default function SearchByFoodSection  () {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getStep = () => {
    const container = containerRef.current;
    if (!container) return 0;
    const firstChild = container.querySelector(':scope > div') as HTMLElement | null;
    if (!firstChild) return container.clientWidth;
    const childWidth = firstChild.getBoundingClientRect().width;
    const styles = getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || '0');
    return childWidth + (isNaN(gap) ? 0 : gap);
  };

  const nextCard = () => {
    const step = getStep();
    containerRef.current?.scrollBy({ left: step, behavior: 'smooth' });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodCategories.length);
  };

  const prevCard = () => {
    const step = getStep();
    containerRef.current?.scrollBy({ left: -step, behavior: 'smooth' });
    setCurrentIndex((prevIndex) => (prevIndex - 1 + foodCategories.length) % foodCategories.length);
  };










  const foodCategories = [
    { imageSrc: "/pizza-category.png", name: "Pizza" },
    { imageSrc: "/burger-category.png", name: "Burger" },
    { imageSrc: "/noodles-category.png", name: "Noodles" },
    { imageSrc: "/sandwich-category.png", name: "Sub Sandwich" },
    { imageSrc: "/chowmein-category.png", name: "Chowmein" },
    { imageSrc: "/meat-category.png", name: "Meat" },
  ];
           

  return (
    <section ref={ref} className="w-full bg-[#fdfdfd] py-10 md:py-20">
      <div className=" mx-auto max-w-[1440px]">
        <motion.div 
          className="flex items-center justify-between mb-10 md:mb-16 px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[767px]:flex-col max-[767px]:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-poppins font-bold text-[#bc430d]  text-[48px] max-[767px]:text-[36px] max-[767px]:leading-[80px] leading-[112.000px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Search by Food
          </motion.h2>
          <motion.div 
            className="flex items-center space-x-4 relative z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="flex gap-[10px] font-poppins text-[#bc430d] text-base font-bold text-lg leading-[100%] whitespace-nowrap "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All
              <motion.img 
                src="/arrow-left.png" 
                className="w-[10px] h-[16px]" 
                alt=""
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            <div className="flex space-x-2">
              <motion.button 
                onClick={prevCard} 
                className="flex items-center justify-center w-[50px] h-[50px] max-[767px]:w-10 max-[767px]:h-10 rounded-full bg-[#bc430d] "
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.img
                  className="w-full h-full"
                  alt="Left arrow"
                  src="/arrow-left-2.png"
                  
                />
              </motion.button>
              <motion.button 
                onClick={nextCard} 
                className="flex items-center justify-center w-[50px] h-[50px] max-[767px]:w-10 max-[767px]:h-10 "
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.img
                  className="w-full h-full rotate-[180deg]"
                  alt="Right arrow"
                  src="/arrow-left-2.png"
                  
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          ref={containerRef} 
          className="flex gap-[34.2px] overflow-x-auto pb-4 scrollbar-hide pl-20 max-[1100px]:pl-[50px] max-[767px]:pl-[25px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {foodCategories.map((category, index) => (
            <FoodCategoryCard
              key={category.name}
              imageSrc={category.imageSrc}
              name={category.name}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 