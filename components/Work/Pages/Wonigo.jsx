import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const Wonigo = () => {
  return (
    <>
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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
              href="https://wonigo-test.ams3.cdn.digitaloceanspaces.com/documentation/wonigo-architecture.png"
              target="_blank"
              rel="noreferrer noopener"
            >
              technical architecture
            </a>
            ,{" "}
            <a
              href="https://wonigo-test.ams3.cdn.digitaloceanspaces.com/documentation/A1_wonigo_plakat_n1_v2.pdf"
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
