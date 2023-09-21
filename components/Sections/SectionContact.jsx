import Link from "next/link";

export default function SectionContact() {
  const sendContactInfo = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const business = form.business.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    if (name === "" || business === "" || email === "" || phone === "") return;

    const subject = `Nuevo contacto: ${name} - ${business}`;
    const messageToSend = `Nombre: ${name}
      Empresa: ${business}
      Email: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
    `;

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        message: messageToSend,
        subject: subject,
      }),
    })
      .then((res) => {
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <>
      <section className="pb-20 relative block bg-slate-800" id="contacto">
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
              className="text-slate-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 pt-8 lg:pt-12 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-2xl font-semibold text-white">
                Haga como miles de empresas que utilizan un canal de denucias
                para reducir los comportamientos inadecuados
              </h4>
              <p className="leading-relaxed mt-1 mb-4 text-slate-200">
                Deja tu información a continuación o envia un correo electrónico
                a{" "}
                <span className="font-semibold">
                  <Link href="mailto:contacto@yucade.com">
                    contacto@yucade.com
                  </Link>
                </span>{" "}
                y nos pondremos en contacto con Ud.
              </p>

              <div className="relative flex flex-col min-w-0 break-words w-full mt-6 shadow-lg rounded-lg bg-slate-200">
                <div className="flex-auto p-5 lg:p-10 text-left">
                  <form onSubmit={sendContactInfo}>
                    <div className="relative w-full mb-3 ">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nombre Completo"
                      />
                    </div>

                    <div className="relative w-full mb-3 ">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Empresa / organización
                      </label>
                      <input
                        name="business"
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nombre de la empresa"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Escribe su mensaje..."
                      />
                    </div>

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-3 text-sm font-semibold text-slate-600">
                          * Al rellenar el formulario, acepto recibir
                          comunicaciones y las{" "}
                          <Link
                            href=""
                            className="text-sky-500"
                            onClick={(e) => e.preventDefault()}
                          >
                            Políticas de Privacidad
                          </Link>
                          .
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
