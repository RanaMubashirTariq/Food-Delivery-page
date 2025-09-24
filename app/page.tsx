import Image from "next/image";
import HeroBannerSection from "./sections/HeroBannerSection/HeroBannerSection";
import TodayBestDealsSection from "./sections/TodayBestDealsSection/TodayBestDealsSection";
import ExploreAllRestaurantsSection from "./sections/ExploreAllRestaurantsSection/ExploreAllRestaurantsSection";
import SearchByFoodSection from "./sections/SearchByFoodSection/SearchByFoodSection";
import EnjoyDiscountsSection from "./sections/EnjoyDiscountsSection/EnjoyDiscountsSection";
import DownloadAppSection from "./sections/DownloadAppSection/DownloadAppSection";
import CustomerTestimonialsSection from "./sections/CustomerTestimonialsSection/CustomerTestimonialsSection";
import FAQSection from "./sections/FAQSection/FAQSection";
import SiteFooterSection from "./sections/SiteFooterSection/SiteFooterSection";
import { ScrollProgress } from "./components/ParallaxComponents";


export default function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      <ScrollProgress />
      <img src='/header-back-img.png' className="w-[1939px] h-[1639px] max-[1100px]:h-[1200px] object-cover top-0 absolute inset-0 z-0"/>
              <HeroBannerSection/>
              <TodayBestDealsSection/>
              <ExploreAllRestaurantsSection/>
              <SearchByFoodSection/>
              <EnjoyDiscountsSection/>
              <DownloadAppSection/>
              <CustomerTestimonialsSection/>
              <FAQSection/>
              <SiteFooterSection/>
    </div>
  );
}
