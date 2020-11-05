import React, { useEffect, useState, useContext } from 'react';
import {Link} from 'react-router-dom';

import styles from './SideHeader.module.css';
import logo from '../../assets/logoBuysilia.png';
import logoHorizontal from '../../assets/logoHorizontal.png';
import Logout from '../Logout/Logout'

import {Context} from '../../SessionContext';

export default function SideHeader(){
    const {session} = useContext(Context)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
       window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    },[])

    const logged = () => {
        if(session.provider===0 && session.client===0) return false
        return true
      }

    return (
        <header className={styles.header}>
            {logged() ? (<Logout logoutStyle={styles.logout} />) : null}
            <Link to='/' ><img src={windowWidth < 850 ? logoHorizontal : logo} className={styles.img} alt='Logo Buysilia' /></Link> 
        </header>
    )
}