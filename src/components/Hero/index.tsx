import Link from "next/link";

const Hero = () => {
  return (
    <>
   <section
  id="home"
  className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] lg:mt-[70px]"
  style={{
    filter: "brightness(0.9)"
  }}
>

        {/* Video Background for Desktop */}
        <div className="hidden lg:block absolute inset-0 z-[-2]">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          >
            <source src="images/hero/videoBanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-mobile-gradient lg:bg-custom-gradient-banner z-[-1]"></div>

        {/* Content */}
        <div className="container flex justify-start">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 ">
              <div className="mx-auto max-w-[600px] h-[60vh] sm:h-[100%]  flex flex-col justify-center items-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Potencialize sua infraestrutura com soluções inteligentes para o futuro.
                </h1>
                <div className="flex flex-col items-start justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://wa.me/cardopar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-3xl bg-orange px-8 py-5 text-1xl font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Faça parte você também
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>


    </>

    
  );
};

export default Hero;
