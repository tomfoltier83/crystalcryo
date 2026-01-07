"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./PrestationCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  visibleIndex: boolean;
};

export default function PrestationsCard({
  title,
  description,
  imageClass,
  formules,
  visibleIndex
}: CardProps) {
  const [open, setOpen] = useState(false);

  const isDevis = useMemo(
    () =>
      title === "Cryogénie Industrielle & Patrimoniale" ||
      title === "Cryogénie Aéronautique" ||
      title === "Cryogénie Moto",
    [title]
  );

  const openTarifs = () => {
    if (!isDevis) setOpen(true);
  };

  return (
    <div
      className={styles.cardWrapper}
      data-open={open ? "true" : "false"}
      style={{ background: visibleIndex ? "#87c2e3" : "" }}
    >
      <div className={styles.card}>
        {/* FRONT */}
        <div className={styles.front} aria-hidden={open}>
          <h3>{title}</h3>
          <p>{description}</p>

          <div className={`${styles.media} ${imageClass}`}>
            <button
              className={`${styles.button} ${styles.buttonGhost}`}
              onClick={openTarifs}
              type="button"
              disabled={isDevis}
            >
              {!isDevis ? "Voir les tarifs" : "Tarifs sur devis"}
            </button>
          </div>
        </div>

        {/* BACK */}
        <div className={styles.back} aria-hidden={!open}>
          <div className={styles.backActions}>
            <button
              className={styles.backButton}
              onClick={() => setOpen(false)}
              type="button"
            >
              <FontAwesomeIcon icon={faXmark} style={{ color: "white" }} />
            </button>
          </div>
          <h4 className={styles.backTitle}>
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
                      {k + 1 !== f.detail.length ? <span>,&nbsp;</span> : null}
                    </span>
                  ))}
                </span>

                <span className={styles.time}>{f.time}</span>
                <span className={styles.price}>{f.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
