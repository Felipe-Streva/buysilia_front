import React, {useState, useContext} from "react";
import { useHistory } from 'react-router-dom';

import Input from "../../Components/Input/Input.js";
import styles from "./ProviderLogin.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";

import { Context } from '../../SessionContext'

function ProviderLogin() {
  const { handleLoginProvider } = useContext(Context)
  const [cnpj, setCnpj] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const history = useHistory()

  const checkCNPJ = async (event) => {
    event.preventDefault();
    const body = {
      cnpj: cnpj
    }

    const providerID = await fetch(`http://localhost:3333/login/provider`, { method: 'POST',
                                                      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                                                      body: JSON.stringify(body), mode: 'cors', cache: 'default' })
                                                    .then(data => data.json())
                                                    .then(row => {
                                                      handleLoginProvider(row.provider_id)
                                                      return row.provider_id
                                                    })
                                                    .catch((err)=>{
                                                      console.log(err)
                                                    })

    if(providerID>0){
      history.replace('/edit/provider')
    } else {
      setIsHidden(false)
      setTimeout(()=>{
        setIsHidden(true)
      },2000)
    }

  }

  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>
            Olá, fornecedor! <br />
            Faça seu login
          </h2>
          <form className={styles.form} onSubmit={checkCNPJ}>
            <Input title="CNPJ" type="text" name="user" percWidth="70%" setField={setCnpj} />
            <p className={isHidden ? styles.hidden: styles.show}>CNPJ Incorreto ou não registrado</p>
            <SubmitButton text="Entrar" minWidth='250px' marginTop='50px' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProviderLogin;
