import React from 'react';
import styles from './Input.module.css'

export default function Input(props){

    return (
        <div className={styles.div} >
            <label className={styles.label}>{props.title} </label>
            <input type={props.type} className={styles.input} style={{width: '100%'}} />
        </div>
    )
}