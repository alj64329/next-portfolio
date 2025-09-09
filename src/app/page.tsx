import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="">

        <div>
          <Header />
          <Hero />
          <div className="bg-[url(/bg-black-wave.svg)] bg-cover md:pb-[2rem] max-w-[2000px]">
            <About />
            <Project />
          </div>
          <Contact />
          <Footer />

        </div>

      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer> */}
    </div>
  );
}
