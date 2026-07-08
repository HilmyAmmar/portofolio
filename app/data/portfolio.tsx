export const NAV_ITEMS = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

export const PROFILE = {
  name: 'Hilmy Ammar Darmawan',
  role: 'Software Engineer',
  location: 'Jakarta, Indonesia',
  intro:
    'Software Engineer and Computer Science student at Universitas Indonesia. I work across frontend, mobile, and backend — shipping features to production and maintaining them.',
  about: [
    'I study Computer Science at Universitas Indonesia (since 2022) and work as a Software Engineer alongside it.',
    'I have shipped a journalism app with 1,000+ downloads on the Play Store, led a mobile development team, and built full-stack products for course and freelance work.',
    'I like clear code, sensible architecture, and working closely with product and design to get features out the door.',
  ],
};

export const EDUCATION = {
  school: 'Universitas Indonesia',
  faculty: 'Faculty of Computer Science',
  degree: 'Undergraduate in Computer Science',
  period: 'Enrolled 2022',
  courses: [
    'Platform-Based Programming',
    'Advanced Programming',
    'Database',
    'Software Security',
    'Software Engineering',
    'Cloud Computing',
    'Functional Programming',
    'Software Quality Assurance',
    'Data Structure & Algorithm',
  ],
};

export const EXPERIENCES = [
  {
    title: 'Software Engineer — Intern',
    company: 'Sagara Technology',
    period: 'Sep 2025 – Feb 2026',
    description: [
      'Translated product requirements into functional frontend features for the booking and office management dashboard.',
      'Developed features and resolved technical issues across the Customer Frontend and Admin CMS.',
      'Collaborated with Product Managers and engineers via a ticketing system to track progress and ensure timely delivery.',
    ],
  },
  {
    title: 'Software Engineer — Contract (via RISTEK UI)',
    company: 'TVRI',
    period: 'Jul 2025 – Nov 2025',
    description: [
      'Developed a mobile journalism platform, managing Google Play Store deployment for an app with 1,000+ downloads.',
      'Refactored legacy code and resolved critical bugs across the codebase, improving app stability and performance.',
      'Built a real-time chat interface and integrated geolocation to automatically tag news locations.',
    ],
  },
  {
    title: 'Lead of Mobile Development',
    company: 'RISTEK UI',
    period: 'Mar 2025 – Dec 2025',
    description: [
      'Recognized as Best Lead of Mobile Development for Q2 for outstanding contribution and team leadership.',
      'Mentored a team member through regular one-on-one sessions on technical and personal development.',
      'Conducted internal training on mobile storage management and test-driven development.',
      'Developed a backend service in Go, enabling six members to integrate their Flutter capstone projects.',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Focus Archery Sport Team (FAST) Web Portal',
    role: 'Freelance Web Developer',
    tech: ['Next.js', 'React', 'TypeScript'],
    description:
      'Public-facing portfolio showcasing athlete profiles, media coverage, and 50+ championship achievements, plus an admin dashboard to centralize member registrations and track club transactions.',
  },
  {
    title: 'SecureNote — Serverless Self-Destructing Notes',
    role: 'Cloud Computing Course Project',
    tech: ['AWS Lambda', 'DynamoDB', 'EventBridge'],
    description:
      'Serverless secure note service with client-side encryption and automated self-destruction via EventBridge Scheduler to guarantee data privacy.',
  },
  {
    title: 'Q&A Real-Time Platform',
    role: 'Functional Programming Course Project',
    tech: ['Elixir', 'Phoenix', 'WebSocket'],
    description:
      'Real-time Q&A platform using WebSockets for instant voting, live sorting, and seamless moderator controls, built on functional programming principles.',
  },
  {
    title: 'Point of Sale Website',
    role: 'Software Engineering Course Project',
    tech: ['Django', 'Next.js', 'PostgreSQL'],
    description:
      'POS system built in an Agile team with secure invitation-based authentication and modules for inventory control and transaction management.',
  },
];

export const SKILLS = {
  Languages: ['Go', 'TypeScript', 'JavaScript', 'Python', 'Elixir', 'SQL'],
  Frameworks: ['React', 'Next.js', 'Django', 'Flutter', 'Phoenix'],
  Tools: ['Git', 'Postman', 'Docker', 'AWS'],
};

export const SOCIAL_LINKS = {
  email: 'hilmyammardarmawan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hilmyammardarmawan/',
  github: 'https://github.com/hilmyammar',
  phone: '+6282170879405',
  whatsapp:
    'https://wa.me/6282170879405?text=Hello%20Hilmy%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.',
  website: 'https://hilmyammar.tech',
};
