'use client';

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView, easeOut } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

import { WavyBackground } from "@/components/ui/wavy-background";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HyperText } from "@/components/magicui/hyper-text";
import { WordRotate } from "@/components/magicui/word-rotate";

import { GridItem } from "./cards";
import { useMobile } from "../helper/useMobile";

// Lazy load heavy components
const AboutMe = dynamic(() => import("./aboutMe"), { ssr: false });
const MarqueeComponent = dynamic(() =>
  import("./marquee").then(mod => mod.MarqueeComponent),
  { ssr: false }
);


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
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMobile(); // ✅ Properly call useMobile

  // Refs and view tracking
  const imgRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const marqueeRef = useRef(null);
  const wordRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imgInView = useInView(imgRef, { once: true, amount: 0.1 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const techInView = useInView(techRef, { once: true, amount: 0.1 });
  const marqueeInView = useInView(marqueeRef, { once: true, amount: 0, margin: "0px 0px -50px 0px" });
  const wordInView = useInView(wordRef, { once: true, amount: 0.1 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const [marqueeVisible, setMarqueeVisible] = useState(false);

  useEffect(() => {
    if (!isClient || !marqueeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMarqueeVisible(true);
        }
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0 }
    );

    observer.observe(marqueeRef.current);
    return () => observer.disconnect();
  }, [isClient]);

  return (
    <div className="relative bg-gradient-to-b from-[#000B18] via-[#001122] to-[#000B18]">
      {/* Hero Section */}
      {!isMobile ? (
        <WavyBackground backgroundFill="#000B18" containerClassName="h-screen">
          <motion.div className="sticky top-0">
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
                  words={["Software Engineer", "Frontend Engineer", "Backend Engineer", "Mobile Engineer"]}
                  className="p-2"
                  textClassName="text-xl text-[#000B18] dark:text-blue-400"
                />
              </div>
            )}
          </motion.div>
        </WavyBackground>
      ) : (
        <div className="h-screen flex items-center justify-center bg-[#000B18]">
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
            {title && (
              <div className="flex justify-end pt-[3vh]">
                <ContainerTextFlip
                  words={["Software Engineer", "Frontend Engineer", "Backend Engineer", "Mobile Engineer"]}
                  className="p-2"
                  textClassName="text-xl text-blue-400"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-[#000B18] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12">
        {/* Image */}
        <motion.div
          ref={imgRef}
          variants={fadeInUp}
          initial="hidden"
          animate={imgInView ? "visible" : "hidden"}
        >
          <Image
            src="/image/228494.jpg"
            alt="Hilmy Ammar"
            width={384}
            height={320}
            className="rounded-full object-cover"
          />
        </motion.div>

        {/* About Me */}
        <motion.div
          ref={aboutRef}
          variants={fadeInUp}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
        >
          <AboutMe />
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          ref={techRef}
          variants={fadeInUp}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
          className="w-full py-12"
        >
          <HyperText className="text-blue-200 text-center">Tech Stack</HyperText>
        </motion.div>

        {/* Marquee */}
        <motion.div
          ref={marqueeRef}
          variants={fadeInUp}
          initial="hidden"
          animate={marqueeInView || marqueeVisible ? "visible" : "hidden"}
          className="min-h-[1px]"
        >
          <MarqueeComponent />
        </motion.div>

        {/* Word Rotate */}
        <motion.div
          ref={wordRef}
          variants={fadeInUp}
          initial="hidden"
          animate={wordInView ? "visible" : "hidden"}
          className="flex flex-row py-12"
        >
          <WordRotate
            className="text-blue-200 text-4xl"
            words={["Featured Project", "Collage Project", "Personal Project"]}
          />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          ref={gridRef}
          variants={fadeInUp}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
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
