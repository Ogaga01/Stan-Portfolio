import { FC } from "react";
import ThemeToggle from "./ThemeToggle";

interface Props {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Navbar: FC<Props> = ({ theme, onToggleTheme }) => {
  return (
    <header className="fixed inset-x-0 top-4 z-30 hidden w-full transition-colors duration-300 min-[751px]:block">
      <div className="section-shell flex items-center justify-between">
        <p
          className="inline-flex h-12 items-center rounded-full border border-ink/10 bg-white/85 px-5 text-xl font-extrabold tracking-normal text-ink shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/80 dark:text-white"
          aria-label="Stanley Osi"
        >
          Stanley Osi
        </p>
        <nav
          className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/85 p-1.5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/80"
          aria-label="Primary navigation"
        >
          <a
            href="#work-heading"
            className="inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-bold text-ink transition hover:bg-ink hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            Work
          </a>
          <a
            href="#writing-heading"
            className="inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-bold text-ink transition hover:bg-ink hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            Writing
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://theswiish.substack.com/"
            className="inline-flex min-h-10 items-center justify-center rounded-full px-4 text-sm font-bold text-ink transition hover:bg-ink hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            Blog
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/0sc/"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-ink px-5 text-sm font-bold text-white transition hover:bg-coral dark:bg-white dark:text-ink dark:hover:bg-coral dark:hover:text-white"
          >
            Contact
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
