import React from "react";

import styles from "./InfoProduct.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import Button from "../../Components/Button/Button";
import Textarea from "../../Components/Textarea/Textarea";
import Input from "../../Components/Input/Input";

function InfoProduct() {
  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>Nome do produto</h2>

          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1527195575508-5b138d14a35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          />

          <form className={styles.form}>
            <div className={styles.textarea}>
              <Textarea title="Descrição" />
            </div>

            <div className={styles.alignment}>
              <h3 className={styles.h3}>Preço em R$</h3>
              <p className={styles.p}>199,99</p>

              <h3 className={styles.h3}>Qtd Estoque</h3>
              <p className={styles.p}>2</p>

              <h3 className={styles.h3}>Avaliação</h3>
              <p className={styles.p}>4</p>
            </div>

            <Button
              type="submit"
              text="Comprar"
              minWidth="50%"
              marginTop="50px"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
