import Image from "next/image";
import Link from "next/link";
import Blog from "../Services";
import HomeSectionTwo from '@/components/HomeSections/HomeSectionTwo';

const InvestSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
    <div className="container">
      <h1 className="w-full flex justify-center text-4xl font-bold mb-24">Política de Privacidade</h1>
      <p className="mb-8">
        Sua privacidade é importante para nós. Este documento explica como coletamos, utilizamos, armazenamos e protegemos as informações que você nos fornece ao utilizar este site.
      </p>
      <p className="mb-8">
        <strong>1. Coleta de Dados Pessoais:</strong> Podemos coletar informações pessoais fornecidas diretamente por você, como:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>Nome completo</li>
        <li>Endereço de e-mail</li>
        <li>Número de telefone</li>
        <li>Endereço de entrega (quando aplicável)</li>
      </ul>
      <p className="mb-8">
        Também podemos coletar informações automaticamente, como:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>Endereço IP</li>
        <li>Dados de navegação (como páginas visitadas e tempo no site)</li>
        <li>Dados de geolocalização (se autorizado pelo usuário)</li>
      </ul>
      <p className="mb-8">
        <strong>2. Uso das Informações:</strong> Os dados coletados são utilizados para:
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>Fornecer e gerenciar os serviços oferecidos no site</li>
        <li>Processar pagamentos e pedidos</li>
        <li>Enviar notificações importantes e comunicados</li>
        <li>Melhorar a experiência do usuário por meio de análises e otimizações</li>
      </ul>
      <p className="mb-8">
        Ao utilizar este site, você concorda com os termos desta Política de Privacidade. Em caso de dúvidas, entre em contato conosco.
      </p>
    </div>
  </section>
  
  );
};

export default InvestSectionTwo;
