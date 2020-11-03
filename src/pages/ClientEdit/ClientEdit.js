import React, {useContext, useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';

import Input from "../../Components/Input/Input.js";
import styles from "./ClientEdit.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";
import PhotoPerfil from '../../Components/PhotoPerfil/PhotoPerfil';

import {Context} from '../../SessionContext';

function ClientEdit() {
  const {session} = useContext(Context)
  const [data, setData] = useState({})
  const [dataPhoto, setDataPhoto] = useState({})
  const history = useHistory()

  useEffect(() => {
    ( async () => {
      const data = await fetch(`http://localhost:3333/client/${session.client}`).then(data => data.json())
      setData(data)
    })()
  },[session.client])

  useEffect(() => {
    ( async () => {
      const dataPhoto = await fetch(`http://localhost:3333/client/photos/${session.client}`).then(data => data.json())
      setDataPhoto(dataPhoto)
    })()
  },[session.client])

  if(session.client===0){
    history.replace('/login/client')
  }

  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>Seja bem vindo!<br/>{data.first_name}!</h2>

          <PhotoPerfil urlPhoto={dataPhoto.url_client} />

          <form className={styles.form}>
            <Input title="Nome" type="text" name="first_name" percWidth="50%" >{data.first_name}</Input>
            <Input title="Sobrenome" type="text" name="last_name" percWidth="50%" >{data.last_name}</Input>
            <Input title="CPF" type="text" name="cpf" percWidth="50%" >{data.cpf}</Input>
            <Input title="Celular" type="text" name="phone" percWidth="50%" >{data.phone}</Input>
            <Input title="Endereço" type="text" name="address" percWidth="100%" >{data.address}</Input>

            <SubmitButton text="Confirmar" minWidth="250px" marginTop="50px" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientEdit;
