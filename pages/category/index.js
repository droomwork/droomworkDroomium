
import React from 'react';
import {Header} from '../../components/Header';
import {SmallHeader} from '../../components/SmallHeader';
import Link from 'next/link'; 
import Image from 'next/image';
import styles from '../../styles/Section.module.css';
import {useWindowWidthAndHeight} from '../../hooks';
import {Footer} from '../../components/Footer';

  const Category = ()=>{
    const [width] = useWindowWidthAndHeight();
    return(
        <>
           {
             width < 640 ? <SmallHeader/> :<Header/>
        }
        <div className={styles.cat_container}>
            <div className={styles.cat_inner}>
                <div className={styles.cat_layout}>
      
            <div className={styles.cat_card}>
                
                <Image
                 src='/blog-medium-img2.jpg'
                 alt='Remote Job'
                 layout='responsive'
                 width={300}
                 height={240}
              
                 
               />
            
                <div className={styles.cat_card_body}>
                    <small>5hrs ago</small>
                    <Link href='/articles'><a><h3 >My First Remote Job</h3></a></Link>

                    <p>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
                   
                </div>
                <div className={styles.cat_card_footer}>
                    
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/category'><a><small>#startup</small></a></Link>
                    <Link href='/category'><a><small>#stories</small></a></Link>
                    </div>
    
                    </div>
            </div>
     
        </div>


        <div className={styles.cat_layout}>
      
            <div className={styles.cat_card}>
              
                <Image
                 src='/blog-medium-img3.jpg'
                 layout='responsive'
                 width={300}
                 height={240}
                 alt='Prepare for Job'
                 
               />
                
                <div className={styles.cat_card_body}>
                    <small>9days ago</small>
                    <Link href='/articles'><a><h3 >My First Remote Job</h3></a></Link>

                    <p >
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.
                  </p>
                 
                </div>
                <div className={styles.cat_card_footer}>
                    
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/category'><a><small>#tech biz</small></a></Link>
                    <Link href='/category'><a><small>#how to</small></a></Link>
                    </div>
    
                    </div>
            </div>
       
        </div>

        <div className={styles.cat_layout}>
        <Link href='/articles'>
        <a>
            <div className={styles.cat_card}>
                <Image
                 src='/blog-medium-img2.jpg'
                 layout='responsive'
                 width={300}
                 height={240}
                 alt='Prepare for Job'
                 
               />
     
                <div className= {styles.cat_card_body}>
                <small>7hrs ago</small>
                <Link href='/articles'><a><h3 >My First Remote Job</h3></a></Link>
                    <p className=''>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
                   
                </div>
                <div className={styles.cat_card_footer}>
                    
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/category'><a><small>#stories</small></a></Link>
                    <Link href='/category'><a><small>#tech biz</small></a></Link>
                    </div>
    
                    </div>
            </div>
        </a>
        </Link>
        </div>

        <div className={styles.cat_layout}>
      
            <div className={styles.cat_card}>
                
                <Image
                 src='/blog-medium-img1.jpg'
                 layout='responsive'
                 width={300}
                 height={240}
                 alt='Prepare for Job'
                 
               />
                
                <div className={styles.cat_card_body}>
                    <small>7hrs ago</small>
                    <Link href='/articles'><a><h3 >My First Remote Job</h3></a></Link>
                    <p>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
            
                </div>
                <div className={styles.cat_card_footer}>
                    
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/category'><a><small>#startup</small></a></Link>
                    <Link href='/category'><a><small>#stories</small></a></Link>
                    </div>
    
                    </div>
            </div>
     
        </div>
            </div>
        </div>

        <Footer/>
       
        
        </>
 

    )
}
export default Category