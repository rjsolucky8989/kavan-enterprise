import Diya from "@/app/components/product/Diya";
import { Footer } from "@/app/components/common/Footer";
import { Header } from "@/app/components/common/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Diya & Mitti Diya Shop | Kavan Enterprise",
  description:
  "Discover exquisite Diya & Mitti Diyas. Handcrafted with love, perfect for festive occasions. Illuminate your home with warmth and joy!",
  robots: "index, follow",
  keywords: [
    "Diya",
    "Mitti Diya",
    "Traditional Diya",
    "Clay Diya",
    "Terracotta Diya",
    "Handmade Diya",
    "Decorative Diya",
    "Diya for Diwali",
    "Diya Lamp",
    "Religious Diya",
    "Festival Diya",
    "Puja Diya",
    "Diya Set",
    "Diya Decoration",
    "Diya Design",
    "Oil Diya",
    "Ghee Diya",
    "Electric Diya",
    "Floating Diya",
    "Hanging Diya",
    "Diya Candle",
    "Diya Holder",
    "Diya Plate",
    "Diya Stand",
    "Diya Making",
    "Diya Craft",
    "Diya Painting",
    "Diya Art",
    "Diya DIY",
    "Diya Painting Ideas",
    "Diya Decoration Ideas",
    "Diya Painting Designs",
    "Diya Arrangement",
    "Diya Lighting",
    "Diya Ceremony",
    "Diya Festival",
    "Diya Symbolism",
    "Diya Significance",
    "Diya Meaning",
    "Diya in Hinduism",
    "Diya in Indian Culture",
    "Diya Rituals",
    "Diya Traditions",
    "Diya Worship",
    "Diya Offering",
    "Diya Prayer",
    "Diya Meditation",
    "Diya Spiritual",
    "Diya Blessings",
    "Diya Enlightenment",
  ],
  openGraph: {
    type: "website",
    url: "https://kavanenterprise.com/product/diya",
    title: "Premium Diya & Mitti Diya Shop | Kavan Enterprise",
    description:
    "Illuminate Your Celebrations: Explore our premium Diya & Mitti Diya collection and add a touch of elegance to your festivities. Handcrafted with love and crafted from eco-conscious materials, our Diya & Mitti Diya bring the essence of tradition to life. Shop now and light up your celebrations in style!",
    siteName: "Shop the Finest Diya & Mitti Diya Collection: Traditional, Handmade, and Eco-friendly | Kavan Enterprise",
    images: [
      {
        url: "https://cdn.easyfrontend.com/pictures/products/aroma1.jpg",
      },
    ],
  },
  twitter: {
    site: "https://kavanenterprise.com/product/diya",

    description:
    "Illuminate Your Celebrations: Explore our premium Diya & Mitti Diya collection and add a touch of elegance to your festivities. Handcrafted with love and crafted from eco-conscious materials, our Diya & Mitti Diya bring the essence of tradition to life. Shop now and light up your celebrations in style!",
    title: "Premium Diya & Mitti Diya Shop | Kavan Enterprise",
    images: "https://cdn.easyfrontend.com/pictures/products/aroma1.jpg",
  },
};

const DiyaPage = () => {
  return (
    <>
      <Header />
      <Diya />
      <Footer />
    </>
  );
};

export default DiyaPage;
