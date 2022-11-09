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
              I am a software engineer who feels at home in web and game
              development. I am fascinated by the accessibility of web
              technologies and the creative possibilities of games. Besides the
              urge to learn new things, I am characterized by the ability to
              work in teams and to take responsibility. In my free time you can
              find me snowboarding, at good concerts, climbing or hanging out
              with friends in a bar.
            </Paragraph>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
