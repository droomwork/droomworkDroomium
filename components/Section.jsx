import React from 'react'
import {RecentStories}  from './Recent/RStories'
import RecentHowTo from './Recent/RHow_to'
import RecentTechBiz from './Recent/RTechBiz'
//import styles from '../styles/Section.module.css'

export const Section =()=>{
    return(
        <div>
         <main className=''>
                <RecentHowTo/>  
                <RecentStories/>
                <RecentTechBiz/>             
         </main>
         </div>
    )
}

//{blog_area}
//{styles.main_blog}
//{styles.main_blog_inner}