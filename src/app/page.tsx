import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      <div className="about-proj-wrapper bg-[url(/bg-black-wave.svg)] bg-cover md:pb-[2rem] max-w-[2000px]">
        <About />
        <Project />
      </div>
      <Contact />
      <Footer isDark={false}/>
    </>
);
}
