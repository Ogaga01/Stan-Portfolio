import { FC } from "react";
import { Post } from "../types/types";
import styles from "./../sass/_postcard.module.scss";

interface Props {
  props: Post;
}

const PostCard: FC<Props> = ({ props }) => {
  const { title, description, link } = props;

  return (
    <a className={styles.postcard} target="blank" href={link}>
      <div className={styles["writeup"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["desc"]}>{description}</p>
      </div>
    </a>
  );
};

export default PostCard;
