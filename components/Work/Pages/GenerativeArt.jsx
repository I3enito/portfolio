import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const GenerativeArt = () => {
  return (
    <>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>generative art</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <iframe
              src="https://i3enito.github.io/GENCG.H2001/dayEight/beta/"
              width="100%"
            ></iframe>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>description</h4>
          </div>
          <Paragraph>
            In one of my study modules, I explored generative art. I decided to
            try different experiments in 3D space. I experimented with artistic
            closed curves in three dimensions and used three.js to visualize
            them.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>
            <a
              href="https://threejs.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              three.js
            </a>
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>concept, design, programming, experimenting</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>resources</h4>
          </div>
          <Paragraph>
            <a
              href="https://i3enito.github.io/GENCG.H2001/"
              target="_blank"
              rel="noreferrer noopener"
            >
              live demo
            </a>
            ,{" "}
            <a
              href="https://github.com/I3enito/GENCG.H2001"
              target="_blank"
              rel="noreferrer noopener"
            >
              source code
            </a>
          </Paragraph>
        </div>
      </div>
    </>
  );
};
