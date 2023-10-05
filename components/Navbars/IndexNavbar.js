import React from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xl uppercase font-bold"
              href="/"
            >
              Yucade
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border
              border-solid border-transparent rounded bg-transparent block
              lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/*
              <li className="flex items-center">
                <Link
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/yucade"
                  target="_blank"
                >
                  <i className="text-slate-400 fab fa-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Linkedin</span>
                </Link>
              </li>

		    <li className="flex items-center">
			<Link
			    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
			    href="https://twitter.com/yucadesl"
			    target="_blank"
			>
			    <i className="text-slate-400 fab fa-twitter text-lg leading-lg " />
			    <span className="lg:hidden inline-block ml-2">Twitter</span>
			</Link>
		    </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://wa.me/+34666666666"
                  target="_blank"
                >
                  <i className="text-slate-400 fab fa-whatsapp text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Whatsapp</span>
                </Link>
              </li>

		*/}

              <li className="flex items-center">
                <Link
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#caracteristicas"
                >
                  Características
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#precios"
                >
                  Precios
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#contacto"
                >
                  Contacto
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#sobre-nosotros"
                >
                  Sobre Nosotros
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="https://demo.yucade.com" target="_blank">
                  <button
                    className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Demo
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
