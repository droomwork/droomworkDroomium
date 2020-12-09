import React from 'react'
import {Header} from '../../components/Header';
import {SmallHeader} from '../../components/SmallHeader';
import styles from '../../styles/Article.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {useWindowWidthAndHeight} from '../../hooks';
import {Footer} from '../../components/Footer';




 const Post =()=>{
     const [width] = useWindowWidthAndHeight();
    return(
        <>
        {
             width < 640 ? <SmallHeader/> :<Header/>
        }
        <div className={styles.full_post_main}>
            
        <article className={styles.full_post}>
            <header className={styles.full_post_header }>
                <section>
                    <time className={styles.full_post_date}>11th Nov 2020</time>
                </section>
                <h1 className={styles.full_post_heading}>How to prepare for a Job</h1>
            </header>

            <figure className={styles.full_post_img}>
               <Image
                 src='/blog-medium-img1.jpg'
                 layout='responsive'
                 width={350}
                 height={250}
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
        <div className={styles.full_post_related}>
        <div className={styles.full_post_links}>
            <h2>Related Articles</h2>
            <li><Link  href=''><a>The Remote Road map</a></Link></li>
            <li><Link  href=''><a>The Remote Road map</a></Link></li>
            <li><Link  href=''><a>The Remote Road map</a></Link></li>
            <li><Link  href=''><a>The Remote Road map</a></Link></li>
            <li><Link  href=''><a>The Remote Road map</a></Link></li>
        </div>
        </div>
       
        </div>

       
        
        <Footer/>
        </>
 

    )
}

export default Post