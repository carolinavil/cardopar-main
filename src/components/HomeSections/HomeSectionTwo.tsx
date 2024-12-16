import Image from "next/image";
import { IconArrowRight } from '@tabler/icons-react';

const AboutSectionTwo = () => {
  return (
    <section
      id="about"
      className="flex items-center relative bg-cover bg-center pt-6 sm:h-[70vh] "
    >
      {/* Imagem de fundo usando Next.js Image */}
      <div >
        <Image
          src="/images/about/desktop44.svg"
          alt="Sobre nós - Background"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          
          priority // Carregar a imagem como prioridade
          className="hidden lg:block relative w-full h-full"
        />
      </div>

      <div className="container sm:absolute z-10 p-6">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 max-w-[700px] sm:mx-5 sm:mt-4">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-4xl">
                  Sobre nós
                </h3>
              </div>
              <div className="mb-9">
                <p className="mb-8 text-base text-black dark:text-white sm:text-base lg:text-base xl:text-base">
                  Por que escolher a Cardopar? Nós oferecemos soluções que incorporam a tecnologia mais avançada do mercado, garantindo excelente qualidade a um preço acessível. Além disso, somos especializados em instalação e configuração de servidores, migração de sistemas e segurança.
                </p>
                <p className="mb-8 text-base text-black dark:text-white sm:text-base lg:text-base xl:text-base">
                  Por que escolher a Cardopar? Nós oferecemos soluções que incorporam a tecnologia mais avançada do mercado, garantindo excelente qualidade a um preço acessível. Além disso, somos especializados em instalação e configuração de servidores, migração de sistemas e segurança.
                </p>

                <div className="flex justify-start mt-10">
                  <a
                    href="https://wa.me/cardopar"
                    className="px-6 py-3 text-white bg-primary rounded-md shadow hover:bg-opacity-90"
                  >
                    Fazer orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para melhorar contraste, opcional */}

    </section>
  );
};

export default AboutSectionTwo;
