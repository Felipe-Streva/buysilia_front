import React, { useEffect, useState } from 'react';
import styles from './Input.module.css'

export default function Input(props){

    const [windowWidth, setWindownWidth] = useState(window.innerWidth)

    useEffect(() => {
       window.addEventListener('resize', () => setWindownWidth(window.innerWidth))
    },[])



    return (
        <div className={styles.div} style={windowWidth < 850 ? {width: '100%'} :{width: props.percWidth}}>
            <label className={styles.label}>{props.title}</label>
            <input type={props.type} className={styles.input} name={props.name}  />
        </div>
    )
}