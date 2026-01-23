"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Hero />
      <div className="about-proj-wrapper bg-[url(/bg-black-wave.svg)] bg-cover md:pb-[2rem] max-w-[2000px]">
        <About />
        <Project />
      </div>
      <Contact />
    </>
  );
}
