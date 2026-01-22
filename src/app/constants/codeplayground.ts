export interface FnType {
    id:string
    name:string
    fileName:string
    comment:string
    fn:string
    output:OutputType[]
}

interface OutputType{
   head?:string,
   points:string[]
}
export const files:FnType[]=[
    {
        id:'about-script',
        name:"about",
        fileName:"AboutMe.js",
        fn:"aboutMe()",
        comment:"This will return about me..",
        output:[
            {
                head:"About Me",
                points:[
                    "Hi, I am Ayaka.",
                    "I am a junior web developer located in Vancouver, BC"
                ],
            }

        ]
    },
    {
        id:"techStach-script",
        name:"techStack",
        fileName:"TechStack.js",
        fn:"showTechStack()",
        comment:"Know my techStack",
        output:[
            {
                head:"TECHSTACK",
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
        comment:"Here is my experiences",
        output:[
            {
                head:"Junior Web Developer @ FreeLiveNet Technology Corp",
                points:[
                    ""
                ]
            }
        ]
    },
]