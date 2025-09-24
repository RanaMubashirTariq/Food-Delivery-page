import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function EnjoyDiscountsSection  () {
  return (
    <section className="relative w-full h-[665px] max-[1000px]:h-[900px] max-[767px]:h-[650px] bg-[#bc430d]/80 py-10  overflow-hidden">
      <img
        className="absolute z-0 bottom-[-78px] left-[-24px] w-[308px] h-[327px] max-[800px]:w-[200px] max-[800px]:h-[220px] max-[800px]:bottom-[-60px] object-cover "
        alt="Background pattern"
        src="/img-5.png"
      />
      <img
        className="absolute  bottom-[0px] left-[264px] w-[378px] h-[356px] max-[800px]:w-[200px] max-[800px]:w-[220px] max-[800px]:left-[320px] max-[500px]:left-[170px] max-[500px]:bottom-0 max-[800px]:bottom-[-100px] object-contain "
        alt="Background pattern"
        src="/img-1.png"
      />
        <div className="w-full flex flex-col  text-center text-left mb-10 pl-[80px] max-[1100px]:pl-[50px] max-[767px]:px-[25px] pt-[94px] max-[1000px]:pt-[20px] gap-[42px] max-[1100px]:gap-[30px] max-[767px]:gap-[20px] relative z-20">
          <h2 className=" font-poppins font-bold max-[1100px]:w-[450px] max-[1000px]:w-[100%] text-white text-[48px] max-[767px]:text-[36px] leading-[100%] mb-6 ">
            Enjoy discounts on your first order
          </h2>
          <div className="flex  flex-row items-center  p-4  bg-[#bc430d]/50 w-[522px] max-[1100px]:w-[450px] max-[767px]:w-[100%] h-[82px] max-[767px]:h-[60px] max-[767px]:rounded-[30px] rounded-[40px] border border-[1px] border-white">
            <Input
              type="text"
              placeholder="Enter your coupon"
              className="flex-1  focus:ring-0 focus:outline-none  w-full bg-transparent border-none  shadow-none placeholder:text-[#cdcaca] text-[#cdcaca] text-xl max-[1000px]:text-lg leading-[27px] max-[767px]:text-sm max-[767px]:leading-5"
            />
            <Button className="bg-transparent border-none outline-none  rounded-full  h-[52px] max-[767px]:h-10 max-[767px]:w-[120px] px-8    flex items-center justify-center  ">
              <img className="w-5 h-5 max-[767px]:w-4 max-[767px]:h-4 inline-flex mr-2 mb-[5px]" alt="Location icon" src="/location-icon.png" />
              <span className="text-[20px] max-[767px]:text-sm leading-[100%] text-poppins font-medium text-white ">Locate me</span>
            </Button>
          </div>
        </div>

      <div className="absolute top-[0px] max-[1000px]:top-[200px] right-[106px]  max-[1300px]:right-[50px] max-[767px]:right-[35px] w-full  flex  justify-end " >
          <img
            className="w-[565px] h-[651px] object-contain  max-[1300px]:w-[500px] max-[1000px]:w-[90%] max-[767px]:h-[400px] max-[1000px]:rotate-[50deg]"
            alt="Food bowl"
            src="/pic.png"
          />
        </div>
    </section>
  );
}; 