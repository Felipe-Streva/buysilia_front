import React, {useContext} from "react";
import { useHistory } from "react-router-dom";

import styles from "./Logout.module.css";

import {Context} from '../../SessionContext';

function Logout(props) {
  const { handleLoggout } = useContext(Context)
  const history = useHistory()

  const logout = () => {
    handleLoggout()
    history.replace('/')
  }

  return (
    <li className={props.logoutStyle} onClick={logout}>
      <p className={styles.logout}>Sair</p>
    </li>
  );
}

export default Logout;
