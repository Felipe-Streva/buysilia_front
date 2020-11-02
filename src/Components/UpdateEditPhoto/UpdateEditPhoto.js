import React, { useEffect, useState } from 'react';
import styles from './UpdateEditPhoto.module.css';


export default function UpdateEditPhoto(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
       window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    },[])

    return (
        <header className={styles.header}>
            <p>+</p>
        </header>
    )
}