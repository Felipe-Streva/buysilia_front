import React from "react";
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
          <li className={styles.items}>Cliente</li>
          <li className={styles.items}>Fornecedor</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
