import {FC} from 'react';
import styles from './../sass/_navbar.module.scss'

const Navbar: FC = () => {
    return (
        <div className={styles.body}>
            <div className={styles['navbar']}>
                <h2 className={styles['heading']}>S.C. OSI.</h2>
                <ul className={styles['list']}>
                    <li className={styles['item']}>Blogs</li>
                    <li className={styles['item']}>Works</li>
                    <li className={styles['item']}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
