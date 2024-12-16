"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";

const SingleBlog = ({ blogs }: { blogs: Blog[] }) => {
  // Estado para armazenar o índice do blog atual
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  // Estado para verificar se é dispositivo móvel
  const [isMobile, setIsMobile] = useState(false);

  // Função para detectar o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Verifica se a tela é mobile (até 768px)
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Função para lidar com a troca de conteúdo ao clicar no botão
  const handleButtonClick = (id: number) => {
    const selectedIndex = blogs.findIndex((blog) => blog.id === id);
    setCurrentBlogIndex(selectedIndex);
  };

  // Funções para navegar entre os blogs (somente no mobile)
  const handleNextBlog = () => {
    setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length); // Próximo blog, reinicia no começo
  };

  const handlePrevBlog = () => {
    setCurrentBlogIndex(
      (prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1) // Volta ao último se no primeiro
    );
  };

  // Encontrar o blog correspondente ao índice selecionado
  const selectedBlog = blogs[currentBlogIndex];
  if (!selectedBlog) return null;

  const { title, image, paragraph } = selectedBlog;

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around p-4 mt-20">
        {/* Seção de Títulos de Blogs */}
        <div className="flex flex-col">
          <div className="mb-9">
        
            <h3 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-4xl">
              Iniciando seu atendimento
            </h3>
            <p className="mb-3 text-black dark:text-white sm:text-1 lg:text-xl xl:text-[16px] max-w-[600px]">
              Comece seu atendimento conosco seguindo esses passos e conte com nossa equipe em cada etapa do processo.
            </p>
          </div>

          {/* Seção de Navegação em Mobile */}
          {isMobile ? (
            <div className="w-full mt-6">
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevBlog}
                  className="p-2 text-white bg-primary rounded-full shadow hover:bg-opacity-90"
                >
                  ←
                </button>

                {/* Exibe apenas um botão de blog por vez */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => handleButtonClick(selectedBlog.id)}
                    className={`py-1 rounded-lg font-semibold text-center my-2 text-[22px] flex items-center ${
                      selectedBlog.id === selectedBlog.id
                        ? "text-primary"
                        : "dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                  
                    
                    
                    <span>
                    {selectedBlog.title}
                    </span>
                    
               
                
                  </button>
                </div>

                <button
                  onClick={handleNextBlog}
                  className="p-2 text-white bg-primary rounded-full shadow hover:bg-opacity-90"
                >
                  →
                </button>
              </div>
            </div>
          ) : (
            // Seção de Navegação em Desktop (todos os blogs são exibidos)
            <div className="flex flex-col items-start">
              {blogs.map((blog) => (
                <button
                  key={blog.id}
                  onClick={() => handleButtonClick(blog.id)}
                  className={`py-1 rounded-lg font-semibold text-left my-2 text-[22px] flex items-center ${
                    selectedBlog.id === blog.id
                      ? "text-primary"
                      : "dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm border-2 mr-3 ${
                      selectedBlog.id === blog.id
                        ? "text-primary border-primary"
                        : "text-gray-700 dark:text-gray-300 border-gray-700"
                    }`}
                  >
                    {blog.id}
                  </span>
                  {blog.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Seção do conteúdo do Blog Selecionado */}
        <div className="flex flex-col justify-center items-center w-full h-full md:w-[350px] md:h-[500px]">
        <h3 className="text-xl font-bold text-primary dark:text-white sm:text-1xl text-center max-w-[350px] hidden md:block">
  {title}
</h3>


          <div className="p-8 max-w-[300px] h-[400px] bg-white rounded-[15px] shadow-[0_1px_10px_rgba(0,0,0,0.324)] my-8 mx-2.5 flex flex-col justify-center items-center">
          <Image src={image} alt="author"   

width={300}
height={400}
className=" object-cover rounded-lg "/>
            <p className="text-base text-body-color dark:text-gray-300 mt-6">
              {paragraph}
            </p>
          </div>
        </div>
      </div>

      {/* Botão de Fazer Orçamento */}
      <div className="flex justify-center mt-3 mb-7">
        <a
          href="https://wa.me/cardopar"
          className="px-6 py-3 text-white bg-primary rounded-md shadow hover:bg-opacity-90"
        >
          Fazer orçamento
        </a>
      </div>
    </>
  );
};

export default SingleBlog;
