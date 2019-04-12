import React from "react";
import Spinkit from "react-spinkit";
import styles from "./Spinner.module.css";

const Spinner = () => (
  <div className={styles.container}>
    <Spinkit name="ball-spin-fade-loader" color="#000" />
  </div>
);

export default Spinner;
