"use client";
import { useEffect, useState } from "react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "usehooks-ts";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const Hero = () => {
  // const [position, setPosition] = useState<number | null>(null);
  const [showCanvas, setShowCanvas] = useState(false)

  
  useEffect(() => {
    // const element = document.querySelector(".heading-text");
    // const rect = element?.getBoundingClientRect();
    // setPosition(rect?.bottom ?? null);
    setShowCanvas(true)
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="max-w-[2000px]">
        <div className="pt-[5rem] pb-[15rem] w-full h-[100vh] flex flex-col justify-center">
          <div className="heading-text text-[70px] text-center z-10 md:text-[100px] lg:text-[160px] leading-[0.9]">
            Web
            <br />
            <span className="uppercase">Developer</span>
          </div>
          <div className="absolute w-full" style={{ height: "100vh" }}>
            {showCanvas&&<Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <Suspense fallback={null}>
                <Laptop
                  position={[0, isMobile ? -2.5 : -4, 0]}
                  rotation={[0, 0, 0]}
                  scale={isMobile ? 1.4 : 1.8}
                />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>}
          </div>

          {/* <div className='flex justify-center w-full absolute top-87 md:top-[42%]'>
            </div> */}

          <div className="text-3xl pt-[1rem] flex justify-center absolute left-1/2 bottom-[170px] md:bottom-[50px]">
            <div className="rounded-border z-22">
              <div className="text-xl font-red font-bold">...</div>
              <a href="#contact" className="text-xl font-bold ">
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <Image
            src="images/blue-circle.svg"
            alt="blue string image"
            fill
            className="opacity-25 absolute top-[2rem] -z-10 object-cover md:hidden"
          />
          {/* Medium to Large screen */}
          <Image
            src="images/blue-circle.svg"
            alt="blue string image"
            width={600}
            height={600}
            className="opacity-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 object-cover hidden md:object-none md:block"
          />
          <CldImage
            src="blue-string_sjlrid"
            alt="blue string image"
            fill
            className="opacity-50 absolute top-0 z-20 object-cover hidden md:block max-w-[2000px] mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
