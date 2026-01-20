import { IconType } from "react-icons"
import { FaWifi } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoBatteryHalfOutline } from "react-icons/io5";
import { IoFolderOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
export interface NavLinkType {
    id: number,
    name:string,
    type:string
}

export interface NavIconType {
    id:number,
    icon:IconType
}


export interface TechStackType{
    category:string,
    items:string[]
}

const navLinks:NavLinkType[]= [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons:NavIconType[] = [
  {
    id: 1,
    icon:FaWifi,
  },
  // {
  //   id: 2,
  //   icon:CiSearch,
  // },
  {
    id: 3,
    icon:HiOutlineSpeakerWave,
  },
  {
    id: 4,
    icon: IoBatteryHalfOutline,
  },
];
const phoneNavIcons:NavIconType[] = [
  {
    id:1,
    icon:BsFillBarChartFill
  },
  {
    id: 2,
    icon:FaWifi,
  },
  {
    id: 3,
    icon: IoBatteryHalfOutline,
  },
];

const techStack:TechStackType[]= [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];


export {
  navLinks,
  navIcons,
  phoneNavIcons,
  techStack,
};

export interface LocationType{
  id:number,
  type:string,
  name:string,
  icon:IconType,
  kind:string,
  children:any[]
}

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: IoFolderOutline ,
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "MovieMatch",
      iconImg: "folder_tmrxui",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] left-4", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "MovieMatch Project.txt",
          subtitle:"MovieMatch",
          iconImg: "txt_wq1pxh",
          kind: "file",
          fileType: "txt",
          position: "top-[5%] right-[50%]",
          description: [
            "The MovieMatch is a platform for all movie lovers.",
            "It has an unique feature like random movie picker to pick movies for your movie night.",
            "Basic features like showing top rating, trending movies, finding, filtering, bookmarking movies are also avaialble",
            "It's built with React and Appwrite for backend, ensuring responsive design, and a clean, modern look.",
          ],
        },
        {
          id: 2,
          name: "MovieMatch",
          iconImg: "website_jqzara",
          kind: "file",
          fileType: "url",
          href: "https://react-movie-app-sooty-three.vercel.app",
          position: "top-[5%] left-[5%]",
        },
      ],
    },

    // ▶ Project 2
    // {
    //   id: 6,
    //   name: "AI Resume Analyzer",
    //   iconImg: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[25vh] left-4",
    //   children: [
    //     {
    //       id: 1,
    //       name: "AI Resume Analyzer Project.txt",
    //       iconImg: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-[10%] left-[5%]",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "ai-resume-analyzer.com",
    //       iconImg: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-[20%] left-[20%]",
    //     },
    //   ],
    // },
  ],
};

export const locations = {
  work: WORK_LOCATION,
};

export interface TxtType{
  name:string,
  description:string[],
  image:string,
  subtitle:string
}

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };