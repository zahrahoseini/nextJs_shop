import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>product&apos;s title</title>
        <meta name="description" content="product's description" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
