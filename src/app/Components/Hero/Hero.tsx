"use client";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Link href={"./"} className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Crystal Cryo logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        <div className={styles.text}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Cryogénie,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Exception.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.subTitle}
            style={{ paddingBottom: "30px" }}
          >
            Le <span>froid</span> au service de l’<span>excellence</span>.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.button}
            href="#about"
          >
            Découvrir
          </motion.a>
        </div>
      </div>

      <div className={styles.backgroundImage}></div>

      {/* <div className={styles.video}>
        <video playsInline autoPlay loop muted preload="true">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div> */}
    </div>
  );
}

export default Hero;
