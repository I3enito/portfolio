import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header/Header";
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
            <p className={styles.paragraph}>Hey there!</p>
            <p className={styles.paragraph}>
              I'm a software engineer currently living and studying in lucerne,
              swtzerland. I love the openness of the web and enjoy building
              gaming experiences. I describe myself as a strong and ambitious
              team player. If not busy with fixing some nasty bugs, you can find
              me discussing about politics or enjoying the art of music.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
