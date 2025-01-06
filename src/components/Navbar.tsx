import { FC } from "react";
import styles from "./../sass/_navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles["navbar"]}>
        <h2 className={styles["heading"]}>SC.</h2>
        <ul className={styles["list"]}>
          <a
            target="blank"
            href="https://theswiish.substack.com/"
            className={styles["item"]}
          >
            Blogs
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/0sc/ "
            className={styles["item"]}
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
