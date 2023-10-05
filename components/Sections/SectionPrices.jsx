import Link from "next/link";

export default function SectionPrices() {
  return (
    <>
      <section className="relative block " id="precios">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 90"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 py-12 lg:pb-32">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4 mb-12">
              <h2 className="text-4xl font-semibold">
                Elija lo mejor para su empresa
              </h2>
            </div>
            <div className="flex flex-wrap w-full text-center lg:pt-12">
              <div className="p-8 lg:px-12 flex-auto bg-gray-100 rounded-3xl lg:pr-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Básico</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-lg text-gray-400 align-top">€‎ </span>
                  <span className="text-3xl font-semibold">1000</span>
                  <span className="text-gray-400 font-medium">/ año</span>
                </p>
                <p className="pt-2 tracking-wide">
                  <span className="text-md text-gray-400 align-top">€‎ </span>
                  <span className="text-md font-semibold">100</span>
                  <span className="text-gray-400 font-medium">/ mes</span>
                </p>
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 ">
                    <span className="pl-2">Personalización de la web</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">
                      Plataforma y seguirdad completa
                    </span>
                  </p>
                  {/*
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>

                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
		  */}
                </div>
              </div>
              <div className="relative p-8 bg-gray-900 flex-auto text-center rounded-3xl text-white shadow-xl lg:transform lg:scale-125">
                <h1 className="text-white font-semibold text-2xl">Medio</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-lg text-gray-400 align-top">€‎ </span>
                  <span className="text-3xl font-semibold">1500</span>
                  <span className="text-gray-400 font-medium">/ año</span>
                </p>
                <p className="pt-2 tracking-wide">
                  <span className="text-md text-gray-400 align-top">€‎ </span>
                  <span className="text-md font-semibold">150</span>
                  <span className="text-gray-400 font-medium">/ mes</span>
                </p>
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 ">
                    <span className="pl-2">Todo lo del pack básico</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">10 trámites de denuncias</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Asesoramiento puntual</span>
                  </p>
                  <p className="font-semibold text-gray-400 pt-5">
                    <span className="pl-2">Reporte mensual</span>
                  </p>
                  {/*
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
		     */}
                </div>
                <div className="absolute top-4 right-4">
                  <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                    Popular
                  </p>
                </div>
              </div>
              <div className="p-8 lg:px-12 bg-white text-center flex-auto rounded-3xl lg:pl-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Premium</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-lg text-gray-400 align-top">€‎ </span>
                  <span className="text-3xl font-semibold">7000</span>
                  <span className="text-gray-400 font-medium">/ año</span>
                </p>
                <p className="pt-2 tracking-wide">
                  <span className="text-md text-gray-400 align-top">€‎ </span>
                  <span className="text-md font-semibold">700</span>
                  <span className="text-gray-400 font-medium">/ mes</span>
                </p>
                <div className="pt-8">
                  <p className="font-semibold text-gray-400">
                    <span className="pl-2">Denuncias ilimitadas</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">
                      Asesoramiento personal completo
                    </span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Atención única y premium</span>
                  </p>
                  {/*
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400  pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
		  */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-right mt-6">
            <p className="font-semibold text-gray-400 text-sm">
              * Los precios no incluyen IVA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
