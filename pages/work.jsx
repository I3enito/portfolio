import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";
import styles from "../styles/Work.module.css";
import { WebPinball } from "../components/Work/Pages/WebPinball";
import { GigantischGeilesGame } from "../components/Work/Pages/GigantischGeilesGame";

export default function Home() {
  const { query, push } = useRouter();
  const { page = "1" } = query;
  const currentIndex = parseInt(page);

  const activePage = (index) => {
    switch (index) {
      case 1:
        return <WebPinball></WebPinball>;
      case 2:
        return <GigantischGeilesGame></GigantischGeilesGame>;
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler|work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.pageTitle}>work</h1>
        </Link>
        <h1 className={styles.title}>ben|siegenthaler</h1>
      </header>

      <main className={styles.main}>{activePage(currentIndex)}</main>
      <footer className={styles.footer}>
        <button
          className={classNames(styles.arrowButton, styles.left)}
          onClick={() => {
            push(`?page=${currentIndex - 1}`);
          }}
        >
          <Image
            src="/icons/arrow-light.svg"
            alt="Arrow Pointing Left"
            layout="responsive"
            height={12}
            width={12}
          ></Image>
        </button>
        <span className={styles.pageNumber}>0{currentIndex}</span>
        <button
          className={classNames(styles.arrowButton)}
          onClick={() => {
            push(`?page=${currentIndex + 1}`);
          }}
        >
          <Image
            src="/icons/arrow-light.svg"
            alt="Arrow Pointing Right"
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
