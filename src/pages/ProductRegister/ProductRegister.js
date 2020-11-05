import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, Button as ButtonBootstrap } from 'react-bootstrap';
import { ButtonBootstrapStyle } from '../../bootstrapStyle/ButtonBootstrap'

import Input from '../../Components/Input/Input.js'
import styles from './ProductRegister.module.css'
import SideHeader from '../../Components/SideHeader/SideHeader'
import Button from '../../Components/Button/Button'

import {Context} from '../../SessionContext';

function ProductRegister() {
    const {session} = useContext(Context)
    const history = useHistory()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [evaluation, setEvaluation] = useState()
    const [stock, setStock] = useState()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [errors, setErrors] = useState([])

    if(session.provider===0){
        history.replace('/login/provider')
    }

    const submitRegisterProduct = async (event) => {
        event.preventDefault();

        const body = {
            provider_id: session.provider,
            name: name,
            description: description,
            price: price,
            evaluation: evaluation,
            stock: stock,
          }
      
        const response = await fetch('https://secret-brushlands-49902.herokuapp.com/product', { method: 'POST',
                        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                        body: JSON.stringify(body), mode: 'cors', cache: 'default' })
                            .then(data => data.json())
                            .catch((err)=>{
                            console.log(err)
                            })
        
        if(response.product_id>0){
            handleShow()
        } else if(response.errors){
            setErrors(response.errors)
            handleShow2()
        }      
    }

    const closeAndRedirect = () => {
        handleClose()
        history.replace('/')
    }

    return (
        <div className={styles.body} >

            <SideHeader/>

            <div className={styles.container}>
                <div className={styles.div}>
                <h2 className={styles.h2} >Cadastrar Produto </h2>

                <form className={styles.form} onSubmit={submitRegisterProduct}>
                    <Input title='Nome' type='text' name='name' percWidth='100%' setField={setName} />
                    <Input title='Descrição' type='text' name='description' percWidth='100%' setField={setDescription} />
                    <Input title='Preço em R$' type='text' name='price' percWidth='30%' setField={setPrice} />
                    <Input title='Qtd Estoque' type='text' name='stock' percWidth='30%' setField={setStock} />
                    <Input title='Avaliação' type='text' name='evaluation' percWidth='30%' setField={setEvaluation} />

                    <Button type='submit' text="Cadastrar" minWidth="250px" marginTop="50px" />
                </form>
                </div>
            </div> 
                {/*confirmação de cadastro*/}
                <Modal show={show} >
                    <Modal.Header >
                        <Modal.Title>Confirmação de Cadastro de Produto</Modal.Title>
                    </Modal.Header>
                        <Modal.Body> Olá! O produto {name} foi cadastrado com sucesso </Modal.Body>
                    <Modal.Footer>
                        <ButtonBootstrap style={ButtonBootstrapStyle} onClick={closeAndRedirect} >Ok</ButtonBootstrap>
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

export default ProductRegister;