'use client';
import { HyperText } from '@/components/magicui/hyper-text';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center text-center gap-10">
      {/* Text Section */}
      <div className="flex-1">
        <div className="m-10">
          <HyperText className="text-blue-200">About me</HyperText>
        </div>
        <p className="text-xl text-gray-300 mb-4">
          I'm currently a college student pursuing a degree in Computer Science at Universitas Indonesia. I enjoy exploring how technology works and love building projects that help me learn by doing.           My interests include frontend and backend development, building user-friendly interfaces, and diving deep into full-stack technologies. Outside of coding, I enjoy learning new tools, collaborating on projects, and continuously improving my problem-solving skills.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-6">
        <Link href="https://www.linkedin.com/in/hilmy-ammar-darmawan-9a5724219/">
          <Image src="svg/icons8-linkedin.svg" width={50} height={50} alt={'Linkedin Profiles'}>
          </Image>
        </Link>
        <Link href="https://github.com/HilmyAmmar">
          <Image src="svg/icons8-github.svg" width={50} height={50} alt={'Linkedin Profiles'}>
          </Image>
        </Link>
        <Link href="https://www.instagram.com/hilmyammarr/">
          <Image src="svg/icons8-instagram.svg" width={50} height={50} alt={'Linkedin Profiles'}>
          </Image>
        </Link>
      </div>
    </div>
  );
}
