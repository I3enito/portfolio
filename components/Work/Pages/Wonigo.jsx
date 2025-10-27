import Head from "next/head";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const Wonigo = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get an overview of the work of Ben Siegenthaler: Wonigo is a modern web platform for flat-sharing communities that
          models, simplifies and accelerates the central processes of finding
          flatmates."
        />
      </Head>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>wonigo</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/EbPPgOfqZNE"
              title="YouTube video player"
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
            Wonigo is a modern web platform for flat-sharing communities that
            models, simplifies and accelerates the central processes of finding
            flatmates. The platform enables flat-sharing communities to
            digitally register their apartments and flatmates. With the help of
            customized views, new flatmates can be searched for, applicants can
            be viewed and viewings can be planned. Within the scope of the
            bachelor thesis, the final design and the implementation of a first
            minimal version of the platform were developed. The technologies
            used were Next.js with TypeScript in the frontend and Node.js with
            TypeScript in the backend.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>
            TypeScript, Next.js, Node.js, PostgreSQL, Docker
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>
            concept, visual design, frontend, backend, database
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>resources</h4>
          </div>
          <Paragraph>
            <a
              href="https://1drv.ms/u/c/794ec0a0717d9b60/EVv9uKwAizJIrw2zgYQZsrQBE5cyeyKNeGDoBtfO4Ra2Pg?e=1sjLnZ"
              target="_blank"
              rel="noreferrer noopener"
            >
              technical architecture
            </a>
            ,{" "}
            <a
              href="https://1drv.ms/b/c/794ec0a0717d9b60/Ee8hznup5C5AvYn8rbmjwqYBNYOVDCXoL1MuIqFEsE61mw?e=glUpX2"
              target="_blank"
              rel="noreferrer noopener"
            >
              poster
            </a>
          </Paragraph>
        </div>
      </div>
    </>
  );
};
