"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Prestations.module.css";
import PrestationCard from "./PrestationCard/PrestationCard";

export default function Prestations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 100%"],
  });

  const upperX = useTransform(scrollYProgress, [0, 0.2], [-400, 0]);
  const upperOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  const lowerX = useTransform(scrollYProgress, [0, 0.2], [500, 0]);
  const lowerOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

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
Un procédé de nettoyage par projection de glace carbonique qui
élimine graisses, poussières et impuretés sans eau, sans
produits chimiques et sans abrasion. Les micro-granulés de CO₂ à
–78 °C impactent la surface, subliment instantanément et
décrochent la saleté sans lustrer ni altérer les supports, même
les plus sensibles (peinture, plastiques, caoutchoucs, faisceaux,
capteurs).
<br />
<br />
Idéal pour l’entretien des véhicules de prestige, des moteurs
aux carrosseries, en garantissant un résultat irréprochable tout
en préservant les matériaux. La cryogénie automobile permet
d’atteindre les zones difficilement accessibles, réduit le temps
d’immobilisation, ne laisse aucun résidu humide et respecte
l’environnement. Parfait pour les dessous de caisse,
jantes, étriers, compartiments techniques et intérieurs délicats :
elle supprime huiles, goudrons, résidus de colle,
moisissures et odeurs.
</>
            }
            imageClass={styles.imageVoiture}
            formules={[
              {
                label: "Formule Personnalisée",
                detail: [""],
                time: "",
                price: "Sur devis",
              },
              {
                label: "Formule Rubis",
                detail: ["Haut moteur."],
                time: "",
                price: "à partir de 380€",
              },
              {
                label: "Formule Saphir",
                detail: ["Haut moteur", "Bas moteur", "Compartiment moteur."],
                time: "",
                price: "à partir de 880€",
              },
              {
                label: "Formule Émeraude",
                detail: [
                  "Haut moteur",
                  "Bas moteur",
                  "Compartiment moteur",
                  "Châssis.",
                ],
                time: "",
                price: "à partir de 1280€",
              },
              {
                label: "Formule Diamant",
                detail: [
                  "Haut moteur",
                  "Bas moteur",
                  "Compartiment moteur",
                  "Châssis",
                  "Intérieur roues",
                  "Intérieur jantes.",
                ],
                time: "",
                price: "à partir de 1880€",
              },
              {
                label: "Formule Crystal",
                detail: [
                  "Haut moteur",
                  "Bas moteur",
                  "Compartiment moteur",
                  "Châssis",
                  "Intérieur roues",
                  "Intérieur jantes",
                  "Traitemet roulements.",
                ],
                time: "",
                price: "à partir de 2780€",
              },
            ]}
          />

          <PrestationCard
            title="Cryogénie Nautique"
            description={
              <>
                Service dédié aux yachts et bateaux. Traitement des coques,
                ponts et moteurs en profondeur, élimination des dépôts salins,
                graisses et moisissures, en respectant les matériaux sensibles.
                <br />
                <br />
                Une méthode propre et efficace pour prolonger la longévité et
                l’éclat.
              </>
            }
            imageClass={styles.imageBateau}
            formules={[
              {
                label: "Formule Personnalisée",
                detail: [""],
                time: "",
                price: "Sur devis",
              },
              {
                label: "Formule Émeraude",
                detail: ["Pont en teck", "Deck synthétique."],
                time: "",
                price: "à partir de 350€/h",
              },
              {
                label: "Formule Diamant",
                detail: ["Coque", "Oeuvres vives."],
                time: "",
                price: "à partir de 350€/h",
              },
              {
                label: "Formule Crystal",
                detail: ["Cale moteur", "Compartiments techniques."],
                time: "",
                price: "à partir de 350€/h",
              },
              {
                label: "Prestations supplémentaires",
                detail: ["Poste de pilotage", "Selleries", "Boudins", "..."],
                time: "",
                price: "Sur devis",
              },
            ]}
          />

          <PrestationCard
            title="Cryogénie Industrielle & Patrimoniale"
            description={
              <>
                Nettoyage de pièces industrielles, équipements sensibles et
                éléments de patrimoine : élimination des peintures, graisses et
                dépôts sans endommager les surfaces, même fragiles.
                <br />
                <br />
                Une solution respectueuse et durable pour environnements
                exigeants.
              </>
            }
            imageClass={styles.imageIndustrie}
            formules={[
              {
                label: "Formule Personnalisée",
                detail: [""],
                time: "",
                price: "Sur devis",
              },
              {
                label: "Pièces mécaniques",
                detail: [""],
                time: "",
                price: "à partir de 160€",
              },
              {
                label: "Bâtiments / Patrimoine",
                detail: [""],
                time: "",
                price: "sur devis",
              },
              {
                label: "Intervention sur site",
                detail: [""],
                time: "",
                price: "sur devis",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
