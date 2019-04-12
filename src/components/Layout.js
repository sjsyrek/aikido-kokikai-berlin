import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import kanji from "./kanji.png";
import styles from "./Layout.module.css";

const Layout = props => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {props.children}
      <img
        className={styles.kanji}
        src={kanji}
        alt="Aikido Kokikai Berlin kanji"
      />
    </div>
    <Footer />
  </div>
);

export default Layout;
