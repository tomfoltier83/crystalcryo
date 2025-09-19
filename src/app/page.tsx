import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <Hero/>
      <About/>
    </div>
  );
}
