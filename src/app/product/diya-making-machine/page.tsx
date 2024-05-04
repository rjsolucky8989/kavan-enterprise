"use client";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import Head from "next/head";

const DiyaMakingMachine = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Diya Making Machine | Kavan Enterprise</title>
        <meta
          name="description"
          content="Discover top-quality Diya making machines from a trusted seller. Shop now for all your Diya machine needs!"
        />
        <meta name="author" content="Kavan Parmar" />
        <meta name="copyright" content="kavanenterprise" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header></Header>

      <Footer />
    </>
  );
};

export default DiyaMakingMachine;
