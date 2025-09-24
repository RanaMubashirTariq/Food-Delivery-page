'use client'
import React from "react";
import {motion} from 'framer-motion'

export default function DownloadAppSection  () {
  return (
    <section className="w-full  py-[99px] max-[1000px]:py-[60px] max-[767px]:py-10 px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px] relative">

<img  className="absolute top-[-200px] max-[1000px]:top-[-100px] right-[-126px] rotate-[40deg] w-[393px] h-[366px] max-[1000px]:w-[200px] max-[1000px]:h-[220px] max-[500px]:w-[130px] max-[500px]:w-[150px] max-[1000px]:right-[-40px] object-contain "  alt="Background pattern"  src="/img-7.png" />

<img className="absolute bottom-[-100px] left-[-100px] w-[318px] h-[277px] object-contain max-[1000px]:w-[200px] max-[1000px]:h-[220px] max-[500px]:w-[130px] max-[500px]:h-[150px]  max-[500px]:left-[-25px] max-[1000px]:left-[-50px]"  alt="Background pattern"  src="/img-6.png" />


      <div className="max-w-[1440px] h-[383px] max-[1020px]:h-[850px] max-[767px]:h-[750px] max-[500px]:h-[650px] flex flex-col lg:flex-row items-center justify-between bg-[#bc430d]/57 rounded-[30px] p-8 max-[500px]:p-5">
        <div className="w-full max-w-[583px] max-[1100px]:max-w-[450px] max-[1020px]:max-w-[100%] text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="font-poppins font-bold text-white text-[48px] max-[767px]:text-[36px] max-[767px]:leading-[38px] leading-[46px] mb-6">
            Download the food you love
          </h2>
          <p className="w-[344px] max-[1020px]:w-[100%] font-poppins font-regular text-white text-base max-[767px]:text-sm leading-[24px]  mb-8">
          Lorem ipsum dolor sit amet consectetur mi urna tellus dignissim duis at in tempor.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="h-12 object-contain"
                alt="App Store badge"
                src="/app-store.png"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="h-12 object-contain"
                alt="Google Play badge"
                src="/google-play.png"
              />
            </a>
          </div>
        </div>
        <div className="relative w-1/2 max-[1020px]:w-[70%] max-[767px]:w-[100%]">

          <motion.div
             whileHover={{scale: 0.9}}
             whileTap={{scale: 0.8}}
          >
          <img
            className="absolute w-[160px] h-[160px] max-[500px]:h-[100px] max-[500px]:w-[100px] top-[-50px] max-[1020px]:top-[-300px] max-[767px]:top-[-250px] max-[500px]:top-[-180px] max-[500px]:left-[50px] max-[420px]:left-[30px] max-[400px]:left-[20px] max-[365px]:left-[0px] max-[767px]:left-[50px] max-[1020px]:left-[150px] max-[900px]:left-[80px] left-[200px] max-[1300px]:left-[80px] object-contain z-10"
            alt="QR code"
            src="/qr-code.png"
          />
          </motion.div>
          <motion.div
             whileHover={{scale: 0.9}}
             whileTap={{scale: 0.8}}
          >
          <img
            className="absolute w-[437px] h-[520px] max-[767px]:w-[100%] max-[500px]:h-[300px] top-[-280px] max-[1020px]:top-[-500px] max-[767px]:top-[-450px] max-[500px]:top-[-300px] max-[500px]:right-[-50px] right-[-50px] max-[1300px]:right-[-100px] object-cover "
            alt="Delivery scooter"
            src="/delivery-scooter.png"
          />
            </motion.div> 
        </div>
      </div>
    </section>
  );
}; 