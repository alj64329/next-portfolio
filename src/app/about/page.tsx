import { Metadata } from "next";
import AboutHero from "../components/About/AboutHero";
import Description from "../components/About/Description";

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
