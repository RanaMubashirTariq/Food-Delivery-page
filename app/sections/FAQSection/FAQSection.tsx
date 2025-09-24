import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function FAQSection  () {
  const faqItems = [
    {
      id:'01',
      question: "Are the requests really unlimited?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id:'02',
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id:'03',
      question: "How to get discount",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id:'04',
      question: "What's a maximum limit of purchase?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] pt-[100px] pb-20 max-[1000px]:pb-15 max-[767px]:pb-10 max-[1000px]:pt-[60px] max-[767px]:pt-10 ">

<img  className="absolute top-[60px] left-[-137px] w-[393px] h-[366px] object-contain max-[1000px]:w-[200px] max-[1000px]:h-[220px] max-[1000px]:left-[-40px] max-[1000px]:top-[150px]"  alt="Background pattern"  src="/img-3.png" />

      <img  className="absolute top-[60px] right-[-100px] w-[380px] h-[277px] object-contain rotate-[270deg] max-[1000px]:w-[200px] max-[1000px]:h-[220px] max-[1000px]:right-[-40px]"  alt="Background pattern"  src="/img-1.png" />
     
      <img className="absolute bottom-[-70px] left-[-100px] w-[318px] h-[277px] object-contain max-[1000px]:w-[200px] max-[1000px]:h-[220px] max-[1000px]:left-[-40px]"  alt="Background pattern"  src="/img-6.png" />

      <img  className="absolute bottom-[-60px] right-[-100px] w-[393px] h-[366px] max-[1000px]:w-[200px] max-[1000px]:h-[220px] max-[1000px]:right-[-40px] object-contain "  alt="Background pattern"  src="/img-7.png" />
     
     
     
      <div className=" mx-auto  max-w-[1440px] relative z-10">
        <h2 className="mb-[114px] max-[1000px]:mb-[70px] max-[767px]:mb-[40px] font-poppins font-bold text-[#bc430d] text-center  text-[48px] max-[767px]:text-[36px] leading-[1.2] mb-10 max-[767px]:px-[25px]">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-6 w-full max-w-[932px] mx-auto max-[1100px]:px-[50px] max-[767px]:px-[25px]">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="rounded-[20px] relative bg-white border border-[#bc430d]"
            >
              <AccordionTrigger className="pl-[54px] max-[1000px]:pl-[34px] max-[500px]:pl-[24px] pr-[26px] max-[500px]:pr-[15px] py-10 max-[767px]:py-5  hover:no-underline flex items-center justify-between [&>svg]:hidden group ">
              <span className=" absolute left-[-26px] max-[767px]:left-[-16px] max-[500px]:left-[-12px] z-20 w-12 h-12 max-[767px]:w-8 max-[767px]:h-8 max-[500px]:w-6 max-[500px]:h-6  rounded-full bg-[#bc430d] text-white flex items-center justify-center font-bold text-xl  max-[767px]:text-base max-[500px]:text-[12px] leading-[25px]">
                    { item.id}
                  </span>
                <span className="flex items-center  text-[#e4582f] font-montserrat font-bold text-[36px] max-[1000px]:text-[28px] max-[1000px]:leading-[36px]  max-[767px]:text-[22px] max-[767px]:leading-[28px] max-[500px]:text-[18px] max-[500px]:leading-[24px] leading-[45px] tracking-0 mr-[10px]">
                  {item.question}
                </span>
                <img
                  className="w-10 h-10 max-[767px]:w-8 max-[767px]:h-8  transition-transform duration-300  group-data-[state=open]:rotate-[90deg]"
                  alt="Arrow icon"
                  src="/arrow-down.png"
                />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 md:px-8 md:pb-6 text-[#bc430d] font-montserrat font-medium text-xl max-[767px]:text-lg max-[500px]:text-[16px]  leading-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
 