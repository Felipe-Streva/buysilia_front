import React from "react";
import styles from "../Textarea/Textarea.module.css";

function Textarea({ title }) {
  return (
    <>
      <label className={styles.label}>{title}</label>
      <textarea className={styles.textarea} cols="30" rows="5"></textarea>
    </>
  );
}

export default Textarea;
