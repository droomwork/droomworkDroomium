import React from 'react'
import {Header} from '../../components/Header'
import styles from '../../styles/Article.module.css'
import Image from 'next/image'




 const Post =()=>{
    return(
        <>
        <Header/>
        <article className={styles.full_post}>
            <header className={styles.full_post_header }>
                <section>
                    <time className={styles.full_post_date}>11th Nov 2020</time>
                </section>
                <h1 className={styles.full_post_heading}>How to prepare for a Job</h1>
            </header>

            <figure className=/*{styles.full-post-img}*/''>
               <Image
                 src='/blog-medium-img1.jpg'
                 width={300}
                 height={300}
                 alt='Prepare for Job'
                 
               />
            </figure>
            <section className={styles.full_post_container}>
                <div className={styles.full_post_content}>
                    <p>Looking ahead: Date time storage and design. Having a requirement to add tests to 
                        any value unless those tests are reviewed, run, and reasoned about just as strictly 
                        as running code.Date and time logic introduces a large set of possibilities in terms of behavior and output, 
                         Beyond testing, acknowledging and keeping relevant
                         data along with a strategy to synchronize and store date times consistently across systems early on b
                            oth helps testing and makes for a better user experience.</p><p>These tips and 
                        approaches apply to more than just Javascript &amp; Jest testing for dates and times.</p>
                </div>
            </section>


        </article>
        

        </>
 

    )
}

export default Post