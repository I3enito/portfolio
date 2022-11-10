import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const Freekickerz = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get an overview of the work of Ben Siegenthaler: Freekickerz Shootout is a casual skill
          game where you can challenge your friends."
        />
      </Head>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>Freekickerz Shootout</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/freekickerz-app-logo.jpeg"
              alt="Football App Logo"
              layout="responsive"
              height={678}
              width={748}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>description</h4>
          </div>
          <Paragraph>
            As part of an internship, I worked with a team to develop a mobile
            game for Android and iOS. Freekickerz Shootout is a casual skill
            game where you can challenge your friends. I was able to actively
            contribute to the game design during the initial phase of the
            project and drove the technical implementation.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>C#, Unity, Firebase</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>concept, game design, technical implementation</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>resources</h4>
          </div>
          <Paragraph>
            <a
              href="https://freekickerz.deep-impact.ch/"
              target="_blank"
              rel="noreferrer noopener"
            >
              webpage
            </a>
          </Paragraph>
        </div>
      </div>
    </>
  );
};
