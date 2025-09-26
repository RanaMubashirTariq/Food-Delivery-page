import React from "react";
import { Button } from "../../components/ui/button";

interface RestaurantCardProps {
  imageSrc: string;
  name: string;
  location: string;
  rating: string;
  user: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  imageSrc,
  name,
  location,
  rating,
  user,
}) => (
  <div className="bg-[#bc430d]/10  border border-[1px] border-[#bc430d]/20 rounded-[50px]  overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <img className="w-full h-[180px] object-cover " src={imageSrc} alt={name} />
    <div className="p-4 flex items-start justify-between">
        <div className="flex flex-col items-start">
        <h3 className="font-poppins font-semibold text-[#272727] text-xl max-[1000px]:text-lg max-[1000px]:leading-5  leading-[27px] mb-1">
        {name}
      </h3>
      <p className="font-poppins font-medium text-[#c08266] text-base max-[1000px]:text-sm max-[1000px]:leading-5  leading-[27px] tracking-0 mb-3">
        {location}
      </p>
        </div>
      <div className="flex items-center space-x-1">
        <img className="w-4 h-4" alt="Star icon" src="/star.png" />
        <span className="font-poppins text-[#272727] text-base  max-[1000px]:text-sm  max-[1000px]:leading-5  leading-[27px] font-semibold">
          {rating}
        </span>
        <span className="font-poppins text-[#999999] text-base  max-[1000px]:text-sm max-[1000px]:leading-5 leading-[27px] font-semibold">
          {user}
        </span>
      </div>
    </div>
  </div>
);

export default function ExploreAllRestaurantsSection  () {
  const restaurants = [
    { imageSrc: "/restaurant-1.png", name: "360 Bistro", location: "Pakistani", rating: "4.5" , user:'(100+)'},
    { imageSrc: "/restaurant-2.png", name: "Food Planet", location: "Pakistani", rating: "4.8" , user:'(100+)'},
    { imageSrc: "/restaurant-3.png", name: "Zaiqa", location: "Pakistani", rating: "4.7" , user:'(100+)'},
    { imageSrc: "/restaurant-4.png", name: "Mugbean", location: "Pakistani", rating: "4.9" , user:'(100+)'},
    { imageSrc: "/restaurant-5.png", name: "Platter", location: "Pakistani", rating: "4.6" , user:'(100+)'},
    { imageSrc: "/restaurant-6.png", name: "Potter House", location: "Pakistani", rating: "4.5" , user:'(100+)'},
    { imageSrc: "/restaurant-7.png", name: "Beany Bonito", location: "Pakistani", rating: "4.8" , user:'(100+)'},
    { imageSrc: "/restaurant-8.png", name: "Noodles Hub", location: "Pakistani", rating: "4.7" , user:'(100+)'},
    { imageSrc: "/restaurant-9.png", name: "Spaghettio", location: "Pakistani", rating: "4.9" , user:'(100+)'},
  ];

  return (
    <section className="relative w-full bg-[#fdfdfd] pt-20 max-[1000px]:pt-10 pb-5  px-20 max-[1100px]:px-[50px] max-[767px]:px-[25px]">
         <img src="/img-1.png" className="w-[380px] h-[377px] absolute  z-0 top-[107px] max-[800px]:top-[180px] right-[0px] object-cover max-[800px]:w-[200px] max-[800px]:h-[220px]" alt="" />
         <img src="/img-2.png" className="w-[378px] h-[446px] absolute  z-0 top-[187px] left-[-107px] object-contain max-[800px]:w-[200px] max-[800px]:h-[300px] max-[800px]:left-[-50px] " alt="" />
         <img src="/img-3.png" className="w-[382px] h-[356px] absolute  z-0 bottom-[-230px] left-[-74px] object-cover max-[800px]:w-[200px] max-[800px]:h-[220px] max-[800px]:bottom-[-100px] max-[800px]:left-[-40px]" alt="" />
         <img src="/img-4.png" className="w-[378px] h-[366px] absolute  z-0 bottom-[-170px] max-[1000px]:bottom-[150px] max-[1000px]:right-[-80px] right-[-54px] object-contain max-[767px]:w-[200px] max-[767px]:h-[300px]" alt="" />
      <div className=" mx-auto  max-w-[1440px]">
        <div className="flex items-center justify-between mb-10 md:mb-16 sm:mb-15 max-[767px]:flex-col max-[767px]:gap-5 max-[500px]:items-start">
          <h2 className="font-poppins font-bold text-[#bc430d]  text-[48px] max-[767px]:text-[36px] max-[767px]:leading[50px] max-[800px]:leading-[54px] leading-[27px]">
            Explore All Restaurants
          </h2>
          <Button className="cursor-pointer bg-white text-[#bc430d] font-bold rounded-full h-[40px] px-6  border border-[1px] border-[#bc430d] flex items-center">
            <img className="w-4 h-4 inline-flex mr-[11px]" alt="Filter icon" src="/filter-icon.png" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              imageSrc={restaurant.imageSrc}
              name={restaurant.name}
              location={restaurant.location}
              rating={restaurant.rating}
              user={restaurant.user}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 