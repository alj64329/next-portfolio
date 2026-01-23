
import React from "react";
import CodePlayGround from "./codePlayground/CodePlayGround";

const Description = () => {
  return (
    <div className="bg-[url(/bg-grey-wave.svg)] bg-cover py-[10rem] md:pt-[15rem] descreption-sec">
      {/* code playground section */}
      <div>
        <CodePlayGround/>
      </div>
    </div>
  );
};

export default Description;
