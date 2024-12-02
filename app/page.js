import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bienvenue chez Etablissement Rouquet</h1>
        <p>Experts en revêtement alimentaire à Cognac</p>
        <a href='/contact' className={styles.cta}>
          Contactez-nous
        </a>
      </header>

      <section className={styles.intro}>
        <p>
          <strong>
            <u>Etablissement Rouquet</u>
          </strong>{" "}
          est une entreprise créée en{" "}
          <strong>
            <u>2022</u>
          </strong>
          , suite au changement de statut de la{" "}
          <strong>
            <u>S.A.R.L Rouquet FILS</u>
          </strong>
          , une entreprise familiale active depuis plus de 40 ans. Nous avons déjà{" "}
          <strong>
            <u>1100 clients</u>
          </strong>{" "}
          satisfaits dans la région
          <strong>
            <u>Nouvelle-Aquitaine</u>
          </strong>
          , opérant principalement en{" "}
          <strong>
            <u>Charente</u>
          </strong>{" "}
          et en{" "}
          <strong>
            <u>Charente Maritime</u>
          </strong>
          .
        </p>
      </section>

      <section className={styles.services}>
        <h2>Nos Services</h2>
        <p>
          Nous offrons une gamme complète de services de revêtement alimentaire pour répondre à tous
          vos besoins, incluant la résine époxy appliquée à chaud, sablage pneumatique et plus
          encore.
        </p>
        <a href='/services' className={styles.link}>
          Découvrir nos services
        </a>
      </section>

      <section className={styles.portfolio}>
        <h2>Notre Portfolio</h2>
        <p>
          Explorez nos projets récents et découvrez comment nous avons aidé nos clients à atteindre
          leurs objectifs.
        </p>
        <a href='/portfolio' className={styles.link}>
          Voir notre portfolio
        </a>
      </section>
    </div>
  );
}
