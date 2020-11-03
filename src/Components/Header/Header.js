import React from "react";
import {Link} from 'react-router-dom';

import logoHorizontal from "../../assets/logoHorizontal.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoHorizontal} className={styles.img} alt="Buysilia" />
      </div>

      <nav>
        <ul className={styles.menu}>
          <Link to="/login/client"><li className={styles.items}>Cliente</li></Link>
          <Link to="/login/provider"><li className={styles.items}>Fornecedor</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
