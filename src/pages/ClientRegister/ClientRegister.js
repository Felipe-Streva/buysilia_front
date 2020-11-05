import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';

import { Modal, Button as ButtonBootstrap } from 'react-bootstrap';
import { ButtonBootstrapStyle } from '../../bootstrapStyle/ButtonBootstrap'

import Input from "../../Components/Input/Input.js";
import styles from "./ClientRegister.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import Button from "../../Components/Button/Button";

import {Context} from '../../SessionContext';

function ClientRegister() {
  const {session, handleLoginClient } = useContext(Context)
  const history = useHistory()
  const [client, setClient] = useState(0)

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [cpf, setCPF] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const [address, setAddress] = useState()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [errors, setErrors] = useState([])

  if(session.client>0 || session.provider>0){
    history.replace('/')
  }

  const checkPassword = (password, password2) => {
    return password===password2
  }

  const submitRegisterClient = async (event) => {
    event.preventDefault();

    if(!checkPassword(password, password2)){
      console.log('Senhas diferentes')
      return null
    }

    const body = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      cpf: cpf,
      phone: phone,
      address: address
    }

    const response = await fetch('http://localhost:3333/client', { method: 'POST',
                      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                      body: JSON.stringify(body), mode: 'cors', cache: 'default' })
                        .then(data => data.json())
                        .catch((err)=>{
                          console.log(err)
                        })
    
    if(response.client_id>0){
      setClient(response.client_id)
      handleShow()
    } else if(response.errors){
        setErrors(response.errors)
        handleShow2()
    }

    
  }

  const logginAndRedirect = () => {
    handleClose()
    handleLoginClient(client)
  }

  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>
            Olá, cliente! <br />
            Cadastre-se
          </h2>
          <form className={styles.form} onSubmit={submitRegisterClient}>
            <Input title="Nome" type="text" name="first_name" percWidth="50%" setField={setFirstName}/>
            <Input title="Sobrnome" type="text" name="last_name" percWidth="50%" setField={setLastName}/>
            <Input title="CPF" type="text" name="cpf" percWidth="50%" setField={setCPF} />
            <Input title="Celular" type="text" name="phone" percWidth="50%" setField={setPhone} />
            <Input title="Email" type="email" name="email" percWidth="100%" setField={setEmail} />
            <Input
              title="Senha"
              type="password"
              name="password"
              percWidth="50%"
              setField={setPassword}
            />
            <Input
              title="Confirmação de Senha"
              type="password"
              name="password2"
              percWidth="50%"
              setField={setPassword2}
            />
            <Input
              title="Endereço"
              type="text"
              name="address"
              percWidth="100%"
              setField={setAddress}
            />
            <Button type='submit' text="Cadastrar" minWidth='250px' marginTop='50px' />
          </form>
        </div>
      </div>
      {/*confirmação de cadastro*/}
      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>Confirmação de Cadastro</Modal.Title>
        </Modal.Header>
            <Modal.Body> Olá {firstName}! Seu cadastro foi realizado com sucesso! </Modal.Body>
        <Modal.Footer>
          <ButtonBootstrap style={ButtonBootstrapStyle} onClick={logginAndRedirect} >Ok</ButtonBootstrap>
        </Modal.Footer>
      </Modal>

      {/*casos de erro */}

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Campos Inválidos</Modal.Title>
        </Modal.Header>
            <Modal.Body> {errors.map((error)=>{
              return (
                <p>{error.param} é inválido</p>
              )
            })} </Modal.Body>
        <Modal.Footer>
          <ButtonBootstrap style={ButtonBootstrapStyle} onClick={handleClose2} >OK</ButtonBootstrap>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ClientRegister;
