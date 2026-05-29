import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { works } from "../types/works";
import WorkCard from "./WorkCard";

const cardVariants: Variants = {
  offscreen: {
    y: 48,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Work: FC = () => {
  return (
    <section
      className="bg-white py-14 transition-colors duration-300 dark:bg-slate-950 sm:py-20"
      aria-labelledby="work-heading"
    >
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Selected experience</p>
            <h1
              id="work-heading"
              className="mt-3 max-w-3xl text-3xl font-black leading-tight text-ink dark:text-white sm:text-4xl lg:text-5xl"
            >
              Work across venture capital, story telling, product, and culture.
            </h1>
          </div>
          {/* <p className="max-w-sm text-base leading-7 text-charcoal dark:text-slate-300">
            A compact view of current and past work using the same portfolio
            resources, sharpened into a more scannable layout.
          </p> */}
        </div>
        <div className="mx-auto grid max-w-6xl gap-5 lg:gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.organization}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <WorkCard
                work={work}
                variant={index % 2 === 0 ? "filled" : "plain"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
