export default function SectionInfo() {
  return (
    <>
      <section className="pb-20 bg-slate-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold uppercase">
                    Personalización y autonomía
                  </h6>
                  <p className="my-4 text-slate-500 text-justify px-4">
                    Servicios únicos, adaptado para sus necesidades. Desde temas
                    jurídicos a técnicos, somos marca propia.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold uppercase">
                    Desentiéndase
                  </h6>
                  <p className="my-4 text-slate-500 text-justify px-4">
                    Administramos tanto la plataforma como los conflictos que se
                    produzcan. Con Yucade, céntrese en lo que realmente importa,
                    su empresa. aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-12 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold uppercase">
                    Acorde con la Ley
                  </h6>
                  <p className="my-4 text-slate-500 text-justify px-4">
                    Ofrecemos un equipo multidisciplinar especialista en todo
                    tipo de materias con la capacidad de resolver tanto temas
                    judiciales y extrajudiciales
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-6">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Nuestra misión contigo
              </h3>
              <p className="text-lg font-normal leading-relaxed mt-4 mb-4 text-slate-600">
                Queremos que la implantación de la nueva ley no le afecte en su
                día a día.
              </p>
              <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-slate-600">
                Nuestros objetivo es ser el estarndar español de la gestión de
                denuncias, desde la entrada, hasta la resolución de las mismas.
              </p>
              <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-slate-600">
                Tenga la tranquilidad y seguridad de dejar en nuestras manos la
                labor de gestionar las posibles contingencias que puedan surgir.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mt-12 mb-6 shadow-lg rounded-lg bg-slate-700">
                <img
                  alt="..."
                  src="/img/lawsuit.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-slate-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-gray-900">
                    ¡Nueva Ley!
                  </h4>
                  <p className="text-md mt-2 text-gray-500 text-justify">
                    La Ley 2/2023, de 20 de febrero, obliga tanto a las empresas
                    con más de 50 trabajadores como a entidades que reciban
                    fondos públicos a tener un dispositivo de comunicación
                    integrado con el fin de posibilitar, protegiendo a los
                    informantes , de infracciones y situaciones de
                    disconformidad que vayan en contra de la legislación
                    establecida
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
