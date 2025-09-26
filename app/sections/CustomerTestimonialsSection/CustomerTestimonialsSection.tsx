import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  text: string;
  avatarSrc: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  avatarSrc,
  rating,
  className,
}) => (
  <div className={`bg-[#bc430d]/10 rounded-[32px] shadow-md px-[19px] pt-[34px] pb-[43px]  flex-shrink-0 w-[290px] max-[1000px]:w-[260px] sm:w-[320px]  border border-[#bc430d]/50 group ${className ?? ''}`}>
    <div className="flex flex-col items-center text-center gap-[33px]">
        <div className="w-full flex items-center gap-[29px] ">
        <Avatar className="w-[64px] h-[64px] max-[1000px]:w-12 max-[1000px]:h-12">
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback className="bg-[#e4582f]">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
           <div className="flex flex-col items-start justify-center">
           <p className="font-montserrat font-bold text-[#bc430d] text-lg max-[1000px]:text-16 max-[1000px]:leading-[23px] leading-[27px] mb-2 max-[1000px]:mb-[3px]">
        {name}
      </p>
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            className="w-5 h-5 max-[1000px]:w-4 max-[1000px]:h-4"
            alt="Star"
            src={i < rating ? "/star-full.png" : "/star-empty.png"}
          />
        ))}
      </div>
           </div>
        </div>
      <p className="w-[252px] max-[1000px]:w-[100%] text-left font-montserrat font-medium text-[#bc430d] text-lg max-[1000px]:text-base max-[1000px]:leading-[23px] leading-[27px]">
        {text}
      </p>
    </div>
  </div>
);

export default function CustomerTestimonialsSection  () {
  const testimonials = [
    {
      id: 1,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur mi urna tellus dignissim duis at in tempor.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Matt Cannon",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Kara Cansan",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Matt Cannon",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 5,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 6,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 7,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 8,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 9,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 10,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 11,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 12,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
    {
      id: 13,
      name: "Huri Carson",
      text: "Lorem ipsum dolor sit amet consectetur. Erat netus box aliquam ut sed in tempus.",
      avatarSrc: "/avatar-1.png",
      rating: 4,
    },
  ];

  return (
    <section className="w-full h-auto bg-[#fdfdfd] pt-[100px] max-[1000px]:pt-[60px] max-[767px]:pt-[40px] ">
      <div className=" max-w-[1440px]">
        <h2 className="font-poppins font-bold text-[#bc430d] text-center text-[48px] max-[767px]:text-[36px] max-[767px]:leading-[38px] leading-[27px] mb-[90px] max-[1000px]:mb-[60px] max-[767px]:mb-10 max-[767px]:px-[25px]">
          Customer Feedback
        </h2>

        <div className="flex items-start space-x-6   scrollbar-hide justify-center animate-marquee ">
          {[...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} {...testimonial} className={testimonial.id % 2 === 0 ? 'mt-[26px]' : ''} />
          ))}
        </div>
      </div>
    </section>
  );
};
