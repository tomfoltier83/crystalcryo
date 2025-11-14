"use client";
import styles from "./page.module.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Prestations from "./Components/Prestations/Prestations";
import Footer from "./Components/Footer/Footer";
import Why from "./Components/Why/Why";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  return (
    <div className={styles.page} style={{height: isMenuOpen ? "100vh" : "fit-content"}}>
      <main className={styles.main}></main>
      {/* <Prochainement/> */}
        <div className={styles.burgerContainer}>
          <button
            className={`${styles.burger} ${
              isMenuOpen ? `${styles.opened}` : ""
            }`}
            onClick={handleClick}
            aria-label="Main Menu"
            aria-expanded={isMenuOpen}
          >
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path
                className={`${styles.line} ${styles.line1}`}
                style={{stroke: isMenuOpen ? "white" : "#87c2e3"}}
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path
                className={`${styles.line} ${styles.line2}`}
                style={{stroke: isMenuOpen ? "white" : "#87c2e3"}}
                d="M 20,50 H 80"
              />
              <path
                className={`${styles.line} ${styles.line3}`}
                style={{stroke: isMenuOpen ? "white" : "#87c2e3"}}
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>
        <div className={styles.menu} style={{ transform: isMenuOpen ?  "translateX(0)" : "translateX(100vw)" }}>
          <ul style={{ opacity: isMenuOpen ?  "1" : "0" }}>
            <li><Link href="#about" onClick={handleClick}>Qu&apos;est ce que la cryogénie ?</Link></li>
            <li><Link href="#prestations" onClick={handleClick}>Nos solutions</Link></li>
            <li><Link href="#why" onClick={handleClick}>Les avantages de la cryogénie</Link></li>
            <li>
              <Link href="#contact" onClick={handleClick}>Contact</Link></li>
          </ul>
        </div>
      <Hero />
      <About />
      <Prestations />
      <Why />
      <Footer />
    </div>
  );
}
