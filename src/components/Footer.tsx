import { FC } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./../sass/_footer.module.scss";

const Footer: FC = () => {
  return (
    <section className={styles.footer}>
      <div className={styles["content"]}>
        <div>
          <p className={styles["name"]}>Stanley Osi.</p>
        </div>
        <div className={styles["links"]}>
          <a
            className={styles["socials"]}
            href="https://wa.me/+2348034467139"
            target="blank"
          >
            <BsWhatsapp className={styles["icon"]} />
          </a>
          <a
            className={styles["socials"]}
            href="https://mailto:vocal4real@gmail.com"
            target="blank"
          >
            <CgMail className={styles["icon"]} />
          </a>
          <a
            className={styles["socials"]}
            href="https://www.linkedin.com/in/0sc/"
            target="blank"
          >
            <RiLinkedinBoxLine className={styles["icon"]} />
          </a>
          <a
            className={styles["socials"]}
            href="https://x.com/swxsh_etc"
            target="blank"
          >
            <FaXTwitter className={styles["icon"]} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
