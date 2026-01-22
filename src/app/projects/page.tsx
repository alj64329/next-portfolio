
import { Metadata } from "next";
import ProjectWindow from "../components/Projects/ProjectWindow";
import ProjectMobile from "../components/Projects/ProjectHero";
import ProjectHero from "../components/Projects/ProjectHero";
import ProjectPhone from "../components/Projects/ProjectPhone";


export const metadata: Metadata = {
  title: "Ayaka Miyazaki - Project",
  description: "My projects",
};


export default function Projects() {
  return (
    <>
    <div className="text-white h-full">
      <ProjectHero />

      <div className="py-12 md:hidden">
        <ProjectPhone/>
      </div>

      <div className="py-11 hidden md:block">
        <ProjectWindow/>
      </div>
    </div>
    </>

  );
}
