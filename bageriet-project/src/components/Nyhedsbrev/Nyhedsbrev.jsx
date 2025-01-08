import { FaEnvelope } from 'react-icons/fa'; 
import styles from './Nyhedsbrev.module.scss';

export function Nyhedsbrev() {
  return (
    <section className={styles.newsletter}>
      <h2>Tilmeld dig vores nyhedsbrev</h2>
      <p className={styles.subText}>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
      </p>
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <FaEnvelope />
        </span>
        <input
          type="email"
          placeholder="Indtast din email..."
          className={styles.inputField}
        />
        <button className={styles.submitButton}>Tilmeld</button>
      </div>
    </section>
  );
}
