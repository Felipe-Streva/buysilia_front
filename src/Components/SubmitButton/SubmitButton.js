import React from "react";
import styles from "./SubmitButton.module.css";

function SubmitButton(props) {
  return (
    <div>
      <button type="submit" className={styles.button} style={{minWidth: `${props.minWidth}`, marginTop: `${props.marginTop}`}}>
        {props.text}
      </button>
    </div>
  );
}

export default SubmitButton;
