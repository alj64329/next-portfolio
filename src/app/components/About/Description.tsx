"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import React, { useEffect } from "react";
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
