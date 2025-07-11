import HomePage from "./components/HomePage";
import { projects } from "./data/project";

export default function Home() {
  return <HomePage projects={projects} />;
}
