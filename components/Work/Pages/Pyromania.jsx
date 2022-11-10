import Head from "next/head";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const Pyromania = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get an overview of the work of Ben Siegenthaler: Pyromania is a local co-op multiplayer game for up to 4 people."
        />
      </Head>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>pyromania</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <iframe
              width="100%"
              src="https://www.youtube-nocookie.com/embed/5zIT4YbJLj4"
              frameBorder="0"
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
            Pyromania is a local co-op multiplayer game for up to 4 people. You
            are an totally competent firefighter who has to extinguish the
            flames before it is too late. We worked for 2 weeks as a team of
            three on this prototype. Still a lot of bugs, but that only adds to
            the fun.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>unity, c#</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>idea, concept, prototyping, development</Paragraph>
        </div>
      </div>
    </>
  );
};
