import React from 'react';
import Input from '../../Components/Input/Input.js'
import styles from './ProductRegister.module.css'
import SideHeader from '../../Components/SideHeader/SideHeader'
import UpdateEditPhoto from '../../Components/UpdateEditPhoto/UpdateEditPhoto'

function ProductRegister() {

  return (
    <div className={styles.body} >

      <SideHeader/>

      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2} >Cadastrar Produto </h2>
          <UpdateEditPhoto/>
          <form className={styles.form}>
            <Input title='Nome' type='text' name='name' percWidth='100%' />
            <Input title='Descrição' type='text' name='description' percWidth='100%' />
            <Input title='Preço em R$' type='text' name='price' percWidth='30%' />
            <Input title='Qtd Estoque' type='text' name='amount' percWidth='30%' />
            <Input title='Avaliação' type='text' name='evaluation' percWidth='30%' />
            <Input title='CNPJ do Forncedor' type='text' name='cnpj' percWidth='50%' />
          </form>
        </div>
      </div> 
    </div>
  );
}

export default ProductRegister;