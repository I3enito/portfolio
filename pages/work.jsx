import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import styles from "../styles/Work.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler|work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>work</h1>
        <h1 className={styles.title}>ben|siegenthaler</h1>
      </header>

      <main className={styles.main}>
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
              programming a pinball with plain html, javascript and css. The
              real world factor in this project was rather small, but it was fun
              to write my own collision detection while observing the limits of
              html5.
            </p>
            <div className={styles.highlightContainerSmall}>
              <h4 className={styles.styledH4}>technologies</h4>
            </div>
            <p className={styles.paragraph}>html5, css3, javascript</p>
          </div>
        </div>
      </main>
      <footer>
        <button className={styles.arrowButtonLeft}>
          <Image
            src="/icons/arrow-light.svg"
            alt="Pinball Game Screenshot"
            layout="responsive"
            height={12}
            width={12}
          ></Image>
        </button>
      </footer>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
