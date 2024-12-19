import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <a 
        href="https://wa.me/cardopar"
          onClick={scrollToTop}
          aria-label="scroll to top"
          
        >

<Image
  src="/images/hero/whatsapp-icon.svg"
  alt="logo"
  className="flex h-auto w-20 sm:w-24 md:w-32 cursor-pointer items-center justify-center rounded-md text-white transition duration-300 ease-in-out"
  width={120}
  height={40}
/>

        </a>
      )}
    </div>
  );
}
