"use client";

import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>Etablissement Rouquet</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href='/'>Accueil</Link>
        </li>
        <li>
          <Link href='/about'>À propos</Link>
        </li>
        <li>
          <Link href='/services'>Services</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
