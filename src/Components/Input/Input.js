import React, { useEffect, useState } from 'react';
import styles from './Input.module.css'

export default function Input(props){

    const [windowWidth, setWindownWidth] = useState(window.innerWidth)
    const [value, setValue] = useState('')

    useEffect(() => {
       window.addEventListener('resize', () => setWindownWidth(window.innerWidth))
    },[])

    useEffect(() => {
        setValue(props.children)
    },[props.children])

    const handleValue = (event) => {
        setValue(event.target.value)
        props.setField(event.target.value)
    }

    return (
        
        <div className={styles.div} style={windowWidth < 850 ? {width: '100%'} :{width: props.percWidth}}>
            <label className={styles.label}>{props.title}</label>
            <input type={props.type} className={styles.input} name={props.name} value={value} onChange={handleValue} required />
        </div>
    )
}