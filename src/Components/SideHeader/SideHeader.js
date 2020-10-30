import React from 'react';
import styles from './SideHeader.module.css';
import logo from '../../assets/logo.PNG'

export default function SideHeader(){

    return (
        <header className={styles.header}>
            <img src={logo} className={styles.img} alt='Logo Buysilia' />
        </header>
    )
}