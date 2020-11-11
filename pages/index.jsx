import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/Home.module.css";

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
