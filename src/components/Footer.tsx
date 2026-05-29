import { FC } from "react";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer className="bg-ink text-white transition-colors duration-300 dark:bg-slate-950">
      <div className="section-shell grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="section-kicker">Contact</p>
          <p className="mt-3 text-2xl font-black">Stanley Osi.</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
            Brand Communications, and Content Marketing.
          </p>
        </div>
        <div className="flex items-center gap-3 sm:justify-end">
          <a
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white hover:text-ink"
            href="mailto:vocal4real@gmail.com"
            aria-label="Email Stanley Osi"
          >
            <CgMail className="h-7 w-7" aria-hidden="true" />
          </a>
          <a
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white hover:text-ink"
            href="https://www.linkedin.com/in/0sc/"
            target="_blank"
            rel="noreferrer"
            aria-label="Stanley Osi on LinkedIn"
          >
            <RiLinkedinBoxLine className="h-7 w-7" aria-hidden="true" />
          </a>
          <a
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white hover:text-ink"
            href="https://x.com/swxsh_etc"
            target="_blank"
            rel="noreferrer"
            aria-label="Stanley Osi on X"
          >
            <FaXTwitter className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
