import styles from "./Paragraph.module.css";
import classNames from "classnames";

export const Paragraph = ({ className, light = false, children }) => {
  return (
    <p
      className={classNames(className, styles.paragraph, {
        [styles.light]: light,
      })}
    >
      {children}
    </p>
  );
};
