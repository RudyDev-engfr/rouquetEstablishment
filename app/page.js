import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./page.module.css";

// Charger les composants client de manière dynamique sans SSR
// const Head = dynamic(() => import("../components/Head"), { ssr: false });
// const GoogleAnalytics = dynamic(() => import("../components/GoogleAnalytics"), { ssr: false });

export default function HomePage() {
  return (
    <>
      {/* <Head
        title='Etablissement Rouquet'
        description="Découvrez les services de revêtement alimentaire d'Etablissement Rouquet à Cognac. Expertise, qualité et durabilité."
        canonical='https://www.rouquet.com/'
        openGraph={{
          url: "https://www.rouquet.com/",
          title: "Revêtement alimentaire à Cognac - Etablissement Rouquet",
          description:
            "Découvrez les services de revêtement alimentaire d&apos;Etablissement Rouquet à Cognac. Expertise, qualité et durabilité.",
          images: [
            {
              url: "https://www.rouquet.com/images/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Revêtement alimentaire à Cognac",
            },
          ],
          site_name: "Etablissement Rouquet",
        }}
      /> */}
      {/* <GoogleAnalytics /> */}
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Bienvenue chez Etablissement Rouquet</h1>
          <p>Experts en revêtement alimentaire à Cognac</p>
          <a href='/contact' className={styles.cta}>
            Contactez-nous
          </a>
        </header>

        <section className={styles.services}>
          <h2>Nos Services</h2>
          <p>
            Nous offrons une gamme complète de services de revêtement alimentaire pour répondre à
            tous vos besoins.
          </p>
          <a href='/services' className={styles.link}>
            Découvrir nos services
          </a>
        </section>

        <section className={styles.portfolio}>
          <h2>Notre Portfolio</h2>
          <p>
            Explorez nos projets récents et découvrez comment nous avons aidé nos clients à
            atteindre leurs objectifs.
          </p>
          <a href='/portfolio' className={styles.link}>
            Voir notre portfolio
          </a>
        </section>
      </div>
    </>
  );
}
