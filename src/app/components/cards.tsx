'use client';

import { Card, CardBody, CardHeader } from "@heroui/card";
import { useState } from "react";
import ImageCarousel from "./cardImages";

interface ProjectItemProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string;
  contribution: string;
  link?: string[];
  image?: string[];
  technologies: string[];
}

export const GridItem = ({
  title,
  subtitle,
  description,
  highlights,
  contribution,
  link,
  image,
  technologies,
}: ProjectItemProps) => {
  const [more, setMore] = useState(false);

  return (
    <Card className="relative flex w-full flex-col justify-between rounded-3xl bg-blue-100 py-2 px-2 lg:px-16 lg:py-16 max-w-5xl mx-auto shadow-xl transition-transform duration-300 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
      <CardHeader className="flex-col items-start pb-0">
        <p className="text-xl lg:text-2xl font-bold uppercase text-[#144272]">{title}</p>
        <small className="text-base text-gray-700 dark:text-gray-400">{subtitle}</small>
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-[#144272] px-3 py-1 text-sm lg:text-base font-semibold text-gray-100 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardHeader>

      <CardBody className="pt-8 pb-4 text-base lg:text-lg leading-relaxed">
        <h2 className="font-semibold text-xl mb-3">Overview</h2>
        <p>{description}</p>

        {!more && (
          <button
            onClick={() => setMore(true)}
            className="inline-flex items-center w-fit p-3 mt-6 text-base font-medium text-white bg-[#144272] rounded-lg"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-4 h-4 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        )}

        {more && (
          <>
            <h2 className="font-semibold text-xl mt-8 mb-2">Highlights</h2>
            <p>{highlights}</p>

            <h2 className="font-semibold text-xl mt-8 mb-2">What I Did</h2>
            <p className="mb-6">{contribution}</p>

            {image && <ImageCarousel images={image} />}

            <button
              onClick={() => setMore(false)}
              className="inline-flex items-center w-fit p-3 text-base font-medium text-white bg-[#144272] rounded-lg mt-6"
            >
              Read less
            </button>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default GridItem;