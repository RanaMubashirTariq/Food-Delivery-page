import React from "react";

export default function SiteFooterSection  () {
  return (
    <footer className="w-full py-10  relative bg-[#fdfdfd]">
      <img src="/footer-img.png" className="w-full h-full absolute inset-0 z-0 object-cover " alt="" />
      <div className="w-full max-w-[1440px] text-white relative z-20">
        <img src='/logo.png' className="w-[201px] h-[108px] max-[767px]:w-[150px] max-[767px]:h-[70px] max-[767px]:top-[-20px] max-[400px]:top-[10] absolute top-[-40px] left-[51px] max-[1100px]:left-[25px] max-[767px]:left-0"/>
        <div className="pt-[100px] max-[767px]:pt-[60px] max-[400px]:pt-[80px] flex items-start justify-between max-[800px]:flex-wrap gap-10 pl-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-w-[1123px]">
          {/* Logo and Description */}
          <div className="w-[306px] flex flex-col items-start gap-6 max-[767px]:gap-4">
              <h3 className="font-poppins font-bold text-white text-[20px] max-[767px]:text-lg tracking-[0] leading-[13px] whitespace-nowrap">
                Cravio
              </h3>
            <p className="font-poppins font-bold text-base max-[767px]:text-sm max-[767px]:leading-6 leading-[30px]">
            At Cravio, savor the finest flavors crafted with care from fresh, quality ingredients!
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full max-w-[574px] max-[1100px]:max-w-[400px] max-[800px]:max-w-[100%] flex items-center justify-between max-[400px]:gap-10 max-[400px]:flex-wrap">
          <div className="w-[145px]">
            <h3 className="font-poppins font-bold text-xl max-[767px]:text-lg leading-[100%] tracking-0 mb-[15px]">Quick Links</h3>
            <ul className="space-y-3 mb-8 max-[767px]:mb-2">
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Browse Cravio
                </a>
              </li>
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Browse Cravio
                </a>
              </li>
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Registrations
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-poppins font-bold text-xl max-[767px]:text-lg leading-[100%] tracking-0 mb-[15px]">About</h3>
            <ul className="space-y-3 mb-8 max-[767px]:mb-2">
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Missions
                </a>
              </li>
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social and Download */}
          <div className="flex flex-col items-start">
            <h3 className="font-poppins font-bold text-xl max-[767px]:text-lg leading-[100%] tracking-0 mb-[15px]">Social</h3>
            <ul className="space-y-3 mb-8 max-[767px]:mb-2">
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="font-poppins font-bold text-base max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="font-poppins font-bold text-base  max-[767px]:text-sm leading-[100%] tracking-0 text-[#dedede] hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between gap-5 max-[820px]:flex-wrap w-full max-w-[1282px]  mt-[103px] max-[1000px]:mt-[60px] max-[767px]:mt-10 px-[80px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
          <p className="font-poppins font-regular text-lg max-[767px]:text-sm max-[767px]:leading-5 leading-[27px] tracking-0 text-white">
            Copyright © ABC.
          </p>
          <p className="font-poppins font-regular text-[15px] max-[767px]:text-[12px] leading-[17px] tracking-0 text-white">
          © 2025  All rights reserved
          </p>
          <div className="flex space-x-4 max-[820px]:mx-auto">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img className="h-10 object-contain" alt="Google Play" src="/google-play.png" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img className="h-10 object-contain" alt="App Store" src="/app-store.png" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
