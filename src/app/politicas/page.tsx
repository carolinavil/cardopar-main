import PoliticasSectionTwo from "@/components/Politicas/PoliticasSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas | Cardopar ",
  description: "Conheça nossas políticas de privacidade",
  // other metadata
};

const Compliance = () => {
  return (
    <>
      <Breadcrumb
        pageName="Políticas"
        description="Conheça nossas políticas de privacidade"
      />
      <PoliticasSectionTwo />
    </>
  );
};

export default Compliance;
