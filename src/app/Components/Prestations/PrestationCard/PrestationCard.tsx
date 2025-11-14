"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PrestationCard.module.css";

type CardProps = {
  title: string;
  description: React.ReactNode;
  imageClass: string;
  formules: Array<{
    label: string;
    detail: string[];
    time: string;
    price: string;
  }>;
};

export default function PrestationsCard({
  title,
  description,
  imageClass,
  formules,
}: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const recalc = () => {
    const fh = frontRef.current?.scrollHeight ?? 0;
    const bh = backRef.current?.scrollHeight ?? 0;
    const next = flipped ? Math.max(fh, bh) - 20 : Math.max(fh, bh) + 20;
    setHeight((prev) =>
      prev === undefined || Math.abs(prev - next) > 1 ? next : prev
    );
  };

  useLayoutEffect(() => {
    recalc();
  }, [flipped]);

  const flipCard = () => {
    if (
      title !== "Cryogénie Industrielle & Patrimoniale" &&
      title !== "Cryogénie Aéronautique" &&
      title !== "Cryogénie Moto"
    ) {
      setFlipped(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={styles.card}
      ref={cardRef}
      style={{ height: height }}
    >
      <motion.div
        className={styles.cardInner}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* FRONT */}
        <div className={`${styles.cardFace} ${styles.front}`} ref={frontRef}>
          <h3>{title}</h3>
          <p>{description}</p>

          <div className={`${styles.media} ${imageClass}`}>
            <button
              className={`${styles.button} ${styles.buttonGhost}`}
              onClick={flipCard}
            >
              {title !== "Cryogénie Industrielle & Patrimoniale" &&
              title !== "Cryogénie Aéronautique" &&
              title !== "Cryogénie Moto"
                ? "Voir les tarifs"
                : "Tarifs sur devis"}
            </button>
          </div>
        </div>

        {/* BACK */}
        <div className={`${styles.cardFace} ${styles.back}`} ref={backRef}>
          <h4 style={{ marginTop: 0 }}>
            Tarifs <span>(HT)</span>
          </h4>
          <ul className={styles.formules}>
            {formules.map((f, i) => (
              <li key={i}>
                <span className={styles.label}>{f.label}</span>
                <span className={styles.details}>
                  {f.detail.map((d, k) => (
                    <span className={styles.detail} key={k}>
                      {d}
                      {k + 1 !== f.detail.length ? (
                        <span>{",\u00A0"}</span>
                      ) : null}
                    </span>
                  ))}
                </span>
                <span className={styles.time}>{f.time}</span>
                <span className={styles.price}>{f.price}</span>
              </li>
            ))}
          </ul>
          <div className={styles.backActions}>
            <button
              className={styles.buttonGhost}
              onClick={() => setFlipped(false)}
            >
              Retour
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
