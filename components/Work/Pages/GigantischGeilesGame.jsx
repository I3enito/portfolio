import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const GigantischGeilesGame = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content='Get an overview of the work of Ben Siegenthaler: The "Giantisch Geiles Game" is a prototype of a 2D game, which we
          developed as a team of three within 3 weeks.'
        />
      </Head>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>gigantisch geiles game</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <iframe
              width="100%"
              src="https://www.youtube-nocookie.com/embed/Ca1UptqNroE"
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
            The "Giantisch Geiles Game" is a prototype of a 2D game, which we
            developed as a team of three within 3 weeks. As a team of designers
            and developers we developed the game mechanics and the game loop.
            Despite little time and limited choice of game mechanics we managed
            to create a great experience.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>unity, c#</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>prototyping, development</Paragraph>
        </div>
      </div>
    </>
  );
};
