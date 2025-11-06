import React from "react";
import styles from "./Why.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSpin, faBold, faBolt, faCheckDouble, faCircleCheck, faGaugeHigh, faHandshake, faHandSparkles, faHeartCircleCheck, faHouseUser, faShieldHeart, faVirusCovidSlash } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "white" }} />
          <span>Principe propre.</span> Pas d'eau, pas de déchet, pasde solvant,
          pas de poussière.
        </p>
        <p>
          <FontAwesomeIcon icon={faHandSparkles} style={{ color: "white" }} />
          <span>Nettoyage non destructif.</span>Pas de contact direct avec la
          surface à nettoyer, non corrosif.
        </p>
        <p>
          <FontAwesomeIcon icon={faGaugeHigh} style={{ color: "white" }} />
          <span>Efficacité réglable.</span>Du décapage de peinture au
          dépoussiérage de circuits électroniques.
        </p>
        <p>
          <FontAwesomeIcon icon={faCheckDouble} style={{ color: "white" }} />
          <span>Nettoyage des endroits difficiles d'accès.</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faArrowsSpin} style={{ color: "white" }} />
          <span>Traitement sans démontage.</span>Pas d'arrêt des matériels sous
          tension.
        </p>
        <p>
          <FontAwesomeIcon icon={faHouseUser} style={{ color: "white" }} />
          <span>Pas de dégradation des abords.</span>Possibilité de travailler à
          l'intérieur.
        </p>
        <p>
          <FontAwesomeIcon icon={faShieldHeart} style={{ color: "white" }} />
          <span>Sans risque pour les personnes.</span>Gaz inerte et non toxique.
        </p>
        <p>
          <FontAwesomeIcon icon={faVirusCovidSlash} style={{ color: "white" }} />
          <span>Action bactéricide.</span>Destruction des acariens, lichens,
          mousses, champignons.
        </p>
        <p>
          <FontAwesomeIcon icon={faBolt} style={{ color: "white" }} />
          <span>Rapidité d'exécution.</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faHeartCircleCheck} style={{ color: "white" }} />
          <span>
            Compatibilité avec les normes sanitaires les plus strictes.
          </span>
        </p>
        <p>
          <FontAwesomeIcon icon={faHandshake} style={{ color: "white" }} />
          <span>Durabilité exceptionnelle et résultats incomparables.</span>
        </p>
      </div>
    </div>
  );
}
