import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Work from "./components/Work";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-ink transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <MobileNavbar theme={theme} onToggleTheme={toggleTheme} />
      <About />
      <Work />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
