import "../styles/app.scss";
import Head from "next/head";
import { NavContextProvider } from "../contexts/navContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Villa Azzur</title>
      </Head>
      <NavContextProvider>
        <Component {...pageProps} />
      </NavContextProvider>
    </>
  );
}

export default MyApp;
