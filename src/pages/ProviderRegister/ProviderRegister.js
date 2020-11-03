import React from 'react';
import Input from "../../Components/Input/Input.js";
import styles from "./ProviderRegister.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import Button from "../../Components/Button/Button";

export default function ProviderRegister(){
    return (
        <div className={styles.body}>
            <SideHeader />
            <div className={styles.container}>
                <div className={styles.div}>
                    <h2 className={styles.h2}>
                        Olá, Fornecedor! <br />
                        Cadastre-se
                    </h2>
                    <form className={styles.form}>
                        <Input title="Nome" type="text" name="name" percWidth="100%" />
                        <Input title="CNPJ" type="text" name="cnpj" percWidth="50%" />
                        <Input title="Telefone" type="text" name="phone" percWidth="50%" />
                        <Input title="Razão Social" type="text" name="company_name" percWidth="100%" />
                        <Input title="Endereço" type="text" name="address" percWidth="100%" />

                        <Button type='submit' text="Cadastrar" minWidth='250px' marginTop='50px' />
                    </form>
                </div>
            </div>
        </div>
        
    )
}