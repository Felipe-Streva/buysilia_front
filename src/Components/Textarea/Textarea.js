import React from "react";
import styles from "../Textarea/Textarea.module.css";

function Textarea({ description }) {
  return (
    <>
      <label className={styles.label}>Descrição</label>
      <div className={styles.textarea}>{description}</div>
    </>
  );
}

export default Textarea;
