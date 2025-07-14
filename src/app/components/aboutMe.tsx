'use client';

import { useState } from 'react';
import { HyperText } from '@/components/magicui/hyper-text';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { UserIcon, ComputerDesktopIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid'; 
import { AnimatePresence, motion } from 'framer-motion';

const tabs = [
  {
    key: 'profile',
    label: 'Profile',
    icon: UserIcon,
    content: (
      
      <div className="space-y-4 text-gray-300 text-lg">
        <HyperText className="text-blue-200 text-2xl">About Me</HyperText>
        <p>
          I'm a <strong>Computer Science student</strong> who enjoys diving into the world of <strong>software engineering</strong> —
          from building full-stack applications to crafting seamless user experiences.
        </p>
        <p>
          I’m passionate about turning ideas into working products, constantly learning new technologies, and writing clean, maintainable code.
        </p>
        <p>
          Whether it’s frontend, backend, or something in between, I love solving problems and building things that matter.
        </p>
      </div>

    ),
  },
  {
    key: 'education',
    label: 'Education',
    icon: AcademicCapIcon,
    content: (
      <div className="text-gray-300 text-lg space-y-3">
        <HyperText className="text-blue-200 text-2xl">Education</HyperText>
        <p><strong>Universitas Indonesia</strong> — Bachelor of Computer Science</p>
        <p className="text-sm text-gray-400">Aug 2022 – Aug 2026 (Expected)</p>
        <p>Courses: Platform-Based Programming, Advanced Programming, Databases, Software Engineering, Python & Java, Software Security</p>
      </div>
    ),
  },
  {
    key: 'organization',
    label: 'Organization Experience',
    icon: BriefcaseIcon,
    content: (
      <div className="text-gray-300 text-lg space-y-4">
        <HyperText className="text-blue-200 text-2xl">Organization Experience</HyperText>
        <div>
          <p><strong>RISTEK UI</strong> — <em>Lead of Mobile Development</em></p>
          <p className="text-sm text-gray-400">Mar 2025 – Present</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Mentoring junior devs through 1-on-1 sessions and technical workshops</li>
            <li>Leading internal training on mobile storage & test-driven development</li>
            <li>Collaborating in an external dev team to refactor legacy code and ship new features</li>
          </ul>
        </div>
        <div>
          <p><strong>RISTEK UI</strong> — <em>Member of Mobile Development</em></p>
          <p className="text-sm text-gray-400">Mar 2024 – Dec 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Worked with PMs, designers, and devs on capstone mobile app project</li>
            <li>Organized Flutter open class as PIC for first-year students</li>
            <li>Learned beginner to advanced concept in Flutter</li>
          </ul>
        </div>
      </div>
    ),
  },
    {
    key: 'tech',
    label: 'Tech Stack',
    icon: ComputerDesktopIcon,
    content: (
      <ul className="text-gray-300 list-disc pl-5 text-xl">
        <HyperText className="text-blue-200 text-2xl">Tech Stack</HyperText>
        <li><strong>Languages:</strong> JavaScript, TypeScript, Python, Dart</li>
        <li><strong>Frameworks:</strong> React, Next.js, Django, Flutter</li>
        <li><strong>Styling & UI:</strong> Tailwind CSS, Framer Motion</li>
        <li><strong>Backend / DB:</strong> PostgreSQL, Supabase, Prisma</li>
        <li><strong>Tools:</strong> Git, Docker, Figma, Vercel, EmailJS</li>
      </ul>
    ),
  },
  // {
  //   key: 'contact',
  //   label: 'Contact',
  //   icon: '/svg/icons8-contact.svg',
  //   content: (
  //     <div className="flex flex-row gap-6 justify-center">
  //       <Link href="https://www.linkedin.com/in/hilmy-ammar-darmawan-9a5724219/" target="_blank">
  //         <Image src="svg/icons8-linkedin.svg" width={40} height={40} alt="Linkedin" />
  //       </Link>
  //       <Link href="https://github.com/HilmyAmmar" target="_blank">
  //         <Image src="svg/icons8-github.svg" width={40} height={40} alt="GitHub" />
  //       </Link>
  //       <Link href="https://www.instagram.com/hilmyammarr/" target="_blank">
  //         <Image src="svg/icons8-instagram.svg" width={40} height={40} alt="Instagram" />
  //       </Link>
  //     </div>
  //   ),
  // },
];


export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex flex-col lg:flex-row flex-1 max-w-6xl mx-auto px-4 py-12 gap-10 items-start">
      {/* Tab Nav */}
      <ul className="flex flex-col space-y-3 text-sm font-medium text-gray-400 w-full lg:w-60">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <li key={tab.key}>
            <button
              className={clsx(
                'inline-flex items-center px-4 py-3 rounded-lg w-full h-full transition-colors duration-200',
                activeTab === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 hover:text-white'
              )}
              onClick={() => setActiveTab(tab.key)}
            >
              <Icon className="w-5 h-5 mr-2 text-white" />
              {tab.label}
            </button>
          </li>
        );
      })}
    </ul>


      {/* Tab Content */}
      <div className="flex-1 rounded-lg text-white min-h-[400px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {tabs.find((tab) => tab.key === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
