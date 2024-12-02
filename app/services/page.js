import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <h1>Nos Services</h1>

      <h2>Description des services de revêtement alimentaire</h2>
      <p>
        Notre résine époxy appliquée à chaud offre une hygiène alimentaire optimale et une facilité
        de nettoyage accrue. Nous sommes à jour sur les nouvelles normes alimentaires (Novembre
        2024), avec une garantie allant de 5 à 10 ans.
      </p>
      <p>
        En plus, nos clients bénéficient d'un amortissement total de la facture des travaux l’année
        même de leur réalisation, et d'une prise en charge partielle par{" "}
        <strong>FRANCE AGRIMER</strong>.
      </p>

      <h2>Types de revêtements</h2>
      <ul>
        <li>
          Résine époxy à deux composants appliquée à chaud à l’aide d’une machine GRACO à très haute
          pression.
        </li>
        <li>Revêtement simple pour l’acier (sans stratification).</li>
        <li>Revêtement stratifié à l’aide d’un tissu de verre de 300g/m².</li>
        <li>
          Peinture en tout genre pour la réfection de sols ou la mise en peinture de façades de
          cuves.
        </li>
      </ul>

      <h2>Différents types de prestations</h2>
      <ul>
        <li>Sablage pneumatique.</li>
        <li>Réfection des enduits sur voûtes, murs ou sols.</li>
        <li>Fourniture et pose de piquages inox 316, robinets, règles de niveau, thermomètres.</li>
        <li>Fourniture et pose de cheminées et portes en inox 316.</li>
      </ul>
    </div>
  );
}
