import React, { Suspense } from "react";

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col justify-center py-[5rem]">
        <div className="uppercase self-center">Experience</div>
        <div>
          <ul className="flex gap-[1rem] justify-center">
            <li>JavaScprip</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="py-[5rem] w-full h-[100vh]"></div>
      </div>
    </div>
  );
};

export default Skills;
