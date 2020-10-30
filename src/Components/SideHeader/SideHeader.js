import React, { useEffect, useState } from 'react';
import styles from './SideHeader.module.css';
import logo from '../../assets/logoBuysilia.png';
import logoHorizontal from '../../assets/logoHorizontal.png';

export default function SideHeader(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
       window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    },[])

    return (
        <header className={styles.header}>
            <img src={windowWidth < 850 ? logoHorizontal : logo} className={styles.img} alt='Logo Buysilia' />
        </header>
    )
}