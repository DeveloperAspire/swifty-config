import React from "react";
import Head from "next/head";
import "../style/global.css";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template Next.js | TypeScript</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
