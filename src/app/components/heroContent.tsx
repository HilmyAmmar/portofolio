import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

interface HeroContentProps {
  setName: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<boolean>>;
  name: boolean;
  title: boolean;
}

export const HeroContent: React.FC<HeroContentProps> = ({ setName, setTitle, name, title }) => (
  <>
    <div className="w-[80vw] lg:w-[60vw]">
      <TextGenerateEffect
        words={"Hi, I'm "}
        className="text-xl text-blue-200"
        onFinished={() => setName(true)}
      />
      {name && (
        <TextGenerateEffect
          words={"Hilmy Ammar Darmawan"}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-t from-gray-100 via-sky-300 to-sky-600 bg-clip-text text-transparent"
          onFinished={() => setTitle(true)}
        />
      )}
    </div>

    {title && (
      <div className="flex justify-end pt-[3vh]">
        <ContainerTextFlip
          words={[
            "Software Engineer",
            "Frontend Engineer",
            "Backend Engineer",
            "Mobile Engineer",
          ]}
          className="p-2"
          textClassName="text-xl text-[#000B18] dark:text-blue-400"
        />
      </div>
    )}
  </>
);
