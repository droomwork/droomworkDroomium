import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import {NavLinks} from './NavLinks'




export const Header = ()=>{
    return (
        <header className={styles.header}>
            <nav className={styles.header_nav}>
                <div className={styles.header_brand}>
                    <Link href = '/'>
                    <img src='' alt='Droomwork'/>
                    </Link>
                   
                </div>
                <NavLinks/>

               
            </nav>
        </header>
    )
}


