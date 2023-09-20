import Link from "next/link";

export default function SectionPrices() {
  return (
    <>
      <section className="relative block" id="precios">
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
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-32">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4 mb-12">
              <h2 className="text-4xl font-semibold">
                Elige lo mejor para su empresa
              </h2>
            </div>
            <div className="flex flex-row text-center pt-12">
              <div className="w-100 p-8 px-12 bg-gray-100 rounded-3xl pr-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Básico</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-lg text-gray-400 align-top">€‎ </span>
                  <span className="text-3xl font-semibold">100</span>
                  <span className="text-gray-400 font-medium">/ mes</span>
                </p>
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>

                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                </div>
              </div>
              <div className="w-100 p-8 bg-gray-900 text-center rounded-3xl text-white shadow-xl transform scale-125">
                <h1 className="text-white font-semibold text-2xl">Startup</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-lg text-gray-400 align-top">€‎ </span>
                  <span className="text-3xl font-semibold">1000</span>
                  <span className="text-gray-400 font-medium">/ año</span>
                </p>
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                    Popular
                  </p>
                </div>
              </div>
              <div className="w-100 p-8 px-12 bg-white text-center rounded-3xl pl-16 shadow-xl">
                <h1 className="text-black font-semibold text-2xl">
                  Enterprise
                </h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-lg text-gray-400 align-top">€‎ </span>
                  <span className="text-3xl font-semibold">1500</span>
                  <span className="text-gray-400 font-medium">/ año</span>
                </p>
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="pl-2">Lorem ipsum dolor sit amet</span>
                  </p>
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
