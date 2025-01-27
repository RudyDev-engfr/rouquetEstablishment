import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contactez-nous</h1>
      <p className={styles.paragraph}>
        <strong>ROUQUET PHILIPPE</strong>
      </p>
      <p className={styles.paragraph}>154 Chemin Boisne, 16130 Gensac la Pallue</p>
      <p className={styles.paragraph}>
        Email :{" "}
        <a href='mailto:philiprouq@gmail.com' className={styles.link}>
          philrouq@gmail.com
        </a>
      </p>
      <p className={styles.paragraph}>
        Téléphone :{" "}
        <a href='tel:0545322546' className={styles.link}>
          05 45 32 25 46
        </a>{" "}
        |{" "}
        <a href='tel:0778699205' className={styles.link}>
          07 78 68 92 05
        </a>
      </p>
      <p className={styles.paragraph}>SIRET : 333 636 959 00020</p>
    </div>
  );
}
