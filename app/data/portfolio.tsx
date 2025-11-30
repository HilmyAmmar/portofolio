import { Briefcase, Code, Award, Database, Wrench } from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' }
];

export const EXPERIENCES = [
    {
        title: "Frontend Engineer Intern",
        company: "Sagara Technology",
        period: "Sep 2025 - Present",
        description: [
        "Developing frontend features across booking, office management, and dashboard modules",
        "Implementing UI enhancements and dynamic form behaviors",
        "Contributing to UX improvements through better feedback mechanisms"
        ],
        icon: <Briefcase className="w-6 h-6" />
    },
    {
        title: "Mobile Engineer",
        company: "RISTEK's External Project",
        period: "Jul 2025 - Nov 2025",
        description: [
        "Improved mobile features by fixing critical bugs and optimizing loading states",
        "Enhanced UX through full-screen editor redesigns and smoother interactions",
        "Implemented real-time one-on-one chat feature using WebSocket"
        ],
        icon: <Code className="w-6 h-6" />
    },
    {
        title: "Lead of Mobile Development",
        company: "RISTEK UI",
        period: "Mar 2025 - Present",
        description: [
        "Mentored team members through regular one-on-one sessions",
        "Conducted internal training on mobile storage and test-driven development",
        "Developed backend service using Go for team integration",
        "Recognized as Best Lead of Mobile Development for Q2"
        ],
        icon: <Award className="w-6 h-6" />
    }
    ];

export const PROJECTS = [
    {
      title: "Q&A Real Time Platform",
      period: "Oct 2025 - Nov 2025",
      tech: ["Elixir", "Phoenix", "WebSocket", "PostgreSQL"],
      description: "Real-time Q&A platform with instant updates, voting, and moderation using functional programming principles",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Point of Sale Website",
      period: "Feb 2025 - Jun 2025",
      tech: ["Django", "Next.js", "JWT", "PostgreSQL"],
      description: "Full-stack POS application with user management, transaction handling, and financial reporting across 4 Agile sprints",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

export const SKILLS = {
  "Languages": { items: ["Go", "Python", "Dart", "JavaScript", "TypeScript", "Elixir"], icon: <Code /> },
  "Frameworks": { items: ["Django", "Next.js/React", "Flutter", "Phoenix"], icon: <Wrench /> },
  "Databases": { items: ["PostgreSQL", "Supabase"], icon: <Database /> },
  "Tools": { items: ["Git", "Postman", "Docker"], icon: <Wrench /> }
};

export const SOCIAL_LINKS = {
    email: "hilmyammardarmawan17@gmail.com",
    linkedin: "https://www.linkedin.com/in/hilmyammardarmawan/",
    github: "https://github.com/hilmyammar",
    phone: "082170879405"
};