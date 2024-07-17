import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revêtement alimentaire à Cognac - Nom de l'entreprise</title>
        <meta
          name='description'
          content="Découvrez les services de revêtement alimentaire de Nom de l'entreprise à Cognac. Expertise, qualité et durabilité."
        />
      </Head>
      <NextSeo
        title="Revêtement alimentaire à Cognac - Nom de l'entreprise"
        description="Découvrez les services de revêtement alimentaire de Nom de l'entreprise à Cognac. Expertise, qualité et durabilité."
        canonical='https://www.votre-site.com/'
        openGraph={{
          url: "https://www.votre-site.com/",
          title: "Revêtement alimentaire à Cognac - Nom de l&apos;entreprise",
          description:
            "Découvrez les services de revêtement alimentaire de Nom de l&apos;entreprise à Cognac. Expertise, qualité et durabilité.",
          images: [
            {
              url: "https://www.votre-site.com/images/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Revêtement alimentaire à Cognac",
            },
          ],
          site_name: "Nom de l&apos;entreprise",
        }}
      />
      {/* Contenu de la page */}
    </>
  );
}
