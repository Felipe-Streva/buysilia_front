import React from "react";
import styles from "./SubmitButton.module.css";

function SubmitButton(props) {
  return (
    <>
      <button type="submit" className={styles.button} style={{minWidth: `${props.minWidth}`, marginTop: `${props.marginTop}`}}>
        {props.text}
      </button>
    </>
  );
}

export default SubmitButton;
