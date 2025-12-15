interface Project {
  projectName: string;
  url: string;
  context: string;
  skills: string[];
  imgUrl: string;
}

export const projects: Project[] = [
  {
    projectName: "Movie Match",
    url: "https://react-movie-app-sooty-three.vercel.app/",
    context:
      "Movie Match is a simple movie finder that gives users random movie recommendations and helps them decide what to watch. It also includes a watchlist feature so users can save movies for later, avoiding endless browsing.",
    skills: ["React", "Appwrite", "Tailwindcss", "Typescriypt"],
    imgUrl: "/project1-img.png",
  },
];
