import { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./../sass/_mobilenavbar.module.scss";

const MobileNavbar: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles["mobile_navigation"]}>
        <h1 className={styles["mobile_navigation--title"]}>S.C. Osi.</h1>
        <AiOutlineMenu
          className={styles["mobile_navigation--menu_icon"]}
          onClick={showMenu}
        />
      </div>
      <nav className={styles[active ? "active" : "slider"]}>
        <ul className={styles["slider__nav"]}>
          <div className={styles["slider__closed"]}>
            <AiOutlineClose
              className={styles["slider__close"]}
              onClick={showMenu}
            />
          </div>
          <li
            className={styles.navlink}
            onClick={showMenu}
          >
            Blogs
          </li>
          <li
            className={styles.navlink}
            onClick={showMenu}
          >
            Works
          </li>
          <li
            
            className={styles.navlink}
            onClick={showMenu}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
