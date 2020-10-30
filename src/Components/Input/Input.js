import React from 'react';
import styles from './Input.module.css'

export default function Input(props){

    const windowWidth = window.innerWidth;

    return (
        <div className={styles.div} style={windowWidth < 850 ? {width: windowWidth} :{width: props.percWidth}}>
            <label className={styles.label}>{props.title}</label>
            <input type={props.type} className={styles.input} name={props.name}  />
        </div>
    )
}