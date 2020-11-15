import classNames from "classnames";
import styles from "./Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
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
          priority
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
          priority
        ></Image>
      </a>
    </footer>
  );
};
