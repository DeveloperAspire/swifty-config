import React from "react";
import Head from "next/head";
import "../style/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Template Next.js</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
