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

export default function Why() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          Les avantages <br /> de la <span>cryogénie</span> :
        </h2>
      </div>
      <div className={styles.content}>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "white" }} />
          </div>
          <span>Principe propre.</span> Pas d&apos;eau, pas de déchet, pasde
          solvant, pas de poussière.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faHandSparkles} style={{ color: "white" }} />
          </div>
          <span>Nettoyage non destructif.</span>Pas de contact direct avec la
          surface à nettoyer, non corrosif.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faGaugeHigh} style={{ color: "white" }} />
          </div>
          <span>Efficacité réglable.</span>Du décapage de peinture au
          dépoussiérage de circuits électroniques.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faCheckDouble} style={{ color: "white" }} />
          </div>

          <span>Nettoyage des endroits difficiles d&apos;accès.</span>
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faArrowsSpin} style={{ color: "white" }} />
          </div>
          <span>Traitement sans démontage.</span>Pas d&apos;arrêt des matériels
          sous tension.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faHouseUser} style={{ color: "white" }} />
          </div>
          <span>Pas de dégradation des abords.</span>Possibilité de travailler à
          l&apos;intérieur.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faShieldHeart} style={{ color: "white" }} />
          </div>
          <span>Sans risque pour les personnes.</span>Gaz inerte et non toxique.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon
              icon={faVirusCovidSlash}
              style={{ color: "white" }}
            />
          </div>
          <span>Action bactéricide.</span>Destruction des acariens, lichens,
          mousses, champignons.
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faBolt} style={{ color: "white" }} />
          </div>
          <span>Rapidité d&apos;exécution.</span>
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              style={{ color: "white" }}
            />
          </div>
          <span>
            Compatibilité avec les normes sanitaires les plus strictes.
          </span>
        </p>
        <p>
          <div className={styles.glass}>
            <FontAwesomeIcon icon={faHandshake} style={{ color: "white" }} />
          </div>
          <span>Durabilité exceptionnelle et résultats incomparables.</span>
        </p>
      </div>
    </div>
  );
}
