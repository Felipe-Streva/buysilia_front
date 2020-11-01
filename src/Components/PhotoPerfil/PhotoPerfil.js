import React, { useState } from "react";
import styles from "./PhotoPerfil.module.css";

export default function PhotoPerfil() {
  const [photo, setPhoto] = useState(
    "https://images.unsplash.com/photo-1579272429483-d6bf1b070d1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=385&q=80'"
  );

  return (
    <div className={styles.div}>
      <img className={styles.img} src={photo} />
      <div styles={{ display: "flex" }}>
        <p className={styles.p}>Adicionar Imagem</p>
        <p className={styles.p}>Remover Imagem</p>
      </div>
    </div>
  );
}
