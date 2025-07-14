'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView, easeOut } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

import { WavyBackground } from "@/components/ui/wavy-background";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WordRotate } from "@/components/magicui/word-rotate";

import { useMobile } from "../helper/useMobile";

// Lazy load heavy components
const AboutMe = dynamic(() => import("./aboutMe"), { ssr: false });
const GridItem = dynamic(() => import("./cards"), {ssr: false})


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function HomePage({ projects }: { projects: any[] }) {
  const [name, setName] = useState(false);
  const [title, setTitle] = useState(false);

  // Refs and view tracking
  const imgRef = useRef(null);
  const aboutRef = useRef(null);
  const wordRef = useRef(null);
  const gridRef = useRef(null);

  const imgInView = useInView(imgRef, { once: true, amount: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const wordInView = useInView(wordRef, { once: true, amount: 0.2 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 });

  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollHint(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative">
      {/* Hero Section */}
      <WavyBackground backgroundFill="#000B18" containerClassName="h-screen relative">
          <motion.div className="sticky top-0">
            <div className="w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw]">
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
                  words={["Software Engineer", "Frontend Engineer", "Backend Engineer", "Mobile Engineer"]}
                  className="p-2"
                  textClassName="text-xl text-[#000B18] dark:text-blue-400"
                />
              </div>
            )}
          </motion.div>
          {showScrollHint && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            style={{ 
              position: 'fixed', 
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9999 
            }}
          >
            <div className="text-lg text-blue-200 flex flex-col items-center">
              <span className="mb-1">Scroll down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        )}

        </WavyBackground>

      {/* Main Content */}
      <div className="bg-[#000B18] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 w-full">
        {/* Image */}
        <div className="flex flex-col-reverse 2xl:flex-row items-center justify-evenly max-w-8xl mx-auto w-full gap-x-[10vw]">
          {/* About Me */}
          <motion.div
            ref={aboutRef}
            variants={fadeInUp}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            transition={{duration: 1}}
            className="w-[90%] 2xl:w-[50%] h-full 2xl:pl-[10vh]"
          >
            <AboutMe />
          </motion.div>
          {/* Image */}
          <motion.div
            ref={imgRef}
            variants={fadeInUp}
            initial="hidden"
            animate={imgInView ? "visible" : "hidden"}
            transition={{duration: 1}}
            className="flex-shrink-0 rounded-full overflow-hidden mb-6 w-[90%] md:w-[70%] lg:w-[60%] xl:w=[50%] 2xl:w-[35%] 2xl:-ml-50"
          >
            <Image
              src="/image/228494.jpg"
              alt="Hilmy Ammar Darmawan"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Word Rotate */}
        <motion.div
          ref={wordRef}
          variants={fadeInUp}
          initial="hidden"
          animate={wordInView ? "visible" : "hidden"}
          transition={{duration: 1}}
          className="flex flex-row py-12"
        >
          <WordRotate
            className="text-blue-200 text-6xl"
            words={["Featured Project", "Collage Project", "Personal Project"]}
          />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          ref={gridRef}
          variants={fadeInUp}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          transition={{duration: 1}}
          className="grid grid-cols-1 lg:gap-10 gap-10 w-full max-w-6xl mb-10"
        >
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
        </motion.div>
      </div>
      
    </div>
    
  );
}

