import React from "react";
import Link from "next/link";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <Navbar />

      <main>
        <div className="relative pt-32 pb-16 flex content-center items-center justify-center">
          <h1 className="font-bold uppercase text-4xl">
            Políticas de Privacidad de Yucade
          </h1>
        </div>
        <div className="w-75 items-center flex">
          <h2>Sobre Nosotros</h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
