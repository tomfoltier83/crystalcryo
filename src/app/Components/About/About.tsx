"use client";
import React from "react";
import styles from "./About.module.css";
import IceCrystalVideo from "../IceCrystalVideo/IceCrystalVideo";
import { motion } from "motion/react";
import Image from "next/image";

function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.overlay}>
        {/* <IceCrystalVideo /> */}
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.title}
        >
          La puissance du froid,{" "}
          <span>
            réinventée<span style={{ color: "white" }}>.</span>
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.subTitle}
        >
          Face aux limites des méthodes traditionnelles, la cryogénie s’impose
          comme la solution moderne et durable pour préserver, sublimer et
          protéger les biens d&apos;exception. <br />
          <br />
          Notre procédé cryogénique exclusif associe innovation et précision
          pour offrir des résultats inégalés, sans compromis sur la qualité.
        </motion.p>
        {/* <button className={styles.button}>en savoir plus</button> */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.notaBene}
        >
          <div className={styles.notaBeneContent}>
            <span>À savoir :</span>
            <p>
              Il est possible de traiter absolument toutes les surfaces et tous
              types de supports.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
