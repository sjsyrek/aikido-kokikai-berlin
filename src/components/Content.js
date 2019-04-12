import React from "react";
import styles from "./Content.module.css";

const Content = props => (
  <div className={styles.container}>
    <img
      className={styles.hero}
      src={props.image ? props.image.src : null}
      alt={props.image ? props.image.alt : null}
    />
    <div className={styles.content}>{props.content}</div>
  </div>
);

export default Content;
