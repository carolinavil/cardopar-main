

import { useState } from "react";
import { Blog } from "@/types/blog";
import { Other } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Especialistas em Wordpress",
    paragraph:
      "Investimentos de até R$ 300 mil. Relacionamento passivo com a equipe de assessoria da Router Investimentos e exposição à plataforma de produtos e serviços Safra Invest.",
    image: "/images/blog/wordpress.webp",
   
  
  },
  {
    id: 2,
    title: "AWS, Azure e Google Cloud",
    paragraph:
      "Investimentos de até R$ 300 mil. Relacionamento passivo com a equipe de assessoria da Router Investimentos e exposição à plataforma de produtos e serviços Safra Invest.",
    image: "/images/blog/cloud.webp",
 
  
  },
 
  {
    id: 3,
    title: "Escalamento Automático",
    paragraph:
      "Investimentos de até R$ 300 mil. Relacionamento passivo com a equipe de assessoria da Router Investimentos e exposição à plataforma de produtos e serviços Safra Invest.",
    image: "/images/blog/aws.webp",

  
  },
 
 
];


const otherData: Other[] = [
  {
    id: 1,
    title: "Planejamento Financeiro",
    description: "Oferecemos soluções personalizadas para organizar suas finanças.",
    
  },
  {
    id: 2,
    title: "Consultoria de Investimentos",
    description: "Ajudamos você a encontrar os melhores investimentos.",
    
  },
  {
    id: 3,
    title: "Gestão de Patrimônio",
    description: "Planeje e gerencie seu patrimônio com nossa equipe especializada.",
    
  },
  {
    id: 4,
    title: "Gestão de Patrimônio",
    description: "Planeje e gerencie seu patrimônio com nossa equipe especializada.",
    
  },
  {
    id: 5,
    title: "Gestão de Patrimônio",
    description: "Planeje e gerencie seu patrimônio com nossa equipe especializada.",
    
  },
  {
    id: 6,
    title: "Gestão de Patrimônio",
    description: "Planeje e gerencie seu patrimônio com nossa equipe especializada.",
    
  },
];




export {otherData};
export default blogData;
