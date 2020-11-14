import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header/Header";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler|work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={styles.header} pageTitle="about"></Header>

      <main className={styles.main}>
        <Image
          src="/images/github-stylized.png"
          alt="Stylized Portrait"
          layout="responsive"
          height={500}
          width={500}
        />
      </main>
    </div>
  );
}
