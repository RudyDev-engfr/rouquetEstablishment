import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href='/'>Accueil</Link>
      <Link href='/about'>À propos</Link>
      <Link href='/services'>Services</Link>
      <Link href='/portfolio'>Portfolio</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/legal'>Mentions légales</Link>
    </nav>
  );
}
