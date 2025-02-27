import { FC } from "react";
import { posts } from "../types/posts";
import PostCard from "./PostCard";
import styles from "./../sass/_post.module.scss";

const Post: FC = () => {
  return (
    <section className={styles.blogs}>
      <div className={styles["content"]}>
        <div className={styles["nav"]}>
          <h1 className={styles.h2}>THINGS I HAVE WRITTEN</h1>
          <a
            className={styles["link"]}
            target="blank"
            href="https://theswiish.substack.com/"
          >
            View all
          </a>
        </div>
        <div className={styles["blog"]}>
          {posts.map((post) => (
            <PostCard props={post} key={post.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
