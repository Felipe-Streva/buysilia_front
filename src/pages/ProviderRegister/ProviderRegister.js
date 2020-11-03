import React from 'react';

import Input from '../../Components/Input/Input.js'
import styles from './ProviderRegister.module.css'
import SideHeader from '../../Components/SideHeader/SideHeader'
import ButtonBack from '../../Components/ButtonBack/ButtonBack'


function ProviderRegister() {

  return (
    <div className={styles.body} >

      <SideHeader/>
     
      

        <div className={styles.container}>
            <div className={styles.div}>
                <h2 className={styles.h2} >Olá Fornecedor(a)! <br/>Cadastre-se</h2>
                <form className={styles.form} method="get" action="">
                    <Input title='Nome' type='text' name='name' percWidth='100%' />
                    <Input title='CNPJ' type='number' name='cnpj' maxlength="14" percWidth='50%' />
                    <Input title='Telefone' type='text' name='phone' percWidth='50%' />
                    <Input title='Razão Social' type='text' name='name' percWidth='100%' />
                    <Input title='Código Postal' type='text' name='number' percWidth='50%' />
                    <Input title='Endereço' type='text' name='address' percWidth='100%' />
                </form>  
            
                <ButtonBack/>
               
            </div>
        </div> 
    </div>
    
  );
}

export default ProviderRegister;
