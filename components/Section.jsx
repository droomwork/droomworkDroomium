import React from 'react'
import {Card} from './Card'
import {Side} from './Side'
import styles from '../styles/Section.module.css'

export const Section =()=>{
    return(
        <div>
         <section className={styles.main_blog}>
             <div className={styles.main_blog_inner}>
                <Card/>
                <Side/>
               
             </div>
         </section>
         </div>
    )
}

//{blog_area}