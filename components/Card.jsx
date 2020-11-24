import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
 import styles from '../styles/Section.module.css';



export const Card =()=>{
    return(

         <div className=''>
        <Link href='/articles'>
        <a>
            <div className={styles.card}>
                <div className=''>
                 <Image
                 src='/blog-medium-img3.jpg'
                 width={300}
                 height={300}
                 alt='Hoem Page'
                 
               /> 
                </div>
                <div className={styles.card_body}>
                    <h3 className=''>My First Remote Job</h3>
                    <p className=''>
                    The reason may not be evident here becauseflex-direction is changed.
                    In some br eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                    dolorem ipsum quia dolor sit amet, consect
                    </p>
                </div>
            </div>
        </a>
        </Link>

          
         <Link href='/articles'>
         <a>
         <div className={styles.card}>
        <div className=''>
        <Image
                 src='/blog-medium-img2.jpg'
                 width={300}
                 height={300}
                 alt='Prepare for Job'
                 
               />
        </div>
           <div className={styles.card_body}>
            <h3 className=''>My First Remote Job</h3>
            <p className=''>
            The reason may not be evident here becauseflex-direction is changed.
                    In some br eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                    dolorem ipsum quia dolor sit amet, consectet</p>
          </div>
         </div>
        </a>
        </Link>

        </div>
        
    )
}


//{styles.card-head}
//{styles.card-desc}
//{styles.card-title}