import { FC } from "react";
import headshot from "./../images/stan-web.jpg";
import styles from "./../sass/_about.module.scss";

const About: FC = () => {
  return (
    <section className={styles.body}>
      <div className={styles["about"]}>
        <div className={styles["text"]}>
          <h1 className={styles["heading1"]}>Hello, I'm Stanley👋🏽</h1>
          <p className={styles["introduction"]}>
            I’m a brand communications person who dabbles in content marketing
            and occasionally into growth strategies, and venture capital whilst
            mumbling about tech.
          </p>
          <p className={styles["introduction2"]}>
            I'm a big fan of crazy ideas, a hobbyist{" "}
            <a href="https://vsco.co/swxxshh/gallery">photographer</a>, an
            erratic reader, and a rap aficionado deeply into electronic beats.
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
