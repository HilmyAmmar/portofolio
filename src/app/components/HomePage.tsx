'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import { WavyBackground } from "@/components/ui/wavy-background";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HyperText } from "@/components/magicui/hyper-text";
import { WordRotate } from "@/components/magicui/word-rotate";

import { GridItem } from "./cards";
import { MarqueeComponent } from "./marquee";
import AboutMe from "./aboutMe"; 

export default function HomePage({ projects }: { projects: any[] }) {

  const [name, setName] = useState(false);
  const [title, setTitle] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 min-h-screen">
      <WavyBackground backgroundFill="#000B18">
        <motion.div className="sticky top-0">
          <div className="w-[80vw] lg:w-[60vw]">
            <TextGenerateEffect words={"Hi, I'm "} className="text-xl text-blue-200 " onFinished={() => setName(true)} />
            {name && (
              <TextGenerateEffect
                words={"Hilmy Ammar Darmawan"}
                className="text-7xl bg-gradient-to-t from-gray-100 via-sky-300 to-sky-600 bg-clip-text text-transparent"
                onFinished={() => setTitle(true)}
              />
            )}
          </div>

          {title && (
            <div className="flex justify-end pt-[3vh]">
              <ContainerTextFlip
                words={["Software Engineer", "Frontend Engineer", "Backend Engineer", "Mobile Engineer"]}
                className="p-2"
                textClassName="text-xl text-[#000B18] dark:text-blue-400"
              />
            </div>
          )}
        </motion.div>
      </WavyBackground>

      <div className="flex">
        <img className="rounded-full w-96 h-80" src="/image/228494.jpg" alt="image description" />
      </div>

      <AboutMe />
      <div className="m-10">
        <HyperText className="text-blue-200">Tech Stack</HyperText>
      </div>

      <MarqueeComponent />

      <div className="flex flex-row m-10">
        <WordRotate className="text-blue-200 text-4xl" words={["Featured Project", "Collage Project", "Personal Project"]} />
      </div>

      <div className="grid grid-cols-1 lg:gap-10 gap-10 w-full max-w-6xl mb-10">
        {projects.map((project, index) => (
          <GridItem
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            highlights={project.highlights}
            contribution={project.contribution}
            link={project.links}
            image={project.images}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
