import { Metadata } from "next";
import AboutHero from "../components/About/AboutHero";
import Description from "../components/About/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/About/Skills";

export const metadata: Metadata = {
  title: "Ayaka Miyazaki - About",
  description: "Know more anout me",
};

export default function About() {
  return (
    <>
      <div className="bg-black text-white">
        <AboutHero />
        <Description />
      </div>
    </>
  );
}
