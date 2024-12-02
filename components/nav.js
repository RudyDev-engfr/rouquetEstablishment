"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled!"); // Log pour vérifier si la fonction est bien déclenchée
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    console.log("Menu closed!"); // Log pour vérifier si la fonction est bien déclenchée
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>Etablissement Rouquet</Link>
      </div>
      <button className={styles.burger} onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}>
        <li>
          <Link href='/' onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href='/about' onClick={closeMenu}>
            À propos
          </Link>
        </li>
        <li>
          <Link href='/services' onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href='/portfolio' onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href='/contact' onClick={closeMenu}>
            Contact
          </Link>
        </li>
        {/* <li>
          <Link href='/legal' onClick={closeMenu}>
            Mentions légales
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
