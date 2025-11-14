"use client";
import React from "react";
import styles from "./Why.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsSpin,
  faBolt,
  faCheckDouble,
  faCircleCheck,
  faGaugeHigh,
  faHandshake,
  faHandSparkles,
  faHeartCircleCheck,
  faHouseUser,
  faShieldHeart,
  faVirusCovidSlash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

export default function Why() {
  return (
    <div className={styles.container} id="why">
      <div className={styles.title}>
        <h2>
          Les avantages de la <br />
          <span>Cryogénie</span> :
        </h2>
      </div>
      <div className={styles.content}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "white" }} />
          </span>
          <span>Principe propre.</span> Pas d&apos;eau, pas de déchet, pasde
          solvant, pas de poussière.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faHandSparkles} style={{ color: "white" }} />
          </span>
          <span>Nettoyage non destructif.</span>Pas de contact direct avec la
          surface à nettoyer, non corrosif.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faGaugeHigh} style={{ color: "white" }} />
          </span>
          <span>Efficacité réglable.</span>Du décapage de peinture au
          dépoussiérage de circuits électroniques.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faCheckDouble} style={{ color: "white" }} />
          </span>

          <span>Nettoyage des endroits difficiles d&apos;accès.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faArrowsSpin} style={{ color: "white" }} />
          </span>
          <span>Traitement sans démontage.</span>Pas d&apos;arrêt des matériels
          sous tension.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faHouseUser} style={{ color: "white" }} />
          </span>
          <span>Pas de dégradation des abords.</span>Possibilité de travailler à
          l&apos;intérieur.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faShieldHeart} style={{ color: "white" }} />
          </span>
          <span>Sans risque pour les personnes.</span>Gaz inerte et non toxique.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon
              icon={faVirusCovidSlash}
              style={{ color: "white" }}
            />
          </span>
          <span>Action bactéricide.</span>Destruction des acariens, lichens,
          mousses, champignons.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faBolt} style={{ color: "white" }} />
          </span>
          <span>Rapidité d&apos;exécution.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              style={{ color: "white" }}
            />
          </span>
          <span>
            Compatibilité avec les normes sanitaires les plus strictes.
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className={styles.glass}>
            <FontAwesomeIcon icon={faHandshake} style={{ color: "white" }} />
          </span>
          <span>Durabilité exceptionnelle et résultats incomparables.</span>
        </motion.p>
      </div>
    </div>
  );
}
