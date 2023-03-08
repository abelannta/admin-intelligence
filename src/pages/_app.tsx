import type { AppProps } from "next/app";
import Head from "next/head";
import NextProgress from "next-progress";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import { GlobalContextProvider } from "src/contexts/globalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5800FF" />
        <meta
          name="description"
          content="Aplikasi pintar untuk peminat tryout soal-soal ujian masuk perguruan tinggi populer di Indonesia dengan fitur yang aplikatif dan adaptif."
        />
        <title>Admin | NineIntelegence</title>
      </Head>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <Toaster />
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
}
