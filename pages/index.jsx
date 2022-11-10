import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="author" content="Ben Siegenthaler" />
        <meta
          name="description"
          content="Personal website of Ben Siegenthaler, software engineer with focus on web and game development."
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://bensiegenthaler.ch/"></meta>
        <meta property="og:title" content="ben|siegenthaler"></meta>
        <meta
          property="og:description"
          content="Personal website of Ben Siegenthaler, software engineer with focus on web and game development."
        ></meta>
        <meta property="og:image" content="/images/icon-512x512.png"></meta>
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>ben|siegenthaler</h1>
      </header>

      <main className={styles.main}>
        <h2 className={classNames(styles.stylizedTitle, styles.about)}>
          <Link href="/about">about</Link>
        </h2>
        <h2 className={classNames(styles.stylizedTitle, styles.work)}>
          <Link href="/work?page=0">work</Link>
        </h2>
      </main>
      <Footer></Footer>
    </div>
  );
}
