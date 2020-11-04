import React, { useState ,useEffect } from "react";
import { Link } from 'react-router-dom';

import styles from "./CardProduct.module.css";
import Button from "../Button/Button";

function CardProduct(props) {
  const [image, setImage] = useState('')

  useEffect(() => {
    (async () => {
      const img = await fetch(`http://localhost:3333/product/photos/${props.productID}`).then(data=>data.json()).then(rows=>rows[0].url_product).catch(err=>{console.log(err)})
      setImage(img)
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
