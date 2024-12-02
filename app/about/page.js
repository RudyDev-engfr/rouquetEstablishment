import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>À propos de nous</h1>
      <p>
        Etablissement Rouquet est une entreprise créée en 2022 suite au changement de statut de la
        SARL ROUQUET FILS, une entreprise familiale active depuis plus de 40 ans. Nous opérons
        principalement en Charente et Charente Maritime, avec plus de 1100 clients satisfaits.
      </p>

      <h2>Nos domaines d'expertise</h2>
      <p>Nous sommes spécialisés dans :</p>
      <ul>
        <li>
          Étanchéité de cuviers béton par stratification à l’aide de tissu de verre (300g/m²) et
          projection d’une résine époxy à chaud.
        </li>
        <li>Cuves acier, tonnes à lidier, bennes à vendange, et mise en peinture de sols.</li>
      </ul>
    </div>
  );
}
