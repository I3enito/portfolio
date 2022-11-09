import Image from "next/image";
import styles from "../../../styles/Work.module.css";
import { Paragraph } from "../../Paragraph/Paragraph";

export const CoffeeManiac = () => {
  return (
    <>
      <div className={styles.highlightContainer}>
        <h3 className={styles.styledH3}>Coffee Maniac</h3>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/Yg2n8-5DQwk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>description</h4>
          </div>
          <Paragraph>
            In Coffee Maniac you can experience the joy of drinking coffee in
            the morning. Move the cup to your mouth and take a big sip of coffee
            but don't spill it! With each caffeine delivery, you move faster and
            less predictable. Enter the trip phase and become one with the
            coffee. This game was created by two other team members and me in
            five days at the Workshop "Inbetween Animation and Gamedesign" at
            Fantoche 2021.
          </Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>technologies</h4>
          </div>
          <Paragraph>C#, Unity, Photoshop</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>contribution</h4>
          </div>
          <Paragraph>concept, gameplay programming</Paragraph>
          <div className={styles.highlightContainerSmall}>
            <h4 className={styles.styledH4}>resources</h4>
          </div>
          <Paragraph>
            <a
              href="https://vastini.itch.io/coffee-maniac"
              target="_blank"
              rel="noreferrer noopener"
            >
              itch.io
            </a>
          </Paragraph>
        </div>
      </div>
    </>
  );
};
