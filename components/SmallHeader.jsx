import React, {useState} from 'react'
import styles from '../styles/Header.module.css'
import {NavLinks} from './NavLinks'


export const SmallHeader =()=>{

    const [showLinks, setShowLinks] = useState(true)
    return(
        <header className={styles.header}>
        <nav className={styles.header_nav}>
            <div className={styles.header_brand}>
                <Link href = '/'>
                <img src='' alt='Droomwork'/>
                </Link>
               
            </div>

             <div>
                 <button onClick={()=>setShowLinks(!showLinks)}>
                     {showLinks ? <span>&#9776;</span> : <span>&times;</span>}
                 </button>

                 <div >
                    <NavLinks/>
                 </div>
             </div>
            </nav>
            </header>
    )
}

//className={showLinks ? styles.addTransition : styles.removeTransition}