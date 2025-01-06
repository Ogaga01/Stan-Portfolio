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
      <div>
        <img src={image} alt={link} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{link}</p>
      </div>
    </div>
  );
};

export default WorkCard;
