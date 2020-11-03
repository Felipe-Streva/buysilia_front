import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../Components/Input/Input.js'
import styles from './ProductRegister.module.css'
import SideHeader from '../../Components/SideHeader/SideHeader'
import Button from '../../Components/Button/Button'

import {Context} from '../../SessionContext';

function ProductRegister() {
    const {session} = useContext(Context)
    const history = useHistory()

    if(session.provider===0){
        history.replace('/login/provider')
      }

    return (
        <div className={styles.body} >

        <SideHeader/>

        <div className={styles.container}>
            <div className={styles.div}>
            <h2 className={styles.h2} >Cadastrar Produto </h2>

            <form className={styles.form}>
                <Input title='Nome' type='text' name='name' percWidth='100%' />
                <Input title='Descrição' type='text' name='description' percWidth='100%' heigth='200px'/>
                <Input title='Preço em R$' type='text' name='price' percWidth='30%' />
                <Input title='Qtd Estoque' type='text' name='stock' percWidth='30%' />
                <Input title='Avaliação' type='text' name='evaluation' percWidth='30%' />

                <Button type='submit' text="Cadastrar" minWidth="250px" marginTop="50px" />
            </form>
            </div>
        </div> 
        </div>
  );
}

export default ProductRegister;