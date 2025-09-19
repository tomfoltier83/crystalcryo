// PrestationsCard.tsx
"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PrestationCard.module.css";

type CardProps = {
  title: string;
  description: React.ReactNode;
  imageClass: string;
  prices: Array<{ label: string; price: string }>;
};

export default function PrestationsCard({
  title,
  description,
  imageClass,
  prices,
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
    setHeight(prev => (prev === undefined || Math.abs(prev - next) > 1 ? next : prev));
  };

  useLayoutEffect(() => {
    recalc();
  }, [flipped]);

  useEffect(() => {
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.card} ref={cardRef} style={{ height: height }}>
      <motion.div
        className={styles.cardInner}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* FRONT */}
        <div className={`${styles.cardFace} ${styles.front}`} ref={frontRef}>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className={styles.button} onClick={() => setFlipped(true)}>
            Voir les tarifs
          </button>
          <div className={`${styles.media} ${imageClass}`} />
        </div>

        {/* BACK */}
        <div className={`${styles.cardFace} ${styles.back}`} ref={backRef}>
          <h4 style={{ marginTop: 0 }}>Tarifs</h4>
          <ul className={styles.prices}>
            {prices.map((p, i) => (
              <li key={i}>
                <span>{p.label}</span>
                <strong>{p.price}</strong>
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
            <button className={styles.buttonPrimary}>Demander un devis</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
