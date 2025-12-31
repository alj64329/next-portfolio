import Image from "next/image";
import React from "react";

// Prop, text, mode, href
type ButtonProps = {
  text: string;
  isSubmit: boolean;
};

//This button is used on View about and contact form
const Button = ({ text, isSubmit }: ButtonProps) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className="w-fit rounded-border flex m-auto gap-2 mb-6 cursor-pointer items-center"
    >
      <div>
        <div className="font-red">...</div>
        {!isSubmit ? (
          <a href="/about" className="w-fit font-bold">
            {text}
          </a>
        ) : (
          <span className="w-fit font-bold">{text}</span>
        )}
      </div>

      <Image
        src="/red-arrow.svg"
        alt="Arrow"
        width={30}
        height={30}
        className="max-h-[35px]"
      />
    </button>
  );
};

export default Button;
