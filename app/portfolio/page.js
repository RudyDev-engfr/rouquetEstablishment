import PortfolioGallery from "../../components/PortfolioGallery";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Notre Portfolio</h1>
      <p className={styles.pageDescription}>
        Découvrez certains de nos projets récents, mettant en valeur notre expertise dans le
        revêtement alimentaire, l'installation de portes, et la réfection de citernes.
      </p>
      <PortfolioGallery />
    </div>
  );
}
