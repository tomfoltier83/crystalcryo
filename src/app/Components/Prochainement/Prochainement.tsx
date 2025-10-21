"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./Prochainement.module.css";
import Image from "next/image";
import { motion } from "motion/react";

// --- Types ---
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

// --- Utils ---
function getTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const totalMs = Math.max(0, target.getTime() - now.getTime());

  const secondsTotal = Math.floor(totalMs / 1000);
  const days = Math.floor(secondsTotal / (60 * 60 * 24));
  const hours = Math.floor((secondsTotal % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
  const seconds = secondsTotal % 60;

  return { days, hours, minutes, seconds, totalMs };
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

const MotionImage = motion.create(Image);

// --- Component ---
// Compte à rebours pour le 1er novembre 2025, fuseau Europe/Paris (CET après le 26/10/2025)
// Vous pouvez aussi fournir une autre date via la prop `target`.
export default function Prochainement({
  target,
}: {
  /** Date cible au format ISO, Date, ou non fourni (par défaut: 2025-11-01T00:00:00+01:00) */
  target?: string | Date;
  className?: string;
}) {
  const targetDate = useMemo(() => {
    if (target instanceof Date) return target;
    if (typeof target === "string") return new Date(target);
    // Par défaut : minuit le 1er novembre 2025, heure de Paris (CET, UTC+1)
    return new Date("2025-11-01T00:00:00+01:00");
  }, [target]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  return (
    <div className={styles.container} aria-live="polite">
      <MotionImage
        src="/images/logo.png"
        alt="Crystal Cryo logo"
        width={150}
        height={150}
        priority
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // bonus : petite interaction au survol
        whileHover={{ scale: 1.03 }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.title}
      >
        Ouverture prochaine..
      </motion.h2>
      <div>
        <div className={styles.timerContainer}>
          <TimeCard label="Jours" value={String(timeLeft.days)} />
          <TimeCard label="Heures" value={pad2(timeLeft.hours)} />
          <TimeCard label="Minutes" value={pad2(timeLeft.minutes)} />
          <TimeCard label="Secondes" value={pad2(timeLeft.seconds)} />
        </div>
      </div>
      <div className={styles.text}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.title}
        >
          Cryogénie,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.title}
        >
          Exception.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={styles.subTitle}
          style={{ paddingTop: "10px", color: "#87c2e3" }}
        >
          Le <span>froid</span> au service de l’<span>excellence</span>.
        </motion.p>
      </div>
    </div>
  );
}

function TimeCard({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.timerItem}>
      <div className={styles.timerValue}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.title}
        >
          {value}
        </motion.p>
      </div>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.title}
        >
          {label}
        </motion.p>
      </div>
    </div>
  );
}
