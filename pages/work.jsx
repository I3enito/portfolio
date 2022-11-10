import Head from "next/head";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";
import styles from "../styles/Work.module.css";
import { WebPinball } from "../components/Work/Pages/WebPinball";
import { GigantischGeilesGame } from "../components/Work/Pages/GigantischGeilesGame";
import { useEffect } from "react";
import { Header } from "../components/Header/Header";
import { GenerativeArt } from "../components/Work/Pages/GenerativeArt";
import { Pyromania } from "../components/Work/Pages/Pyromania";
import { Wonigo } from "../components/Work/Pages/Wonigo";
import { Freekickerz } from "../components/Work/Pages/Freekickerz";
import { CoffeeManiac } from "../components/Work/Pages/CoffeeManiac";

export default function Home() {
  const { query, push } = useRouter();
  const { page = "1" } = query;
  const currentIndex = parseInt(page);
  const PAGE_COUNT = 5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleClick = (direction) => {
    if (direction === "up") {
      const nextIndex = currentIndex + 1 <= PAGE_COUNT ? currentIndex + 1 : 0;
      push(`?page=${nextIndex}`, undefined, true);
    } else if (direction === "down") {
      const nextIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : PAGE_COUNT;
      push(`?page=${nextIndex}`, undefined, true);
    }
  };

  const activePage = (index) => {
    switch (index) {
      case 0:
        return <Wonigo></Wonigo>;
      // case 1:
      //   return <Freekickerz></Freekickerz>;
      case 1:
        return <CoffeeManiac></CoffeeManiac>;
      case 2:
        return <Pyromania></Pyromania>;
      case 3:
        return <WebPinball></WebPinball>;
      case 4:
        return <GenerativeArt></GenerativeArt>;
      case 5:
        return <GigantischGeilesGame></GigantischGeilesGame>;
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler|work</title>
        <meta charset="utf-8" />
        <meta name="author" content="Ben Siegenthaler" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://bensiegenthaler.ch/work"
        ></meta>
        <meta property="og:title" content="ben|siegenthaler|work"></meta>
        <meta
          property="og:description"
          content="Get an overview of the work of Ben Siegenthaler."
        ></meta>
        <meta property="og:image" content="/images/icon-512x512.png"></meta>
      </Head>
      <Header pageTitle="work"></Header>

      <main className={styles.main}>{activePage(currentIndex)}</main>
      <footer className={styles.footer}>
        <button
          className={classNames(styles.arrowButton, styles.left)}
          onClick={() => handleClick("down")}
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
          onClick={() => handleClick("up")}
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
    </div>
  );
}
