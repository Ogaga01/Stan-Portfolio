import { FC } from "react";
import { Work } from "../types/types";

interface Props {
  work: Work;
  variant: "filled" | "plain";
}

const WorkCard: FC<Props> = ({ work, variant }) => {
  const { title, description, image, link, organization, status } = work;
  const isFilled = variant === "filled";

  return (
    <article
      className={`overflow-hidden rounded-lg border shadow-soft transition-colors duration-300 ${
        isFilled
          ? "border-ink bg-ink text-white dark:border-white/10 dark:bg-slate-900"
          : "border-ink/10 bg-slate-50 text-ink dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
      }`}
    >
      <div
        className={`grid min-h-[auto] items-center gap-0 md:grid-cols-[0.82fr_1.18fr] ${
          isFilled ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        <div className="h-full w-full overflow-hidden">
          <img
            className="aspect-[16/10] h-full min-h-56 w-full object-cover transition duration-700 hover:scale-105 sm:min-h-64 md:aspect-auto md:min-h-0 lg:max-h-[23rem]"
            src={image}
            alt={`${organization} project preview`}
            loading="lazy"
          />
        </div>
        <div className="flex max-w-2xl flex-col items-start gap-4 p-6 sm:p-7 lg:gap-5 lg:p-8 xl:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className={`inline-flex min-h-8 items-center rounded-full px-3 text-xs font-black uppercase tracking-[0.16em] ${
                isFilled
                  ? "bg-white/10 text-white ring-1 ring-white/15"
                  : "bg-white text-ink ring-1 ring-ink/10 dark:bg-white/10 dark:text-white dark:ring-white/15"
              }`}
            >
              {organization}
            </p>
            {status === "current" && (
              <p className="inline-flex min-h-8 items-center rounded-full bg-coral px-3 text-xs font-black uppercase tracking-[0.16em] text-white">
                Current
              </p>
            )}
          </div>
          <h3 className="max-w-xl text-2xl font-black leading-tight sm:text-3xl lg:text-[2rem]">
            {title}
          </h3>
          <p
            className={`max-w-xl text-base font-light leading-7 sm:text-[1.05rem] ${
              isFilled ? "text-white/80" : "text-charcoal dark:text-slate-300"
            }`}
          >
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-black transition hover:-translate-y-0.5 ${
              isFilled
                ? "bg-white text-ink hover:bg-coral hover:text-white"
                : "bg-ink text-white hover:bg-coral dark:bg-white dark:text-ink dark:hover:bg-coral dark:hover:text-white"
            }`}
            aria-label={`Visit ${organization}`}
          >
            Visit site
          </a>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
