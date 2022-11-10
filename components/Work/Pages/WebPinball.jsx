import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const WebPinball = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get an overview of the work of Ben Siegenthaler: Pinball game with pure html, css and
          javascript."
        />
      </Head>
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
          <Paragraph>
            During my studies I developed a pinball game with pure html, css and
            javascript. The biggest challenge was to write my own collision
            detection for html elements. It was interesting to see how the
            browser performed under these not ideal conditions.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>html5, css3, javascript</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>concept, design, programming</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>resources</h4>
          </div>
          <Paragraph>
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
          </Paragraph>
        </div>
      </div>
    </>
  );
};
