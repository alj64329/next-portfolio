"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import React, { useEffect } from "react";

const Description = () => {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".descreption-sec",
  //       scrub: true,
  //       start: "top top",
  //       pin: true,
  //     },
  //   });

  //   tl1.from(".content div", {
  //     y: "100vh",
  //     opacity: 0,
  //     stagger: 2,
  //   });
  // });
  return (
    <div className="bg-[url(/bg-grey-wave.svg)] bg-cover py-[10rem] md:pt-[15rem] descreption-sec">
      <div className="flex flex-col md:flex-row px-[3rem] md:px-[5rem] gap-[2rem]">
        <div className="flex flex-col">
          <Image
            src="/pixeltrue-web-development.svg"
            alt="Programmer image"
            width={500}
            height={500}
            className="self-center min-w-[500px]"
          />
          <div className="self-center text-sm">
            Illustration by Pixeltrue Ouch!
          </div>
        </div>

        <div className="flex justify-center md:justify-start w-full">
          <div className="content center gap-5 md:gap-[2rem] md:max-w-[900px] md:text-2xl overflow-hidden">
            <div>
              I’m a Junior Web Developer with a Bachelor’s degree in Mathematics and hands-on experience building practical tools and web applications.
              I enjoy turning ideas into working, user-friendly code.
            </div>

            <div>
              My experience includes creating internal automation tools and enterprise dashboards using JavaScript, Google Apps Script, and Ext JS. 
              I’ve built project allocation apps, expense report generators, and vendor dashboards that streamline workflows and support real business operations.
            </div>

            <div>
              I am curious and enjoy solving problems, and love learning new technologies. 
              My goal is to apply my problem-solving skills, creativity, and dedication to building applications that are both functional and user-friendly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
