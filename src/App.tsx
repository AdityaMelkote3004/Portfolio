import { GLSLHills } from "@/components/ui/glsl-hills";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import { Home, User, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: User },
  { name: "Projects", url: "#projects", icon: Briefcase },
  { name: "Contact", url: "#contact", icon: Mail },
];

function App() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <AnimeNavBar items={navItems} defaultActive="Home" />
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-5xl md:text-7xl whitespace-pre-wrap text-white">
          Welcome to <br />
          <span className="italic font-thin">Aditya Melkote's</span> Portfolio
        </h1>
        <p className="text-sm md:text-base text-white/60 max-w-md mx-auto">
          I'm a 3rd year CSE student at PES University passionate about finding solutions to real world problems
        </p>
      </div>
    </div>
  );
}

export default App;
