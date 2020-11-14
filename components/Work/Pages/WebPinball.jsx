import Image from "next/image";
import styles from "../../../styles/Work.module.css";

export const WebPinball = () => {
  return (
    <>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>web pinball</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/web-pinball.png"
              alt="Pinball Game Screenshot"
              layout="responsive"
              height={1834}
              width={2499}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>description</h4>
          </div>
          <p className={styles.paragraph}>
            In a web studio during my studies, we had the challenge of
            programming a pinball with plain html, javascript and css. The real
            world factor in this project was rather small, but it was fun to
            write my own collision detection while observing the limits of
            html5.
          </p>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <p className={styles.paragraph}>html5, css3, javascript</p>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <p className={styles.paragraph}>concept, design, programming</p>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>resources</h4>
          </div>
          <p className={styles.paragraph}>
            <a
              href="https://i3enito.github.io/DEWEBMO.F2001/"
              target="_blank"
              rel="noreferrer noopener"
            >
              live demo
            </a>
            ,{" "}
            <a
              href="https://github.com/I3enito/DEWEBMO.F2001"
              target="_blank"
              rel="noreferrer noopener"
            >
              source code
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
