import React from "react";
import Input from "../../Components/Input/Input.js";
import styles from "./ProviderEdit.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";


function ProviderEdit() {
  return (
    <div className={styles.body}>
      <SideHeader />
            <div className={styles.container}>
                <div className={styles.div}>
                    <h2 className={styles.h2}>
                        Seja bem-vindo!!
                    </h2>

                    <form className={styles.form}>
                        <Input title="Nome" type="text" name="name" percWidth="100%" />
                        <Input title="CNPJ" type="text" name="cnpj" percWidth="50%" />
                        <Input title="Telefone" type="text" name="phone" percWidth="50%" />
                        <Input title="Razão Social" type="text" name="company_name" percWidth="100%" />
                        <Input title="Endereço" type="text" name="address" percWidth="100%" />

                        <SubmitButton text="Confirmar" minWidth='250px' marginTop='50px' />
                    </form>
                </div>
            </div>
    </div>
  );
}

export default ProviderEdit
