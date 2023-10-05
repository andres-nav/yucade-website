import { useState } from "react";

export default function SectionCharacteristics() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <section className="pb-6 lg:pb-32 bg-blueGray-200" id="caracteristicas">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Características</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500"></p>
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
                  <a
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
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
                  <a
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
                  </a>
                </li>
              </ul>

		{/* Do it in two columns*/}
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
                              Privacidad y seguridad de datos.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Mantenimiento 24 h.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 fa  text-xl fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Servicio web personalizado para su empresa.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Aplicación de uso intuitivo y fácil.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Actualizaciones y desarrollo incluido.
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
                              Garantía y seguridad jurídica.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Asesoría personalizada, 24 h contigo.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 fa  text-xl fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Gestión tramitación y archivo de denuncias.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Resolucion de conflictivos de todo tipo de
                              materias.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Equipo de abogados por toda España.
                            </th>
                            <td className="px-6">
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
                            </td>
                          </tr>

                          <tr className="bg-blueGray-100">
                            <th className="px-6 align-middle text-sm whitespace-nowrap p-4 text-left flex items-center">
                              Máxima garantía gracias nuestros expertos.
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
                              <i className="text-blueGray-800 pr-6 text-xl fa fa-check" />
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
