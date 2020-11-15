import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Paragraph } from "../components/Paragraph/Paragraph";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ben|siegenthaler|about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={styles.header} pageTitle="about"></Header>

      <main className={styles.main}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.portrait}
              src="/images/github-stylized.png"
              alt="Stylized Portrait"
              layout="responsive"
              height={500}
              width={500}
              priority
            />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div>
            <Paragraph light>Hi there</Paragraph>
            <Paragraph light>
              I am a software engineer who currently lives and studies in
              Lucerne. I love the accessibility of web technologies and enjoy
              building gaming experiences. I describe myself as a strong and
              ambitious team player. Besides gaming and coding, I also like
              discussions about politics and listening to good music.
            </Paragraph>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
