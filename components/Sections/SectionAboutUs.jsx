import Link from "next/link";

export default function SectionAboutUs() {
  return (
    <>
      <section
        className="relative block py-12 lg:pt-0 bg-slate-200"
        id="sobre-nosotros"
      >
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
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pb-20">
          <div className="flex flex-wrap justify-center ">
            <div className="container mx-auto px-4 lg:pt-12 lg:pb-18">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold">Conócenos</h2>
                  <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-400"></p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/*
                    <img
                      alt="..."
                      // src="/img/team-2-800x800.jpg"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
		       */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">
                        Andrés Navarro Pedregal
                      </h5>
                      <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                        Cofundador & CTO
                      </p>
                      <div className="mt-6">
                        <Link
                          href="https://www.linkedin.com/in/andresnav"
                          target="_blank"
                        >
                          <button
                            className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </Link>
                        <Link
                          href="https://www.github.com/andres-nav"
                          target="_blank"
                        >
                          <button
                            className="bg-gray-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-github"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/*
                    <img
                      alt="..."
                      // src="/img/team-3-800x800.jpg"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
		       */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">
                        Francisco José Otero
                      </h5>
                      <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                        Cofundador & CLO
                      </p>
                      <div className="mt-6">
                        <Link
                          href="https://www.linkedin.com/in/francisco-josé-otero-cruz-919678129/"
                          target="_blank"
                        >
                          <button
                            className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    {/*
                    <img
                      alt="..."
                      // src="/img/team-4-470x470.png"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
		    */}
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">
                        Pablo Eduardo del Real Búa
                      </h5>
                      <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
                        Cofundador & CMO
                      </p>
                      <div className="mt-6">
                        <Link
                          href="https://www.linkedin.com/in/pablo-eduardo-del-real-7b8214245"
                          target="_blank"
                        >
                          <button
                            className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
