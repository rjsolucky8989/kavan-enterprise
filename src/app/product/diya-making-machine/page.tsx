import { Footer } from "@/app/components/common/Footer";
import { Header } from "@/app/components/common/Header";
import { DiyaMakingMachine } from "@/app/components/product/DiyaMakingMachine";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Diya Making Machine | Kavan Enterprise",
  description:
    "Multi Purpose Manual Diya Making Machine is very useful to make Diyas. By using Different Die (Mold) it can Produce : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters etc.",
  robots: "index, follow",
  keywords: [
    "Diya Making Machine",
    "Diya Machine",
    "Thangadh Diya Making Machine",
    "Deepak/Diya",
    "Kullad",
    "Kitkat fuse",
    "Ceramic",
    "foundry filters",
  ],
  openGraph: {
    type: "website",
    url: "https://kavanenterprise.com/product/diya-making-machine",
    title: "Diya Making Machine",
    description:
      "Multi Purpose Manual Diya Making Machine is very useful to make Diyas. By using Different Die (Mold) it can Produce : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters etc.",
    siteName: "Diya Making Machine | Kavan Enterprise",
    images: [
      {
        url: "https://kavanenterprise.com/diya-making-machine-1.jpeg",
      },
    ],
  },
  twitter: {
    site: "https://kavanenterprise.com/product/diya-making-machine",

    description:
      "Multi Purpose Manual Diya Making Machine is very useful to make Diyas. By using Different Die (Mold) it can Produce : Deepak/Diya, Kullad, Kitkat fuse, Ceramic foundry filters etc.",
    title: "Diya Making Machine",
    images: "https://kavanenterprise.com/diya-making-machine-1.jpeg",
  },
};

const DiyaMakingMachinePage = () => {
  return (
    <>
      <Header></Header>
      <DiyaMakingMachine />
      <Footer />
    </>
  );
};

export default DiyaMakingMachinePage;
