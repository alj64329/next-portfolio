import { Metadata } from "next";
import AboutHero from "../components/AboutHero";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Ayaka Miyazaki - About",
  description: "Know more anout me",
};



export default function About() {
  return (
    <>
    <div className="bg-black text-white">
    <Header />
    <AboutHero />
    <Description />
    <Footer />
    </div>
    </>

  );
}
