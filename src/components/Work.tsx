import { FC } from "react";
import { works } from "../types/works";
import styles from "./../sass/_works.module.scss";
import WorkCard from "./WorkCard";

const Work: FC = () => {
  return (
    <section className={styles.work}>
      <div className={styles["content"]}>
        {works.map((work) => (
          <WorkCard props={work} />
        ))}
      </div>
    </section>
  );
};

export default Work;
