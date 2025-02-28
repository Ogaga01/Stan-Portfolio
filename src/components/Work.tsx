import { FC, useRef } from "react";
import { motion, Variants } from "framer-motion";
import workimage2 from "./../images/hankara2.jpg";
import workimage3 from "./../images/buffex.jpg";
import workimage4 from "./../images/gwala2.jpg";
import spark from "./../images/spark3.jpg";
import oui from "./../images/oui.jpg";
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
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ root: scrollRef, once: true }}
        className={styles["project"]}
      >
        <div className={styles.w1}>
          <div className={styles["currentwork"]}>
            <div className={styles["image"]}>
              <img className={styles["img"]} src={oui} alt="current" />
            </div>
            <div className={styles["texts"]}>
              <p className={styles.current}>Current</p>
              <h2 className={styles["title"]}>
                Engaging Platforms and Community at Oui Capital.
              </h2>
              <p className={styles["description"]}>
                I collaborate with the investment team on announcements and
                support for portfolio companies. Along with planning community
                events and fostering partnerships in the startup ecosystem.
              </p>
              <a
                target="blank"
                className={styles["link"]}
                href="https://www.ouicapital.vc/"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div className={styles.heading}>
        <h1 className={styles["h1"]}>PAST EXPERIENCES</h1>
      </div>
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
              <img className={styles["img"]} src={spark} alt="spark" />
            </div>
            <div className={styles["texts"]}>
              <h2 className={styles["title"]}>
                Curating memorable tech experiences with Spark HQ
              </h2>
              <p className={styles["description"]}>
                I led brand communications for the Africa Startup Festival and
                Africa Technology Expo, shaping design, content, strategy,
                partnerships, and media engagement.
              </p>
              <a
                target="blank"
                className={styles["link2"]}
                href="https://sparkafrica.co/"
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
        <div className={styles.w1}>
          <div className={styles["work3"]}>
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
                className={styles["link"]}
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
        <div className={styles.w2}>
          <div className={styles["work2"]}>
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
                className={styles["link2"]}
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
        <div className={styles.w1}>
          <div className={styles["work3"]}>
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
                className={styles["link"]}
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
