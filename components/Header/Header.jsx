import Link from "next/link";
import classNames from "classnames";
import styles from "../../styles/Header.module.css";

export const Header = ({ className, pageTitle }) => {
  return (
    <header className={classNames(className, styles.header)}>
      <Link href="/">
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
      </Link>
      <h2 className={styles.title}>ben|siegenthaler</h2>
    </header>
  );
};
