import HomeSectionOne from "@/components/HomeSections/HomeSectionOne";
import HomeSectionTwo from "@/components/HomeSections/HomeSectionTwo";
import Services from "@/components/Services";
import ServicesTwo from "@/components/ServicesTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Route Investimentos",
  description: "Os melhores assessores cuidando dos seus investimentos.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
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
