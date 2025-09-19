"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Prestations.module.css";
import PrestationCard from "./PrestationCard/PrestationCard"

export default function Prestations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 95%"],
  });

  const upperX = useTransform(scrollYProgress, [0, 0.2], [-400, 0]);
  const upperOpacity = useTransform(scrollYProgress, [0, -1, 1], [0, 1, 1]);

  const lowerX = useTransform(scrollYProgress, [0, 0.2], [500, 0]);
  const lowerOpacity = useTransform(scrollYProgress, [0, -1, 1], [0, 1, 1]);

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        className={styles.upper}
        style={{ x: upperX, opacity: upperOpacity }}
      >
        <p style={{ textAlign: "left", color: "white", paddingBottom: "20px" }}>
          Découvrez
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.lower}
          style={{ x: lowerX, opacity: lowerOpacity }}
        >
          <p style={{ textAlign: "right", color: "white", paddingTop: "15px" }}>
            Nos solutions
          </p>
        </motion.div>
        <div className={styles.prestations}>
          <PrestationCard
            title="Cryogénie Automobile"
            description={
              <>
                Un procédé de nettoyage par projection de glace carbonique qui élimine graisses,
                poussières et impuretés sans eau, sans produits chimiques et sans abrasion.
                <br />
                <br />
                Idéal pour l’entretien des véhicules de prestige, des moteurs aux carrosseries,
                en garantissant un résultat irréprochable tout en préservant les matériaux.
              </>
            }
            imageClass={styles.imageVoiture}
            prices={[
              { label: "Compartiment moteur", price: "à partir de 180€" },
              { label: "Châssis / trains roulants", price: "à partir de 220€" },
              { label: "Détail complet", price: "sur devis" },
            ]}
          />

          <PrestationCard
            title="Cryogénie Nautique"
            description={
              <>
                Service dédié aux yachts et bateaux. Traitement des coques, ponts et moteurs en
                profondeur, élimination des dépôts salins, graisses et moisissures, en respectant
                les matériaux sensibles.
                <br />
                <br />
                Une méthode propre et efficace pour prolonger la longévité et l’éclat.
              </>
            }
            imageClass={styles.imageBateau}
            prices={[
              { label: "Moteur / Salle des machines", price: "sur devis" },
              { label: "Pont & accastillage", price: "à partir de 260€" },
              { label: "Traitement complet", price: "sur devis" },
            ]}
          />

          <PrestationCard
            title="Cryogénie Industrielle & Patrimoniale"
            description={
              <>
                Nettoyage de pièces industrielles, équipements sensibles et éléments de patrimoine :
                élimination des peintures, graisses et dépôts sans endommager les surfaces, même
                fragiles.
                <br />
                <br />
                Une solution respectueuse et durable pour environnements exigeants.
              </>
            }
            imageClass={styles.imageIndustrie}
            prices={[
              { label: "Pièces mécaniques", price: "à partir de 160€" },
              { label: "Bâtiments / Patrimoine", price: "sur devis" },
              { label: "Intervention sur site", price: "sur devis" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
