
import { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectHero from "../components/ProjectHero";


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

    <Footer isDark={true}/>
    </div>
    </>

  );
}
