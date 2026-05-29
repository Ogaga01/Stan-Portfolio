import { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface Props {
  theme: "light" | "dark";
  onToggle: () => void;
  className?: string;
}

const ThemeToggle: FC<Props> = ({ theme, onToggle, className = "" }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-ink ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
