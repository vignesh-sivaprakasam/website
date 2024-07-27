import React from "react";

import Image from "next/image";

const IntroText = () => {
  return (
    <div className="flex flex-col justify-between gap-5 flex-1">
      <h1 className="font-semibold text-5xl">
        <div className="leading-tight">Hey there, I&apos;m</div>
        <div className="leading-tight highlight">Vignesh M</div>
      </h1>
      <div className="leading-relaxed text-gray-400 text-lg">
        I&apos;m passionate front end developer based out of Chennai, currently
        working with awesome folks at Twilio.
      </div>
      <button className="bg-white text-black p-3 px-5 rounded-full w-fit font-medium zoom hover:bg-gray-200">
        Download CV
      </button>
    </div>
  );
};

const Photo = () => {
  return (
    <div className="flex-1 flex justify-center">
      <Image
        src="/photo.jpg"
        width={300}
        height={300}
        className="rounded-full"
        alt={"Profile image"}
      />
    </div>
  );
};

const IntroCard = () => {
  return (
    <div className="relative flex">
      <IntroText />
      <Photo />
    </div>
  );
};

export default IntroCard;
