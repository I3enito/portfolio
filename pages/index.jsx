import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>ben|siegenthaler</h1>
      </header>

      <main className={styles.main}>
        <h2 className={classNames(styles.stylizedTitle, styles.about)}>
          <Link href="/about">about</Link>
        </h2>
        <h2 className={classNames(styles.stylizedTitle, styles.work)}>
          <Link href="/work?page=1">work</Link>
        </h2>
      </main>
      <footer className={styles.footer}>
        <a
          className={classNames(styles.socialLink)}
          href="https://github.com/I3enito"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/icons/github-icon.svg"
            alt="Github Icon"
            layout="responsive"
            height={12}
            width={12}
          ></Image>
        </a>
        <a
          className={classNames(styles.socialLink)}
          href="https://www.linkedin.com/in/ben-siegenthaler-6837781a1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/icons/linkedin-logo.svg"
            alt="Github Icon"
            layout="responsive"
            height={12}
            width={12}
          ></Image>
        </a>
      </footer>
    </div>
  );
}
