import React from "react";
import Input from "../../Components/Input/Input.js";
import styles from "./ClientLogin.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";

function ClientLogin() {
  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>
            Olá, cliente! <br />
            Faça seu login
          </h2>
          <form className={styles.form}>
            <Input title="Usuário" type="text" name="user" percWidth="70%" />
            <Input title="Senha" type="password" name="paddword" percWidth="70%" />
            
            <SubmitButton text="Entrar" minWidth='250px' marginTop='50px' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientLogin;
