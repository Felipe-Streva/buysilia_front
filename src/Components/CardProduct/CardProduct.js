import React, { useState ,useEffect } from "react";
import { Link } from 'react-router-dom';

import styles from "./CardProduct.module.css";
import Button from "../Button/Button";

function CardProduct(props) {
  const [image, setImage] = useState('https://crestana.com.br/img/imagens_produto/20190726_214134_1____01%20PRODUTO-SEM-IMAGEM-1000X1000.JPG')

  useEffect(() => {
    (async () => {
      const img = await fetch(`https://secret-brushlands-49902.herokuapp.com/product/photos/${props.productID}`).then(data=>data.json()).then(rows=>rows[0].url_product).catch(err=>{console.log(err)})
      if(img){
        setImage(img)
      }
      
    })()
  },[props.productID])

  return (
    <div className={styles.card}>
      <img src={image} className={styles.img} alt="Product" />
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.bottom}>
        <p className={styles.price}>R${props.price}</p>
        <Link to={`/info/product/${props.productID}`}><Button text="Comprar" minWidth='120px' /></Link>
      </div>
    </div>
  );
}

export default CardProduct;
