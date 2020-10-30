import React from 'react';
import Input from '../../Components/Input/Input.js'
import styles from './ClientRegister.module.css'
import SideHeader from '../../Components/SideHeader/SideHeader'

function ClientRegister() {

  return (
    <div className={styles.body} >

      <SideHeader/>

      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2} >Olá, cliente! <br/>Cadastre-se</h2>
          <form className={styles.form}>
            <Input title='Nome' type='text' name='name' percWidth='100%' />
            <Input title='CPF' type='text' name='cpf' percWidth='50%' />
            <Input title='Celular' type='text' name='phone' percWidth='50%' />
            <Input title='Email' type='email' name='email' percWidth='100%' />
            <Input title='Senha' type='password' name='password' percWidth='50%' />
            <Input title='Confirmação de Senha' type='password' name='password2' percWidth='50%' />
            <Input title='Endereço' type='text' name='address' percWidth='100%' />
          </form>
        </div>
      </div> 
    </div>
  );
}

export default ClientRegister;
