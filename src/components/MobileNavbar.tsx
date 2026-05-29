import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";

interface Props {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const MobileNavbar: FC<Props> = ({ theme, onToggleTheme }) => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-white/90 px-5 py-5 text-ink shadow-sm backdrop-blur transition-colors duration-300 dark:bg-slate-950/90 dark:text-white min-[751px]:hidden">
        <p className="text-2xl font-extrabold" aria-label="Stanley Osi">
          Stanley Osi
        </p>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-3xl text-inherit transition hover:bg-ink/10 dark:hover:bg-white/10"
            onClick={showMenu}
            aria-label="Open navigation menu"
            aria-expanded={active}
          >
            <AiOutlineMenu aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav
        className={`fixed inset-x-0 z-50 min-h-dvh bg-ink text-white transition-[top] duration-500 ease-out dark:bg-slate-950 min-[751px]:hidden ${
          active ? "top-0" : "-top-[120vh]"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex min-h-dvh flex-col items-center px-6 py-8">
          <div className="mb-16 flex w-full justify-end">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-4xl transition hover:bg-white/10"
              onClick={showMenu}
              aria-label="Close navigation menu"
            >
              <AiOutlineClose aria-hidden="true" />
            </button>
          </div>
          <div className="flex w-full max-w-sm flex-col items-center gap-4">
            <a
              href="#work-heading"
              className="w-full rounded-lg border border-white/20 px-6 py-4 text-center text-2xl font-bold uppercase transition hover:bg-white hover:text-ink"
              onClick={showMenu}
            >
              Work
            </a>
            <a
              href="#writing-heading"
              className="w-full rounded-lg border border-white/20 px-6 py-4 text-center text-2xl font-bold uppercase transition hover:bg-white hover:text-ink"
              onClick={showMenu}
            >
              Writing
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://theswiish.substack.com/"
              className="w-full rounded-lg border border-white/20 px-6 py-4 text-center text-2xl font-bold uppercase transition hover:bg-white hover:text-ink"
              onClick={showMenu}
            >
              Blog
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/0sc/"
              className="w-full rounded-lg border border-white/20 px-6 py-4 text-center text-2xl font-bold uppercase transition hover:bg-white hover:text-ink"
              onClick={showMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
