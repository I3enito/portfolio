import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const GigantischGeilesGame = () => {
  return (
    <>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>gigantisch geiles game</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <iframe
              width="100%"
              src="https://www.youtube-nocookie.com/embed/Ca1UptqNroE"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>description</h4>
          </div>
          <Paragraph>
            In a web studio during my studies, we had the challenge of
            programming a pinball with plain html, javascript and css. The real
            world factor in this project was rather small, but it was fun to
            write my own collision detection while observing the limits of
            html5.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>html5, css3, javascript</Paragraph>
        </div>
      </div>
    </>
  );
};
