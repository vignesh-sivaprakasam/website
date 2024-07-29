import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import IntroCard from "./IntroCard";

const Hero = () => {
  return (
    <div className="mx-auto">
      <IntroCard />
      {/* <div className="flex justify-center relative my-20 z-10">
        <div className="mx-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming concepts into seemless experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg">
            Hi I&apos;m Vignesh, a Next.js Developer based in India
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
