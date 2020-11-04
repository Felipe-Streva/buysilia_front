import React, { useEffect, useState, useContext } from "react";
import Header from "../../Components/Header/Header";
import Carousel from "react-bootstrap/Carousel";
import CardProduct from "../../Components/CardProduct/CardProduct";
import styles from "./HomePage.module.css";

import productOne from "../../assets/product.jpeg";
import productTwo from "../../assets/productTwo.jpeg";
import productThree from "../../assets/productThree.jpeg";

import { Context } from '../../SessionContext'

function HomePage() {
  const { session } = useContext(Context)
  const [cardsData, setCardsData] = useState([])
  
  const generateCards = (session) => {
    if(session.provider===0){
      const uri = '/product'
      return createCards(uri)
    } else {
      const uri = `/product/provider/${session.provider}`
      return createCards(uri)
    }
  }

  const createCards = async (uri) => {
    const data = await fetch(`http://localhost:3333${uri}`).then(data=>data.json()).then(rows=>rows).catch(err=>{console.log(err)})
    return data
  }

  useEffect(() => {
    (async () => {
      const cards = await generateCards(session)
      setCardsData(cards)
    })()

  },[session])


  return (
    <div style={{ background: "#f5f5f0" }}>
      <Header />
      {/* Carousel start */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={productOne}
            alt="Cooker"
            style={{ backgroundSize: "cover", height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={productTwo}
            alt="Beer"
            style={{ backgroundSize: "cover", height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={productThree}
            alt="Cellphone"
            style={{ backgroundSize: "cover", height: "500px" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Carousel end */}
      <div className={styles.content}>
        {cardsData.map((product, i) => {
      return (
        <CardProduct key={i} title={product.name} price={product.price} productID={product.product_id} />
      )
    })}
      </div>
    </div>
  );
}

export default HomePage;
