import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <>
      <button type={props.type} className={styles.button} style={{minWidth: `${props.minWidth}`, marginTop: `${props.marginTop}`}}>
        {props.text}
      </button>
    </>
  );
}

export default Button;
