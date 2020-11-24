import React from 'react'
import Link from 'next/link'
import styles from '../styles/Section.module.css'

export const Side = ()=>{
    return(
        <div className={styles.main_blog_children}>
        <aside className={styles.categories_widget}>
                <div className={styles.c_title}>
                <h3>Categories</h3>
                </div>
             
                <ul className={styles.list_style}>
                    <li>
                        <Link href='/category'><a>Collaborations</a></Link>
                    </li>    
                    <li>
                        <Link href='/category'><a>Workspace</a></Link>
                    </li>
                    <li>
                        <Link href='/category'><a>Salary Avg</a></Link>
                    </li>
                    <li>
                        <Link href='/category'><a>Tech Jobs</a></Link>                    
                    </li>
                </ul>
         </aside>

            </div>
            
       
    )
}


//{r_title}

//{r_title}
//{categories_widget}