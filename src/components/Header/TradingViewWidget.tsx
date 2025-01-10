"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const CustomCarousel: React.FC = () => {
  return (
    <div className="carousel-container bg-gray-100 pb-5">
      <div>
        <h3 className="pt-10 pb-5 text-[21px] font-bold text-gray-800 dark:text-white sm:text-2xl lg:text-xl xl:text-4xl text-center">
          Confiam em nós
        </h3>
      </div>
      <Swiper
        slidesPerView={5} // Número de imagens visíveis no desktop
        spaceBetween={20} // Espaçamento entre as imagens
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 3, // Exibe 3 slides no mobile
          },
          1024: {
            slidesPerView: 5, // Exibe 5 slides no desktop
          },
        }}
        className="flex justify-center items-center"
        style={{ width: '100%', height: 'auto' }}
      >
        {/* Substitua as imagens abaixo pelas suas */}
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/vistoria.svg"
            alt="Logo 1"
            width={100}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/pensa.svg"
            alt="Logo 2"
            width={300}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/fusp.svg"
            alt="Logo 3"
            width={150}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/conta.svg"
            alt="Logo 4"
            width={200}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/globo.svg"
            alt="Logo 5"
            width={90}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/republica.svg"
            alt="Logo 5"
            width={200}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/midea.svg"
            alt="Logo 5"
            width={150}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/klabin.svg"
            alt="Logo 5"
            width={150}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/bradesco.svg"
            alt="Logo 5"
            width={200}
            height={30}
          />
           </SwiperSlide>
               <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/cbf.svg"
            alt="Logo 5"
            width={90}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/sicredi.svg"
            alt="Logo 5"
            width={250}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/safra.svg"
            alt="Logo 5"
            width={200}
            height={30}
          />
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <Image
            src="/images/marcas/nissin.svg"
            alt="Logo 5"
            width={200}
            height={30}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
