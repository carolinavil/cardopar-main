import HomeSectionOne from "@/components/HomeSections/HomeSectionOne";
import HomeSectionTwo from "@/components/HomeSections/HomeSectionTwo";
import Services from "@/components/Services";
import ServicesTwo from "@/components/ServicesTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import CustomCarousel from "@/components/Header/TradingViewWidget";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
// teste

export const metadata: Metadata = {
  title: "Cardopar",

  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
    <CustomCarousel />
      {/* <Features /> */}
      {/* <Video /> */}
      <HomeSectionTwo />
   
     
      {/* <Pricing /> */}
      <Services />
      <HomeSectionOne />
      <ServicesTwo />
   <Contact />

       <Testimonials />
   
    </>
  );
}
