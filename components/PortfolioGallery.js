import Image from "next/image";
import styles from "../app/portfolio/portfolio.module.css"; // Utilisation du fichier CSS global de portfolio

const PortfolioGallery = () => {
  const galleries = [
    {
      title: "Revêtement de citerne remorquée",
      images: [
        "/images/portfolio/citerne-remorque/citerne_remorque_1.jpeg",
        "/images/portfolio/citerne-remorque/citerne_remorque_2.jpeg",
        "/images/portfolio/citerne-remorque/citerne_remorque_3.jpeg",
      ],
    },

    {
      title: "Revêtement d’intérieur de citerne de travail",
      images: [
        "/images/portfolio/citerne-interieur/citerne_interieur_1.jpeg",
        "/images/portfolio/citerne-interieur/citerne_interieur_2.jpeg",
        "/images/portfolio/citerne-interieur/citerne_interieur_3.jpeg",
      ],
    },
    {
      title: "Revêtement d’un sol béton fissuré et érodé par les années",
      images: [
        "/images/portfolio/sol-beton/sol_beton_1.jpeg",
        "/images/portfolio/sol-beton/sol_beton_2.jpeg",
        "/images/portfolio/sol-beton/sol_beton_3.jpeg",
      ],
    },
    {
      title: "Sol époxy",
      images: [
        "/images/portfolio/sol-epoxy/sol_epoxy_1.jpeg",
        "/images/portfolio/sol-epoxy/sol_epoxy_2.jpeg",
      ],
    },
    {
      title: "Installation d’une porte dans une cuve béton",
      images: [
        "/images/portfolio/porte-cuve/nouvelle_porte_1.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_2.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_3.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_4.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_5.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_6.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_7.jpeg",
        "/images/portfolio/porte-cuve/nouvelle_porte_8.jpeg",
      ],
    },
  ];

  return (
    <div className={styles.portfolioContainer}>
      {galleries.map((gallery, galleryIndex) => (
        <div key={galleryIndex} className={styles.gallery}>
          <h3 className={styles.galleryTitle}>{gallery.title}</h3>
          <div className={styles.imageGrid}>
            {gallery.images.map((src, imageIndex) => (
              <Image
                key={imageIndex}
                src={src}
                alt={`${gallery.title} ${imageIndex + 1}`}
                width={300}
                height={200}
                className={styles.image}
                layout='responsive'
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;
