"use client";

import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import { otherData } from "./blogData";
import Image from "next/image";

const SingleBlog = ({ blogs }: { blogs: Blog[] }) => {
  const [selectedBlogId, setSelectedBlogId] = useState<number>(1);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0); // Para controlar o índice dos "outros serviços"
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se a tela é mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile: até 768px
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = (id: number) => {
    setSelectedBlogId(id);
  };

  const handleNextBlog = () => {
    const nextIndex = (currentBlogIndex + 1) % blogs.length; // Próximo blog, reinicia no começo se chegar ao fim
    setCurrentBlogIndex(nextIndex);
    const nextBlog = blogs[nextIndex];
    setSelectedBlogId(nextBlog.id);
  };

  const handlePrevBlog = () => {
    const prevIndex = currentBlogIndex === 0 ? blogs.length - 1 : currentBlogIndex - 1; // Volta ao último se no primeiro
    setCurrentBlogIndex(prevIndex);
    const prevBlog = blogs[prevIndex];
    setSelectedBlogId(prevBlog.id);
  };

  // Navegação de "outros serviços"
  const handleNextService = () => {
    const nextIndex = (currentServiceIndex + 1) % otherData.length; // Próximo serviço, reinicia no começo se chegar ao fim
    setCurrentServiceIndex(nextIndex);
  };

  const handlePrevService = () => {
    const prevIndex = currentServiceIndex === 0 ? otherData.length - 1 : currentServiceIndex - 1; // Volta ao último se no primeiro
    setCurrentServiceIndex(prevIndex);
  };

  const selectedBlog = blogs.find((blog) => blog.id === selectedBlogId);
  if (!selectedBlog) return null;

  const { title, image, paragraph } = selectedBlog;

  return (
    <div className="">
      <div className="mb-9">
        <h3 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-4xl">
          O que nossos clientes falam sobre nós
        </h3>
        <p className="mb-3 text-black dark:text-white sm:text-1 lg:text-xl xl:text-[16px] max-w-[600px]">
          Comece seu atendimento conosco seguindo esses passos e conte com
          nossa equipe em cada etapa do processo.
        </p>
      </div>

      {/* Slide para Mobile */}
      {isMobile && (
        <div className="w-full mt-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevBlog}
              className="p-2 text-white bg-primary rounded-full shadow hover:bg-opacity-90"
            >
              ←
            </button>

            {/* Slide Container para os Botões de Blog */}
            <div className="flex w-full justify-around items-center my-6">
              {blogs
                .slice(currentBlogIndex, currentBlogIndex + 1) // Exibe um blog por vez no mobile
                .map((blog) => (
                  <button
                    key={blog.id}
                    onClick={() => handleButtonClick(blog.id)}
                    className={`px-4 py-3.5 rounded-3xl font-semibold text-left my-2 text-[20px] mx-10 ${
                      selectedBlogId === blog.id
                        ? "bg-primary text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {blog.title}
                  </button>
                ))}
            </div>

            <button
              onClick={handleNextBlog}
              className="p-2 text-white bg-primary rounded-full shadow hover:bg-opacity-90"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo dos Blogs para Desktop */}
      {!isMobile && (
        <div className="flex flex-col items-center p-4">
          <div className="border-b border-gray-300 pb-8 items-center">
            {blogs.map((blog) => (
              <button
                key={blog.id}
                onClick={() => handleButtonClick(blog.id)}
                className={`px-4 py-3.5 rounded-3xl font-semibold text-left my-2 text-[20px] mx-10 ${
                  selectedBlogId === blog.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {blog.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-7 flex-col sm:flex-row ">
        <div className="sm:w-[370px] sm:mr-6 ">
       

<Image src={image} alt="author"   

width={370}
height={250}
className=" object-cover rounded-lg "/>
        </div>
        <div className="sm:w-[400px] flex justify-center items-start flex-col mt-7 sm:mt-0">
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            {title}
          </h3>
          <p className="text-base font-medium text-body-color dark:text-gray-300">
            {paragraph}
          </p>
          <div className="flex justify-center mt-3">
            <a
              href="https://wa.me/cardopar"
              className="px-6 py-3 text-white bg-primary rounded-md shadow hover:bg-opacity-90"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>

      {/* Carousel de Outros Serviços */}
      <div className="mb-1 mt-10  pb-0 sm:pb-6 sm:pt-10">
        <h3 className="text-2xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-4xl text-center">
          Outros serviços
        </h3>
      </div>
      <div className="w-full   mt-0 sm:mt-7" id="servico">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevService}
            className="p-2 text-white bg-primary rounded-full shadow hover:bg-opacity-90"
          >
            ←
          </button>

          {/* Slide Container */}
          <div className="flex w-full justify-around items-center my-6 mx-2">
            {otherData
              .slice(currentServiceIndex, currentServiceIndex + (isMobile ? 1 : 3)) // Se for mobile, exibe 1 serviço de cada vez, caso contrário 3
              .map((service, index) => (
                <div
                  key={index}
                  className={`w-full sm:w-[350px] h-[150px] flex flex-col items-start justify-center p-4 rounded-[15px] ${
                    index % 2 === 0 ? "bg-primary" : "bg-secundary"
                  }`}
                >
                  <h4 className="text-lg font-semibold text-white dark:text-white">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm text-white">{service.description}</p>
                </div>
              ))}
          </div>

          <button
            onClick={handleNextService}
            className="p-2 text-white bg-primary rounded-full shadow hover:bg-opacity-90"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
