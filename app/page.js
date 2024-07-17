import dynamic from "next/dynamic";

// Charger les composants client de manière dynamique
const Head = dynamic(() => import("../components/Head"), { ssr: false });
const GoogleAnalytics = dynamic(() => import("../components/GoogleAnalytics"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Head
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
      />
      <GoogleAnalytics />
      <div>{/* Contenu de la page d'accueil */}</div>
    </>
  );
}
