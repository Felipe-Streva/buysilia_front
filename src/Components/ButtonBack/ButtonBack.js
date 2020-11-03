import React, { useEffect, useState } from 'react';
import styles from './ButtonBack.module.css';

export default function ButtonBack(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
       window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    },[])

    return (
        <main className={styles.buttonBack}>
             {/* <input type="submit" value="Voltar" onClick="history.go(-1)"></input> */}
             <a type="submit" onClick="history.go(-1)" class="buttonBack">Voltar</a>              
        </main>

        
    )
}