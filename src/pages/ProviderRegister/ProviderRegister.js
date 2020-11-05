import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, Button as ButtonBootstrap } from 'react-bootstrap';

import Input from "../../Components/Input/Input.js";
import styles from "./ProviderRegister.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import Button from "../../Components/Button/Button";

import {Context} from '../../SessionContext';

export default function ProviderRegister(){
    const {session, handleLoginProvider } = useContext(Context)
    const history = useHistory()
    const [provider, setProvider] = useState(0)

    const [name, setName] = useState()
    const [cnpj, setCNPJ] = useState()
    const [phone, setPhone] = useState()
    const [companyName, setCompanyName] = useState()
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


    const submitRegisterProvider = async (event) => {
        event.preventDefault();
    
        const body = {
          name: name,
          cnpj: cnpj,
          phone: phone,
          company_name: companyName,
          address: address
        }
    
        const response = await fetch('http://localhost:3333/provider', { method: 'POST',
                          headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                          body: JSON.stringify(body), mode: 'cors', cache: 'default' })
                            .then(data => data.json())
                            .catch((err)=>{
                              console.log(err)
                            })
        if(response.provider_id>0){
          setProvider(response.provider_id)
          handleShow()
        } else if(response.errors){
            setErrors(response.errors)
            handleShow2()
        }
      }

      const logginAndRedirect = () => {
        handleClose()
        handleLoginProvider(provider)
      }


    return (
        <div className={styles.body}>
            <SideHeader />
            <div className={styles.container}>
                <div className={styles.div}>
                    <h2 className={styles.h2}>
                        Olá, Fornecedor! <br />
                        Cadastre-se
                    </h2>
                    <form className={styles.form} onSubmit={submitRegisterProvider}>
                        <Input title="Nome" type="text" name="name" percWidth="100%" setField={setName} />
                        <Input title="CNPJ" type="text" name="cnpj" percWidth="50%" setField={setCNPJ} />
                        <Input title="Telefone" type="text" name="phone" percWidth="50%" setField={setPhone} />
                        <Input title="Razão Social" type="text" name="company_name" percWidth="100%" setField={setCompanyName} />
                        <Input title="Endereço" type="text" name="address" percWidth="100%" setField={setAddress} />

                        <Button type='submit' text="Cadastrar" minWidth='250px' marginTop='50px' />
                    </form>
                </div>
            </div>
            {/*confirmação de cadastro*/}
            <Modal show={show} >
                <Modal.Header >
                <Modal.Title>Confirmação de Cadastro</Modal.Title>
                </Modal.Header>
                    <Modal.Body> Seja bem-vindo {name}! Seu cadastro foi realizado com sucesso! </Modal.Body>
                <Modal.Footer>
                <ButtonBootstrap onClick={logginAndRedirect} >Ok</ButtonBootstrap>
                </Modal.Footer>
            </Modal>

            {/*casos de erro */}

            <Modal show={show2} >
                <Modal.Header closeButton>
                <Modal.Title>Campos Inválidos</Modal.Title>
                </Modal.Header>
                    <Modal.Body> {errors.map((error)=>{
                    return (
                        <p>{error.param} é inválido</p>
                    )
                    })} </Modal.Body>
                <Modal.Footer>
                <ButtonBootstrap onClick={handleClose2} >OK</ButtonBootstrap>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}