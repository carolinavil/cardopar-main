import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contato" className="bg-custom-gradient overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Precisa de ajuda? Entre em contato
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Nossa equipe de suporte entrará em contato com você o mais rápido possível
              </p>
              {/* <div className="hidden md:block">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdW2rsmaJ8MxaAPTdW7cQ4AvHwMD_ezfmBzJqImEI1VEXXS7w/viewform?embedded=true" 
                  width="640" 
                  height="850" 
                >Carregando…</iframe>
              </div>
              <div className="block md:hidden w-full h-full">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdW2rsmaJ8MxaAPTdW7cQ4AvHwMD_ezfmBzJqImEI1VEXXS7w/viewform?embedded=true" 
                  width="100%" 
                  height="850" 
                >Carregando…</iframe>
              </div> */}
              <form
                action="https://formspree.io/f/xbljvokz"
                method="POST"
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Escreva sua mensagem"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
