import App from "next/app";
import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Yucade</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
