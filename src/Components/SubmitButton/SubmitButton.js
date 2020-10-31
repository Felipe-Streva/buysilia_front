import React from "react";
import styles from "./SubmitButton.module.css";

function SubmitButton(props) {
  return (
    <div className={styles.container}>
      <button type="submit" className={styles.button}>
        {props.text}
      </button>
    </div>
  );
}

export default SubmitButton;
