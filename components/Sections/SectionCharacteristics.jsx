import { useState } from "react";
import Link from "next/link";

export default function SectionCharacteristics() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <section className="pt-20 pb-32 bg-blueGray-200" id="caracteristicas">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Características</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                mira las mejores características
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center ">
            <div className="block w-full overflow-x-auto">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
                  <Link
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-blueGray-600"
                        : "text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Plataforma y Seguridad
                  </Link>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
                  <Link
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-blueGray-600"
                        : "text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Legal
                  </Link>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
                  <Link
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-white bg-blueGray-600"
                        : "text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Servicios
                  </Link>
                </li>
              </ul>

              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
                <div className="flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <table className="items-center w-full">
                        <tbody>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check"/>
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 fa  text-xl fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <table className="items-center w-full">
                        <tbody>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check"/>
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 fa  text-xl fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <table className="items-center w-full">
                        <tbody>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check"/>
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 fa  text-xl fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Argon Design System
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
