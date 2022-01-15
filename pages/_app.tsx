import "../styles/globals.css";
import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
