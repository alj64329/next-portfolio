export interface FnType {
    id:string
    name:string
    fileName:string
    comment:string
    fn:string
    outputHead:string
    output:OutputType[]
}

interface OutputType{
   head?:string,
   subtext?:string
   points:string[]
}
export const files:FnType[]=[
    {
        id:'about-script',
        name:"about",
        fileName:"AboutMe.js",
        fn:"aboutMe()",
        comment:"Run the function to know about me...",
        outputHead:"About Me",
        output:[
            {
                points:[
                    "Hi, I am Ayaka.",
                    "I am a junior web developer located in Vancouver, BC",
                    "I have a background in Mathematics and love problem-solving!",
                ],
            }

        ]
    },
    {
        id:"techStach-script",
        name:"techStack",
        fileName:"TechStack.js",
        fn:"showTechStack()",
        comment:"Run the function to see my techStack",
        outputHead:"TECHSTACK",
        output:[
            {
                points:[
                    "JavaScript", 
                    "Typescript",
                    "HTML",
                    "CSS",
                    "Ext JS",
                    "React",
                    "Next JS",
                    "Tailwind CSS",
                    "REST APIs",
                    "SQL",
                    "MongoDB"
                ]
            }
        ]
    },
    {
        id:"experience-script",
        name:"experiences",
        fileName:"Experiences.js",
        fn:"myExperience()",
        comment:"Run the function for my experiences",
        outputHead:"experiences",
        output:[
            {
                head:"Junior Web Developer @ FreeLiveNet Technology Corp",
                subtext:"2025-12 - Current",
                points:[
                    "Developing a vendor-focused dashboard for a logistics company",
                    "Working within an existing EXT JS frontend framework",
                    "Ensuring consistent, accessible, and user-friendly interfaces following company UI patterns"
                ]
            },
            {
                head:"Operations Automation Assistant @ Aurora Solution",
                subtext:'2024-01 - 2025-04',
                points:[
                    "Developed custom scripts using Google Apps Script and JavaScript to streamline internal workflows",
                    "Built an Automation Tool, reducing manual working time.",
                    "Developed a dynamic Project Allocation tool that loads data and generates monthly, weekly, and daily views."
                ]
            }
        ]
    },
]