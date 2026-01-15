
import { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectHero from "../components/Projects/ProjectHero";
import ProjectWindow from "../components/Projects/ProjectWindow";


export const metadata: Metadata = {
  title: "Ayaka Miyazaki - Project",
  description: "My projects",
};


export default function Projects() {
  return (
    <>
    <div className="text-white h-full">
      <Header />
      <ProjectHero />
      <div className="pt-11 pb-8">
        <ProjectWindow/>
      </div>
    </div>
    </>

  );
}
