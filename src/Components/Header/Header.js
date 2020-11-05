import React, { useContext } from "react";
import {Link} from 'react-router-dom';

import logoHorizontal from "../../assets/logoHorizontal.png";
import styles from "./Header.module.css";
import Logout from '../Logout/Logout'

import {Context} from '../../SessionContext';

function Header() {
  const {session} = useContext(Context)

  const logged = () => {
    if(session.provider===0 && session.client===0) return false
    return true
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoHorizontal} className={styles.img} alt="Buysilia" />
      </div>

      <nav>
        <ul className={styles.menu}>
          <Link to="/login/client"><li className={styles.items}>Cliente</li></Link>
          <li className={styles.space} >|</li>
          <Link to="/login/provider"><li className={styles.items}>Fornecedor</li></Link>
          {logged() ? (<> <li className={styles.space} >|</li> <Logout logoutStyle={styles.logout} /></>)  : null} 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
