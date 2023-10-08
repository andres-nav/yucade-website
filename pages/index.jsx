import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import SectionCharacteristics from "components/Sections/SectionCharacteristics";
import SectionInfo from "components/Sections/SectionInfo";
import SectionPrices from "components/Sections/SectionPrices";
import SectionContact from "components/Sections/SectionContact";
import SectionAboutUs from "components/Sections/SectionAboutUs";

export default function Index() {
  return (
    <>
      <Navbar />

      <main>
        {
          // Entry page
        }
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/front.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="mt-10">
                  <h1 className="text-white font-semibold text-5xl">
                    Yucade, tu canal de denuncias
                  </h1>
                  <a href="/#contacto">
                    <button className="bg-white text-slate-800 active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 mt-24 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      ¡Pidelo ya!
                    </button>
                  </a>
                  <Link href="https://demo.yucade.com" target="_blank">
                    <button className="bg-gray-800 text-slate-200 active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 mt-24 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Pruébalo ahora
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute overflow-hidden h-16"
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
        </div>

        {
          // Entry page
        }
        <SectionInfo />
        <SectionCharacteristics />
        <SectionPrices />
        <SectionContact />
        <SectionAboutUs />
      </main>
      <Footer />
    </>
  );
}
