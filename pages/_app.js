import "../styles/app.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Villa Azzur</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
