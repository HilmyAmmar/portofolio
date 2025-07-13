import HomePage from "./components/HomePage";
import { projects } from "./data/project";

export default function Home() {
  return <HomePage projects={projects} />;
}

export const metadata = {
  title: 'Hilmy Ammar Darmawan - Software Engineer',
  description: 'Software Engineer specializing in Frontend, Backend, and Mobile Development',
  openGraph: {
    title: 'Hilmy Ammar Darmawan - Software Engineer',
    description: 'Software Engineer Portfolio',
    images: ['/image/228494.jpg'],
  },
};