import { IconType } from "react-icons"
import { FaWifi } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoBatteryHalfOutline } from "react-icons/io5";
import { IoFolderOutline } from "react-icons/io5";
export interface NavLinkType {
    id: number,
    name:string,
    type:string
}

export interface NavIconType {
    id:number,
    icon:IconType
}

export interface DockAppType{
    id:string,
    name:string,
    icon:string,
    canOpen:boolean
}

export interface BlogPostType{
    id:number,
    date:string,
    title:string,
    image:string,
    link:string
}

export interface TechStackType{
    category:string,
    items:string[]
}

export interface PhotoLinkType{
    id:number,
    icon:string,
    title:string
}

export interface GalleryType{
    id:number,
    img:string
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
      iconImg: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] left-4", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          iconImg: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          iconImg: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 left-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: IoFolderOutline ,
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-4",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          iconImg: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          iconImg: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          iconImg: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          iconImg: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },
  ],
};

// const ABOUT_LOCATION = {
//   id: 2,
//   type: "about",
//   name: "About me",
//   icon: "/icons/info.svg",
//   kind: "folder",
//   children: [
//     {
//       id: 1,
//       name: "me.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-10 left-5",
//       imageUrl: "/images/adrian.jpg",
//     },
//     {
//       id: 2,
//       name: "casual-me.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-28 right-72",
//       imageUrl: "/images/adrian-2.jpg",
//     },
//     {
//       id: 3,
//       name: "conference-me.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-52 left-80",
//       imageUrl: "/images/adrian-3.jpeg",
//     },
//     {
//       id: 4,
//       name: "about-me.txt",
//       icon: "/images/txt.png",
//       kind: "file",
//       fileType: "txt",
//       position: "top-60 left-5",
//       subtitle: "Meet the Developer Behind the Code",
//       image: "/images/adrian.jpg",
//       description: [
//         "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
//         "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
//         "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
//         "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
//       ],
//     },
//   ],
// };

// const RESUME_LOCATION = {
//   id: 3,
//   type: "resume",
//   name: "Resume",
//   icon: "/icons/file.svg",
//   kind: "folder",
//   children: [
//     {
//       id: 1,
//       name: "Resume.pdf",
//       icon: "/images/pdf.png",
//       kind: "file",
//       fileType: "pdf",
//       // you can add `href` if you want to open a hosted resume
//       // href: "/your/resume/path.pdf",
//     },
//   ],
// };

// const TRASH_LOCATION = {
//   id: 4,
//   type: "trash",
//   name: "Trash",
//   icon: "/icons/trash.svg",
//   kind: "folder",
//   children: [
//     {
//       id: 1,
//       name: "trash1.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-10 left-10",
//       imageUrl: "/images/trash-1.png",
//     },
//     {
//       id: 2,
//       name: "trash2.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-40 left-80",
//       imageUrl: "/images/trash-2.png",
//     },
//   ],
// };

export const locations = {
  work: WORK_LOCATION,
  // about: ABOUT_LOCATION,
  // resume: RESUME_LOCATION,
  // trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };