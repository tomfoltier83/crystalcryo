import Image from "next/image"
import styles from "./Footer.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faMapLocation, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Crystal Cryo logo"
                        width={150}
                        height={150}
                        priority
                    />
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <Link href="" className={styles.social}>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "white" }} />
                        </Link>
                        <p>Basés à Sainte-Maxime (83120), nous opérons dans toute la région PACA.</p>
                    </div>
                    <div className={styles.contact}>
                        <Link href="" className={styles.social}>
                            <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
                        </Link>
                        <p>06.22.95.44.07</p>
                    </div>
                    <div className={styles.contact}>
                        <Link href="" className={styles.social}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
                        </Link>
                        <p>crystal.cryo83120@gmail.com</p>
                    </div>
                    <div className={styles.contact}>
                        <Link href="" className={styles.social}>
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
                        </Link>
                        <p>@crystal_cryo83</p>
                    </div>
                </div>
                <div className={styles.links}>
                    <p style={{ paddingBottom: "10px", fontSize: "16px", color: "grey" }}>Liens utiles</p>
                    <ul>
                        <li>
                            <Link href="">
                                Politique de confidentialité
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                Mentions légales
                            </Link>
                        </li>
                    </ul>
                </div>
            </div >
            <div className={styles.bottom}>
                <div className={styles.legal}>
                    <p style={{ padding: "20px 0 10px 0" }}>© 2025 Crystal Cryo</p>
                    <p>Site web développé par </p>
                    <Link href="https://www.tomfoltier.fr/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/images/logoTF.png"
                            alt="Tom Foltier logo"
                            width={70}
                            height={70}
                            priority
                        />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer