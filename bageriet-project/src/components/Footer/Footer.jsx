import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>bageriet</h2>
      <p className={styles.description}>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har
        gennemgået forandringer.
      </p>
      <p className={styles.copyright}>
        Copyright © 2017 bageriet aps
      </p>
    </footer>
  );
}
