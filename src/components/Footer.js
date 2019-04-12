import React from "react";
import logo from "./logo.png";
import fb from "./fb.svg";
import styles from "./Footer.module.css";

const thisYear = new Date().getFullYear();

const Footer = () => (
  <div className={styles.container}>
    <a href="https://www.meetup.com/aikido-kokikai-berlin/">
      <img className={styles.logo} src={logo} alt="Logo" />
    </a>
    <a
      href="http://bit.ly/aikido-berlin-facebook"
      alt="Aikido Kokikai Berlin on Facebook"
    >
      <img className={styles.facebook} src={fb} alt="Facebook" />
    </a>
    <div className={styles.contact}>
      <a href="mailto:info@kokikai.de">info@kokikai.de</a>
    </div>
    <div className={styles.copyright}>© {thisYear} Aikido Kokikai Berlin</div>
  </div>
);

export default Footer;
