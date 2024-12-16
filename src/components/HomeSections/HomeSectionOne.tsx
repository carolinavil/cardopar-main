import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const Differential = ({ title, iconSrc, items }) => (
    <div className="flex flex-col items-start p-4    ">
      <div className="flex items-center justify-center bg-[#1d69b54a] w-full mb-4   p-2 rounded-full">
        <Image
          src={iconSrc}
          alt={title}
          width={40}
          height={40}
          className="mr-3 bg-white p-1 rounded-full border-2 border-[#1D69B5]"
        />
        <h3 className="text-lg font-bold text-[#1D69B5] ">{title}</h3>
      </div>
      <ul className="space-y-5 mt-7">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-[#008000]">{checkIcon}</span>
            <p className="text-gray-600 ">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
           title="Simple and Affordable Pricing"
           paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
           center
           width="665px"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Differential
            title="Inovação Tecnológica"
            iconSrc="/images/home/d1.webp"
            items={[
              "Desenvolvimento ágil com tecnologias de ponta",
              "Integração contínua e entrega rápida",
              "Utilização de metodologias ágeis para resultados eficazes",
            ]}
          />
        
        <Differential
            title="Compromisso com a Qualidade"
          iconSrc="/images/home/d2.webp"
            items={[
              "Atenção aos detalhes em cada etapa do processo",
              "Garantia de entregas dentro dos padrões de excelência",
              "Feedback constante para melhoria contínua",
            ]}
          />
          <Differential
            title="Equipe Especializada"
          iconSrc="/images/home/d3.webp"
            items={[
              "Profissionais experientes e qualificados",
              "Capacidade de adaptação às necessidades do cliente",
              "Formação contínua para acompanhar as tendências do mercado",
            ]}
          />
      
        </div>
        <div className="flex justify-center mt-10 pb-20">
          <a
            href="https://wa.me/cardopar"
            className="px-6 py-3 text-white bg-primary rounded-md shadow hover:bg-opacity-90"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
