import styles from "./styles.module.scss";

interface Link {
  link: String;
}

export function CardProject({ link }: Link) {
  return (
    <div className={styles.cardWraper}>
      <a href={`${link}`} className={styles.cardButton}>
        <img className={styles.img} src="barco.jpeg" />

        <div className={styles.cardDescription}>
          <h2> Lorem Impsum </h2>
          <p>
            Lorem ipsum dolor sit amet. Sed mollitia sint sit magna blblablablaa
            teste2 mais um
          </p>

          <span className={styles.knowMore}>saiba mais</span>
          <span className={styles.background} />
        </div>
      </a>
    </div>
  );
}
