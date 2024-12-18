

import { useState } from "react";
import { Blog } from "@/types/blog";
import { Other } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Especialistas em Wordpress",
    paragraph:
      "Implementamos medidas de segurança robustas para proteger seus dados e garantir sua privacidade absoluta na internet.",
    image: "/images/blog/wordpress.webp",
   
  
  },
  {
    id: 2,
    title: "AWS, Azure e Google Cloud",
    paragraph:
      "Oferecemos soluções em Google Cloud, Microsoft Azure e AWS, adaptando serviços às necessidades do cliente.",
    image: "/images/blog/cloud.webp",
 
  
  },
 
  {
    id: 3,
    title: "Escalamento Automático",
    paragraph:
      "Nossas soluções se ajustam automaticamente conforme a demanda aumenta ou diminui, garantindo eficiência e redução de custos à medida que você utiliza mais ou menos recursos.",
    image: "/images/blog/aws.webp",

  
  },
 
 
];


const otherData: Other[] = [
  {
    id: 1,
    title: "Serviços de Balanceamento de Carga",
    description: "Distribuímos tráfego entre servidores, aumentando a disponibilidade e otimizando o desempenho dos serviços.",
    
  },
  {
    id: 2,
    title: "Bancos de Dados e Clusterização",
    description: "Gerenciamos clusters de bancos de dados, implementando soluções de alta disponibilidade e recuperação de desastres.",
    
  },
  {
    id: 3,
    title: "Gerenciamento de Aplicações em Nuvem",
    description: "Especializamo-nos na orquestração de contêineres com Kubernetes, facilitando desenvolvimentos ágeis e escaláveis.",
    
  },
  {
    id: 4,
    title: "Elasticidade da Capacidade",
    description: "Ajustamos recursos automaticamente, garantindo desempenho em tempo real durante altas cargas de acesso.",
    
  },
  {
    id: 5,
    title: "Simulação de Ataques (Pentests)",
    description: "Identificamos vulnerabilidades em sistemas, gerando relatórios detalhados com recomendações de segurança.",
    
  },

];




export {otherData};
export default blogData;
