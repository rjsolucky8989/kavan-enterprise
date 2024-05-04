import { Footer } from "@/app/components/common/Footer";
import { Header } from "@/app/components/common/Header";
import { DiyaMakingMachine } from "@/app/components/product/DiyaMakingMachine";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Diya Making Machine | Kavan Enterprise",
  description:
    "Discover top-quality Diya making machines from a trusted seller. Shop now for all your Diya machine needs!",
  robots: "index, follow",
  keywords: [
    "Diya Making Machine",
    "Diya Machine",
    "Thangadh Diya Making Machine",
  ],
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
