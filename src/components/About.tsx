import { FC } from "react";
import headshot from "./../images/headshot.jpg";
import styles from "./../sass/_about.module.scss";

const About: FC = () => {
  return (
    <section className={styles.body}>
      <div className={styles["about"]}>
        <div className={styles["text"]}>
          <h1 className={styles["heading1"]}>Hello, I'm Stanley👋🏽</h1>
          <p className={styles["introduction"]}>
            Hello, I’m Stanley. I’m a brand communications person who dabbles in
            content marketing and occasionally into growth strategies, and
            venture capital whilst mumbling about tech.
          </p>
          <p className={styles["introduction2"]}>
            Big fan of crazy ideas, a hobbyist photographer, an erratic reader,
            and a rap aficionado deeply into electronic beats.
          </p>
        </div>
        <div className={styles["image"]}>
          <img className={styles["img"]} src={headshot} alt="Stanley Img" />
        </div>
      </div>
    </section>
  );
};

export default About;
