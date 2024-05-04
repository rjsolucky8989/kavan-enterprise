import { Footer } from "@/app/components/common/Footer";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Diya Making Machine | Kavan Enterprise",
  description:
    "Discover top-quality Diya making machines from a trusted seller. Shop now for all your Diya machine needs!",
  robots: "index, follow",
};

const DiyaMakingMachine = () => {
  return (
    <>
      <Header></Header>
      <h1>Diya Making Machine</h1>

      <Footer />
    </>
  );
};

export default DiyaMakingMachine;
