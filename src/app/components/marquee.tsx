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

const TechCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-4",
        "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48",
        "rounded-xl border border-gray-200 bg-blue-100 shadow-sm dark:bg-gray-900 dark:border-gray-700",
        "transition-transform hover:scale-105",
        "flex-shrink-0"
      )}
    >
      <img
        className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
        src={img}
        alt={`${name} logo`}
      />
      <p className="text-xs sm:text-sm font-semibold text-center dark:text-white">{name}</p>
    </div>
  );
};

export function MarqueeComponent() {
  return (
    <div className="relative w-full py-8">
      {/* Horizontal scrollable container */}
      <div 
        className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {technologies.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
      
      {/* Optional: Add scroll indicators */}
      <div className="flex justify-center mt-4 gap-2">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          ← Scroll to see more →
        </div>
      </div>
    </div>
  );
}

export default MarqueeComponent;