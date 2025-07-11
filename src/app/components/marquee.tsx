import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const technologies = [
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Django",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Next.js",
    img: "https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/next.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Dart",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Java",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "REST API",
    img: "https://img.icons8.com/external-outline-juicy-fish/60/000000/external-api-coding-and-development-outline-outline-juicy-fish.png",
  },
  {
    name: "Vercel",
    img: "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png",
  },
];

const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

const TechCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 w-48 h-48 p-4",
        "rounded-xl border border-gray-200 bg-blue-100 shadow-sm dark:bg-gray-900 dark:border-gray-700",
        "transition-transform hover:scale-105"
      )}
    >
      <img
        className="rounded-full w-24 h-24 object-contain"
        src={img}
        alt={`${name} logo`}
      />
      <p className="text-sm font-semibold text-center dark:text-white">{name}</p>
    </div>
  );
};

export function MarqueeComponent() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] gap-4 py-4">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] gap-4 py-4">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
    </div>
  );
}
