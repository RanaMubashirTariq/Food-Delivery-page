'use client'
import React , {useState, useEffect} from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { motion } from "framer-motion";

export default function HeroBannerSection  () {

  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };

  return (
    <section className="relative w-full h-[1000px] max-[1300px]:h-[900px] max-[1100px]:h-[750px] max-[1020px]:h-[1150px] max-[767px]:h-[800px] max-[500px]:h-[800px]  bg-[#fdfdfd]/90 overflow-hidden">
      {/* Background elements */}
      <motion.img
        className="absolute w-[683px] h-[668px] top-[145px] max-[1020px]:top-[550px] max-[767px]:top-[400px] right-0 object-center max-[1400px]:w-[550px] max-[1400px]:h-[550px] max-[1100px]:w-[400px] max-[1100px]:h-[450px] max-[767px]:h-[300px] max-[1020px]:w-[80%]"
        alt="Ribs and fire"
        src="/ribs-and-fire.png"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        className="absolute w-[334px] h-[344px] top-[573px] right-[512px] object-cover max-[1400px]:w-[250px] max-[1400px]:h-[270px] max-[767px]:w-[150px] max-[767px]:h-[170px] max-[767px]:top-[600px] max-[767px]:left-[30px] max-[1400px]:right-[412px] max-[1100px]:right-[270px] max-[1100px]:top-[450px] max-[1020px]:top-[850px] max-[1020px]:left-[50px]"
        alt="Pizza"
        src="/pizza.png"
        variants={floatVariants}
        animate="animate"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      />
      <img
        className="absolute w-full h-[128] max-[1000px]:h-[80px] top-0  object-center z-0"
        alt="Background texture"
        src="/bg-texture.png"
      />

      <div className="w-full  relative z-10">
        {/* Header Section */}
        <motion.header 
          className="flex  items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img 
            src="logo.png" 
            className="w-[201px] h-[108px] max-[1000px]:w-[150px] max-[1000px]:h-[70px] max-[1000px]:mb-0  ml-[48.06px] max-[767px]:ml-[0px] mb-[10px] hover-scale" 
            alt=""
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

             <motion.div 
               className=" max-[1000px]:hidden w-full max-w-[648px] max-[1100px]:max-w-[500px] flex items-center justify-between mr-[80px] max-[1100px]:mr-[50px] max-[767px]:mr-[25px] mb-[40px]"
               variants={itemVariants}
             >
             <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex space-x-4 lg:space-x-10 text-base font-poppins font-medium text-white lg:text-[18px] font-normal ">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="text-white transition-colors duration-300 ">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="text-white transition-colors duration-300 ">Menu</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="text-white transition-colors duration-300 ">Shop</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

                  <motion.div 
                    className="w-[224px] h-10 px-[19px] flex items-center justify-between border border-[1px] rounded-[30px] border-white hover-lift"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                       <div className="flex items-center gap-[12px]">
                             <motion.img 
                               src="search-icon.png" 
                               className="w-5 h-5" 
                               alt=""
                               whileHover={{ rotate: 15 }}
                             />
                             <input 
                               type="Search" 
                               placeholder="Search" 
                               className="w-full h-full bg-transparent outline-none border-none text-white placeholder:text-white font-poppins font-medium text-xl leading-[100%] tracking-0 [&>svg]:hidden group" 
                             />
                       </div>
                       <motion.div 
                         className="relative"
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                       >
                         <img src="/shoping-icon.png" className="w-[36px] h-8" alt="" />
                         <motion.span 
                           className="absolute -top-2 -right-2 bg-[#bc430d] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 2, repeat: Infinity }}
                         >
                           3
                         </motion.span>
                       </motion.div>
                  </motion.div>
             </motion.div>


             <motion.button
            className="hidden max-[1000px]:block text-white mr-[50px] max-[767px]:mr-[25px] mb-[20px] hover-lift"
            onClick={() => setIsOpen(!isOpen)}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </motion.div>
          </motion.button>
        </motion.header>

        


        {/* Mobile Toggle (<1000px only) */}

        {/* Mobile Nav (only below 1000px) */}
        {isOpen && (
          <motion.div 
            className="hidden max-[1000px]:block hidden bg-[#bc430d] text-white px-6 py-4 space-y-4 absolute top-[80px] right-[30px] w-[250px] rounded-xl z-50"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#" 
              className="block font-poppins text-lg"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#" 
              className="block font-poppins text-lg "
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Menu
            </motion.a>
            <motion.a 
              href="#" 
              className="block font-poppins text-lg"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Shop
            </motion.a>
            <motion.div 
              className="flex items-center justify-between mt-4 border border-white rounded-full px-4 py-2 hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent outline-none border-none text-white placeholder:text-white font-poppins w-full"
              />
              <motion.img 
                src="/shoping-icon.png" 
                className="w-[28px] h-[28px]" 
                alt=""
                whileHover={{ rotate: 15 }}
              />
            </motion.div>
          </motion.div>
        )}




          {/* Hero Content */}

        <motion.div 
          className="mt-10  absolute top-[215px] left-[81px] max-[1100px]:left-[50px] max-[767px]:left-[25px] w-full  max-w-[514px] max-[1020px]:max-w-[714px] max-[767px]:max-w-[470px] max-[500px]:max-w-[400px] max-[420px]:max-w-[380px] max-[380px]:max-w-[320px] max-[350px]:max-w-[280px] max-[1020px]:top-[100px]   text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex" variants={itemVariants}>
             <motion.h1 
               className="font-mochiy-pop-one font-regular text-[128px] max-[1300px]:text-[110px] max-[1100px]:text-[90px] max-[767px]:text-[60px] max-[500px]:text-[48px] leading-[100%] tracking-[-8%] text-[#bc430d]"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 3, repeat: Infinity }}
             >
                   FAST
             </motion.h1>
              
               <motion.div 
                 className="w-[280px] max-[1300px]:w-[260px] max-[500px]:w-[100px] max-[767px]:w-[150px] flex flex-col items-start font-poppins font-bold text-[#000000]/70  text-5xl leading-[57px] max-[1300px]:text-[48px] max-[1300px]:leading-[47px] max-[1100px]:text-[40px] max-[1300px]:leading-[37px] max-[767px]:text-[28px] max-[767px]:leading-[24px] max-[500px]:text-[22px] max-[500px]:mt-3 max-[1100px]:mt-[20px]   mt-[30px]"
                 variants={itemVariants}
               >
                  Food
                  Delivery
               </motion.div>
          </motion.div>
          <motion.p 
            className="font-poppins font-medium text-[#bc430d] text-lg max-[1000px]:text-base  max-[767px]:text-sm max-[767px]:leading-5 leading-7 mt-5"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
          Lorem ipsum dolor sit amet consectetur mi urna tellus dignissim duis at in tempor mauris morbi fermentum dolor lobortis aliquam maecenas.
          </motion.p>
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button className="cursor-pointer bg-[linear-gradient(86.04deg,#BC430D_5.15%,#D97000_98.1%)] text-white font-bold font-poppins text-lg leading-[27px] max-[767px]:text-sm max-[767px]:leading-5 rounded-full h-[51px] max-[767px]:h-10  mt-[62px] max-[767px]:mt-[30px] hover-lift">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
              </motion.span>
            </Button>
          </motion.div>
          <motion.img 
            src="/group.png" 
            className="w-[133px] h-[158px] object-cover absolute top-[231px] left-[170px] max-[1100px]:top-[200px] max-[1000px]:top-[170px] max-[767px]:top-[120px]  max-[767px]:h-[120px] max-[767px]:w-[100px] max-[767px]:left-[130px] max-[500px]:h-[100px] max-[500px]:w-[80px] max-[380px]:h-[120px] max-[380px]:w-[110px] max-[350px]:top-[150px] max-[350px]:h-[100px] max-[350px]:w-[100px]" 
            alt=""
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
