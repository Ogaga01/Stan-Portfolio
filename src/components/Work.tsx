import { FC, useRef } from "react";
import { motion, Variants } from "framer-motion";
import workimage1 from "./../images/startup.jpg";
import workimage2 from "./../images/hankara2.jpg";
import workimage3 from "./../images/buffex.jpg";
import workimage4 from "./../images/gwala2.jpg";
import styles from "./../sass/_works.module.scss";

const cardVariants: Variants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Work: FC = () => {
  const scrollRef = useRef(null);

  return (
    <section className={styles.work}>
      <div className={styles.heading}>
        <h1 className={styles["h1"]}>WHAT I'VE HELPED BUILD</h1>
      </div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef, once: true }}
        className={styles["project"]}
      >
        <div className={styles.w1}>
          <div className={styles["work1"]}>
            <div className={styles["image"]}>
              <img className={styles["img"]} src={workimage1} alt="current" />
            </div>
            <div className={styles["texts"]}>
              <p className={styles.current}>Current</p>
              <h2 className={styles["title"]}>
                Curating memorable tech experiences with the Africa Startup
                Festival and the Africa Technology Expo.
              </h2>
              <p className={styles["description"]}>
                I stay at the forefront of brand communications for the Africa
                Startup Festival, and the Africa Technology Expo. Crafting
                design ideas, content and strategy framework, partnership,
                media, and influencer engagement.
              </p>
              <a
                target="blank"
                className={styles["link"]}
                href="https://www.africastartupfestival.com/en"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef, once: true }}
        className={styles["project"]}
      >
        <div className={styles.w2}>
          <div className={styles["work2"]}>
            <div className={styles["image"]}>
              <img className={styles["img"]} src={workimage4} alt="current" />
            </div>
            <div className={styles["texts"]}>
              <h2 className={styles["title"]}>
                Enabling Group Banking with Gwala
              </h2>
              <p className={styles["description"]}>
                I helped improve early product features and user experience
                through user feedback, achieving a large retention rate, and
                developing the initial product lifecycle, go-to-market strategy,
                and acquisition roadmap with early team members.
              </p>
              <a
                target="blank"
                className={styles["link2"]}
                href="https://www.ourgwala.com/"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef, once: true }}
        className={styles["project"]}
      >
        <div className={styles.w3}>
          <div className={styles["work3"]}>
            <div className={styles["image"]}>
              <img className={styles["img"]} src={workimage2} alt="current" />
            </div>
            <div className={styles["texts"]}>
              <h2 className={styles["title"]}>
                Hankara Bridges the Content Gap
              </h2>
              <p className={styles["description"]}>
                I collaborated with the founder of Hankara to enhance
                visibility, foster partnerships, and led the team of three,
                while also managing two flagship initiatives: an accelerator
                program and a physical activation event.
              </p>
              <a
                target="blank"
                className={styles["link"]}
                href="https://techcabal.com/2022/09/22/hankara-bridges-the-content-gap/"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef, once: true }}
        className={styles["project"]}
      >
        <div className={styles.w4}>
          <div className={styles["work4"]}>
            <div className={styles["image"]}>
              <img className={styles["img"]} src={workimage3} alt="current" />
            </div>
            <div className={styles["texts"]}>
              <h2 className={styles["title"]}>
                Buffex: Money without Boundaries.
              </h2>
              <p className={styles["description"]}>
                I collaborated with the founding team to develop the initial
                content strategy and product roadmap while contributing to early
                product concepts and features.
              </p>
              <a
                target="blank"
                className={styles["link2"]}
                href="https://vc4a.com/ventures/bufexx/"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
