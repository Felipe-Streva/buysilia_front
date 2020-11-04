import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logout.module.css";

function Logout() {
  return (
    <div>
      <Link to="/">
        <h3 className={styles.logout}>Sair</h3>
      </Link>
    </div>
  );
}

export default Logout;
