import React, { useEffect, useState, useContext} from "react";
import { useParams, useHistory } from 'react-router-dom'

import { Modal, Button as ButtonBootstrap } from 'react-bootstrap';
import { ButtonBootstrapStyle } from '../../bootstrapStyle/ButtonBootstrap'

import styles from "./InfoProduct.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import Button from "../../Components/Button/Button";
import Textarea from "../../Components/Textarea/Textarea";

import { Context } from '../../SessionContext'

function InfoProduct() {
  const { session } = useContext(Context)
  const { productID } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState('https://crestana.com.br/img/imagens_produto/20190726_214134_1____01%20PRODUTO-SEM-IMAGEM-1000X1000.JPG')
  const [stock, setStock] = useState(0)
  const history = useHistory()

  const [confirmBought, setConfirmBought] = useState(false)
  const [showFailBought, setShowFailBought] = useState(false)
  const [showButtons, setShowButtons] = useState(true)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ( async () => {
      const data = await fetch(`https://secret-brushlands-49902.herokuapp.com/product/${productID}`).then(data => data.json())
      setData(data)
      setStock(data.stock)
    })()
  },[productID])

  useEffect(() => {
    ( async () => {
      const data = await fetch(`https://secret-brushlands-49902.herokuapp.com/product/photos/${productID}`).then(data => data.json())
      if(data.length>0){
        setImage(data[0].url_product)
      }    
    })()
  },[productID])

  const submitBuy = (event) => {
    event.preventDefault()
    if(session.client===0){
      history.replace('/login/client')
    }
    handleShow()
  }

  const purchaseProduct = async () => {
    setShowButtons(false)
    const body = {
      client_id: session.client,
      product_id: productID
    }

    const message = await fetch('https://secret-brushlands-49902.herokuapp.com/purchase', { method: 'POST',
                      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                      body: JSON.stringify(body), mode: 'cors', cache: 'default' })
                        .then(data => data.json())
                        .catch((err)=>{
                          console.log(err)
                        })


    if(message.message==='Purchase inserted'){
      setConfirmBought(true)
      setStock(stock-1)
      setTimeout(()=>{
        setConfirmBought(false)
        setShowButtons(true)
        handleClose()
        history.replace('/')
      },2000)
    } else {
      setShowButtons(true)
      handleClose()
      setShowFailBought(true)
      setTimeout(()=>{
        setShowFailBought(false)
      },2000)
    }

    
  }

  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          {showFailBought ? <h1>COMPRA NÃO EFETUADA</h1> : null}
          <h2 className={styles.h2} >{data.name}</h2>

          <img
            className={styles.img}
            src={image}
            alt="Product"
          />

          <form className={styles.form} onSubmit={submitBuy}>
            <div className={styles.textarea}>
              <Textarea description={data.description} />
            </div>

            <div className={styles.alignment}>
              <h3 className={styles.h3}>Preço em R$</h3>
              <p className={styles.p}>{data.price}</p>

              <h3 className={styles.h3}>Qtd Estoque</h3>
              <p className={styles.p}>{stock} </p>

              <h3 className={styles.h3}>Avaliação</h3>
              <p className={styles.p}>{data.evaluation} </p>
            </div>

            {session.provider>0 ? null : <Button
              type="submit"
              text="Comprar"
              minWidth="50%"
              marginTop="50px"
              
            />}
          </form>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação da Compra</Modal.Title>
        </Modal.Header>
            <Modal.Body>{confirmBought ? 'Compra confirmada com sucesso' : 'Você deseja confirmar a compra?' } </Modal.Body>
        <Modal.Footer>
          {showButtons ? (<>
            <ButtonBootstrap style={ButtonBootstrapStyle} onClick={purchaseProduct} >Comprar</ButtonBootstrap>

            <ButtonBootstrap style={ButtonBootstrapStyle} onClick={handleClose} >Voltar</ButtonBootstrap>
          </>)    :  null}
          

        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default InfoProduct;
