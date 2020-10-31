import React from "react";
import Header from "../../Components/Header/Header";
import Carousel from "react-bootstrap/Carousel";
import CardProduct from "../../Components/CardProduct/CardProduct";
import styles from "./HomePage.module.css";

import productOne from "../../assets/product.jpeg";
import productTwo from "../../assets/productTwo.jpeg";
import productThree from "../../assets/productThree.jpeg";

function HomePage() {
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
        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />
        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />
        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />
        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />

        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />
        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />
        <CardProduct
          img={productOne}
          description="Fogão Brastemp"
          price="199.99"
        />
      </div>
    </div>
  );
}

export default HomePage;
