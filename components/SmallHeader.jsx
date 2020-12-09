import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css'
import {NavLinks} from './NavLinks'


export const SmallHeader =()=>{

    const [showLinks, setShowLinks] = useState(false)
    return(
        <header className={styles.header}>
        <nav className={styles.header_nav}>
            <div className={styles.header_brand}>
                <Link href = '/'>
                <img src='/droomlogo1.png' alt='Droomwork'/>
                </Link>
               
            </div>

             <div>
                 <button
                 className={styles.nav_icon}
                  onClick={()=>setShowLinks(!showLinks)}>
                     {showLinks ? <span>&times;</span> : <span>&#9776;</span>}
                 </button>

                 <div 
                 className={showLinks ? styles.addTransition : styles.removeTransition} >
                     <div className={styles.small_nav_widget}>
                     <NavLinks navLinksClassName={styles.small_header_links} />
                     </div>
                
                 </div>
             </div>
            </nav>
            </header>
    )
}


