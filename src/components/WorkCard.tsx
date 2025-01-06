import { FC } from "react";
import { Work } from "../types/types";
import styles from "./../sass/_workcard.module.scss";

interface Props {
  props: Work;
}

const WorkCard: FC<Props> = ({ props }) => {
  const { title, description, image, link } = props;

  return (
    <div className={styles.workcard}>
      <div className={styles["image"]}>
        <img className={styles["img"]} src={image} alt={link} />
      </div>
      <div className={styles["details"]}>
        <h1 className={styles["work"]}>{title}</h1>
        <p className={styles["desc"]}>{description}</p>
        <a href={link} target="blank" className={styles["link"]}>
          Visit site
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
