import Image from "next/image";
import React from "react";
import { projects } from "../constants/projects";

const Project = () => {
  const previewProject = projects[0];

  return (
    <div className="p-[2rem] md:p-[5rem] relative">
      <div className=" relative center z-0">
        <div className="relative project-card z-10 bg-black project-card-md">
          <Image
            src={previewProject.imgUrl}
            alt="placeholder image"
            width={200}
            height={200}
            className="mx-auto md:min-w-[250px] rounded-xl"
          />
          <div className="center md:w-[60%] py-5">
            <div className="heading-text text-center text-3xl">
              {previewProject.projectName}
            </div>
            <div className="text-white py-8 px-5">{previewProject.context}</div>

            <div className="flex gap-4 w-fit rounded-border-black m-auto ">
              <div>
                <div className="font-red">...</div>
                <a href="/Project" className="text-white font-bold">
                  View Projects
                </a>
              </div>
              <Image
                src="/red-arrow.svg"
                alt="Arrow"
                width={30}
                height={30}
                className="mt-3"
              />
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full left-0 rotate-2 project-card-overlay -z-1 bg-black absoluete-x-center"></div>
        <div className="absolute w-full h-full left-0 rotate-4 project-card-overlay z-[-4] absoluete-x-center"></div>
      </div>

      <div className="flex justify-center pt-[5rem]">
        <h3>
          <a href="" className="text-white text-4xl underline">
            All Project
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Project;
