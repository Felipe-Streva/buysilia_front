import React, {useState, useContext} from "react";
import { useHistory, Link } from 'react-router-dom';

import Input from "../../Components/Input/Input.js";
import styles from "./ProviderLogin.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import Button from "../../Components/Button/Button";

import { Context } from '../../SessionContext'

function ProviderLogin() {
  const { session, handleLoginProvider } = useContext(Context)
  const [cnpj, setCnpj] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const history = useHistory()

  const checkCNPJ = async (event) => {
    event.preventDefault();
    const body = {
      cnpj: cnpj
    }

    const providerID = await fetch(`https://secret-brushlands-49902.herokuapp.com/login/provider`, { method: 'POST',
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

  if(session.provider>0){
    history.replace('/edit/provider')
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

            <div className={styles.buttons}>
              <Button type='submit' text="Entrar" minWidth='200px' marginTop='50px' />
              <Link to='/register/provider'><Button text="Cadastrar" minWidth='150px' marginTop='50px' /> </Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProviderLogin;
