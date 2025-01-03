import {FC} from 'react';
import headshot from './../images/headshot.jpg'
import styles from './../sass/_about.module.scss'

const About: FC = () => {
    return (
        <section className={styles.body}>
            <div className={styles["about"]}>
                <div className={styles['text']}>
                    <h1 className={styles['heading1']}>Hi, I'm Stanley👋🏽</h1>
                    <p className={styles['introduction']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className={styles['image']}>
                <img className={styles['img']} src={headshot} alt="Stanley Img" />
                </div>
            </div>
        </section>
    );
};

export default About;