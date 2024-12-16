

import { useState } from "react";
import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Encontre o serviço desejado",
    paragraph:
      "Explore os diferentes serviços oferecidos pela Cardopar, escolhendo o que mais se adequa às necessidades do seu negócio.",
    image: "/images/blog/passo1.webp",
  },
  {
    id: 2,
    title: "Fale com nossa equipe e solicite seu orçamento",
    paragraph:
      "Após encontrar o serviço desejado, entre em contato diretamente com a equipe, tire dúvidas se necessário e solicite um orçamento personalizado.",
    image: "/images/blog/passo2.webp"
  },
 
  {
    id: 3,
    title: "Finalize o atendimento",
    paragraph:
      "Tudo pronto! Após a aprovação do orçamento e a conclusão de todas as etapas do atendimento, daremos início à realização do seu projeto com todo o cuidado e dedicação que ele merece.",
    image: "/images/blog/passo3.webp",
  },
 
 
];




export default blogData;
