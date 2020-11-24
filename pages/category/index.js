import React from 'react';
import {Header} from '../../components/Header';
import Link from 'next/link'; 
import Image from 'next/image';
import styles from '../../styles/Category.module.css'

const Category = ()=>{
    return(
        <>
        <Header/>

        <div className={styles.cat_container}>
            <div className={styles.cat_inner}>
                <div className={styles.cat_layout}>
            <Link href='/articles'>
        <a>
            <div className={styles.cat_card}>
                <div className=''>
                <Image
                 src='/blog-medium-img2.jpg'
                 width={300}
                 height={300}
                 alt='Remote Job'
                 
               />
                </div>
                <div className=''>
                    <h3 className=''>My First Remote Job</h3>
                    <p className=''>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
                </div>
            </div>
        </a>
        
        </Link>
        </div>


        <div className={styles.cat_layout}>
        <Link href='/articles'>
        <a>
            <div className={styles.cat_card}>
                <div className=''>
                <Image
                 src='/blog-medium-img3.jpg'
                 width={300}
                 height={300}
                 alt='Prepare for Job'
                 
               />
                </div>
                <div className=''>
                    <h3 className=''>My First Remote Job</h3>
                    <p className=''>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
                </div>
            </div>
        </a>
        </Link>
        </div>

        <div className={styles.cat_layout}>
        <Link href='/articles'>
        <a>
            <div className={styles.cat_card}>
                <div className=''>
                <Image
                 src='/blog-medium-img2.jpg'
                 width={300}
                 height={300}
                 alt='Prepare for Job'
                 
               />
                </div>
                <div className=''>
                    <h3 className=''>My First Remote Job</h3>
                    <p className=''>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
                </div>
            </div>
        </a>
        </Link>
        </div>

        <div className={styles.cat_layout}>
        <Link href='/articles'>
        <a>
            <div className={styles.cat_card}>
                <div className=''>
                <Image
                 src='/blog-medium-img1.jpg'
                 width={300}
                 height={300}
                 alt='Prepare for Job'
                 
               />
                </div>
                <div className=''>
                    <h3 className=''>My First Remote Job</h3>
                    <p className=''>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>
                </div>
            </div>
        </a>
        </Link>
        </div>
            </div>
        </div>
       
        
        </>
 

    )
}

export default Category

//category_container}
//{card-body}
//{card-title}
//{card-desc}
//{card-body}
//{card-head}

//{card}
//{category_inner}
//{card}