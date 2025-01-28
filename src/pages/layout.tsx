import "./globals.css";
import {Header} from "@/components/header/Header";
import {Providers} from "@/pages/providers";
import {ReactChildren} from "@/typings";
import Head from "next/head";

export default function RootLayout({children}: Readonly<ReactChildren>) {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <main>
        <Providers>
          <Header />
          {children}
        </Providers>
      </main>
    </>
  );
}
