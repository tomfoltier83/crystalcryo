"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Prestations.module.css";
import PrestationCard from "./PrestationCard/PrestationCard";

export default function Prestations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 200%"],
  });

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const handleScroll = () => {
      if (!itemRefs.current.length) return;

      const centerY = window.innerHeight / 2;

      const distances = itemRefs.current.map((el, index) => {
        if (!el) return { index, distance: Infinity };
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - elementCenter);
        return { index, distance };
      });

      const closest = distances.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      setVisibleIndex(closest.index);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const upperX = useTransform(scrollYProgress, [0, 0.2], [-400, 0]);
  const upperOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  const lowerX = useTransform(scrollYProgress, [0, 0.2], [500, 0]);
  const lowerOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <div className={styles.container} ref={ref} id="prestations">
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
        <ul className={styles.prestations}>
          <li
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
          >
            <PrestationCard
              visibleIndex={visibleIndex === 0}
              title="Cryogénie Automobile"
              description={
                <>
                  Procédé de nettoyage par projection de glace carbonique à –78
                  °C, sans eau, sans produits chimiques et sans abrasion. Les
                  micro-granulés de CO₂ subliment à l’impact et décrochent
                  efficacement graisses, poussières et résidus sans altérer les
                  surfaces. Idéal pour les véhicules de prestige, moteurs et
                  carrosseries, il préserve peintures, plastiques et faisceaux,
                  atteint les zones difficiles d’accès, réduit le temps
                  d’immobilisation, ne laisse aucun résidu et respecte
                  l’environnement.
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
                  price: "",
                },
                {
                  label: "Formule Saphir",
                  detail: ["Haut moteur", "Bas moteur", "Compartiment moteur."],
                  time: "",
                  price: "",
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
                  price: "",
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
                  price: "",
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
                  price: "",
                },
              ]}
            />
          </li>
          <li
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
          >
            <PrestationCard
              visibleIndex={visibleIndex === 1}
              title="Cryogénie Nautique"
              description={
                <>
                  Service de nettoyage par cryogénie dédié aux yachts et
                  bateaux, pour le traitement des coques, ponts et moteurs.
                  Élimine efficacement les dépôts salins, graisses et
                  moisissures sans agresser les matériaux sensibles. Idéal avant
                  carénage ou hivernage, même dans les zones difficiles d’accès.
                  Procédé sans produits chimiques, propre et respectueux de
                  l’environnement, qui préserve la longévité, les performances
                  et l’esthétique de l’embarcation.
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
                  price: "à partir de 300€/h",
                },
                {
                  label: "Formule Crystal",
                  detail: ["Cale moteur", "Compartiments techniques."],
                  time: "",
                  price: "à partir de 400€/h",
                },
                {
                  label: "Prestations supplémentaires",
                  detail: ["Poste de pilotage", "Selleries", "Boudins", "..."],
                  time: "",
                  price: "Sur devis",
                },
              ]}
            />
          </li>

          <li
            ref={(el) => {
              itemRefs.current[2] = el;
            }}
          >
            <PrestationCard
              visibleIndex={visibleIndex === 2}
              title="Cryogénie Industrielle & Patrimoniale"
              description={
                <>
                  Nettoyage de pièces industrielles, équipements sensibles et
                  éléments de patrimoine : élimination des peintures, graisses
                  et dépôts sans endommager les surfaces, même fragiles.
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
          </li>

          <li
            ref={(el) => {
              itemRefs.current[3] = el;
            }}
          >
            <PrestationCard
              visibleIndex={visibleIndex === 3}
              title="Cryogénie Aéronautique"
              description={
                <>
                  Service dédié aux avions, hélicoptères et pièces
                  aéronautiques. Traitement minutieux des fuselages, trains
                  d’atterrissage et compartiments moteurs, élimination des
                  huiles, suies et résidus de carburant tout en préservant
                  alliages légers, peintures techniques et matériaux composites.
                  <br />
                  <br />
                  Une méthode propre et précise pour renforcer la fiabilité, la
                  sécurité et la durée de vie des équipements.
                </>
              }
              imageClass={styles.imageAero}
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
          </li>

          <li
            ref={(el) => {
              itemRefs.current[4] = el;
            }}
          >
            <PrestationCard
              visibleIndex={visibleIndex === 4}
              title="Cryogénie Moto"
              description={
                <>
                  Service dédié aux motos, quads et scooters. Nettoyage en
                  profondeur des blocs moteurs, châssis, jantes et lignes
                  d’échappement, élimination des graisses, goudrons, boues et
                  débuts de corrosion, tout en respectant peintures, chromes et
                  joints sensibles.
                  <br />
                  <br />
                  Une méthode propre et efficace pour prolonger la longévité et
                  l’éclat de votre deux-roues.
                </>
              }
              imageClass={styles.imageMoto}
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
          </li>
        </ul>
      </div>
    </div>
  );
}
