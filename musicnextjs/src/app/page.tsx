import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialCards from "@/components/TestimonialCards";
import UpcommingWebinars from "@/components/UpcommingWebinars";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          {/* <h1 className=" text-2xl text-center">Chai or code</h1> */}
          <HeroSection/>
          <FeaturedSection/> 
          <WhyChooseUs/>
          <TestimonialCards />
          <UpcommingWebinars />
    </main>
  );
}