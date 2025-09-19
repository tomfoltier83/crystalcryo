import React from "react";
import styles from "./About.module.css";
import IceCrystalVideo from "../IceCrystalVideo/IceCrystalVideo";

function About() {
  return (
    <div className={styles.container}>

      <div className={styles.overlay}>

        <IceCrystalVideo />
                      <h2 className={styles.title}>
        La puissance du froid, <span>réinventée.</span>
      </h2>
        <p className={styles.subTitle}>
          Face aux limites des méthodes traditionnelles, la cryogénie s’impose
          comme la solution moderne et durable pour préserver, sublimer et
          protéger les biens d`&apos;`exception. Notre procédé cryogénique exclusif
          associe innovation et précision pour offrir des résultats inégalés,
          sans compromis sur la qualité.
        </p>
        {/* <button className={styles.button}>en savoir plus</button> */}
      </div>
    </div>
  );
}

export default About;