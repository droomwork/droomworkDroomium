import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';


export const Footer = ()=>(
    <div>
        <section className={styles.footer_container}>
            <div className={styles.footer_inner}>
            <div className={styles.footer_menu}>
                    <h3>Company</h3>
                    <ul><li><Link href=''><a>Blog</a></Link></li></ul>
                    <ul><li><Link href=''><a>Youtube</a></Link></li></ul>
                    </div>
                 
    
                    <div className={styles.footer_menu}>
                    <h3>Domain</h3>
                    <ul><li><Link href=''><a>Blockchain</a></Link></li></ul>
                    <ul><li><Link href=''><a>Big Data</a></Link></li></ul>
                    <ul><li><Link href=''><a>Data Science</a></Link></li></ul>
                    <ul><li><Link href=''><a>Web Development</a></Link></li></ul>
                
                    </div>
                
               
           
                <div className={styles.footer_menu}>
                    <h3>Contact</h3>
                    <ul><li><Link href=''><a>Reach</a></Link></li></ul>
                    <ul><li><Link href=''><a>Faq</a></Link></li></ul>
                   
                </div>
              
                    <div className={styles.footer_menu}>
                    <h3>Domain</h3>
                    <ul><li><Link href=''><a>Blockchain</a></Link></li></ul>
                    <ul><li><Link href=''><a>Big Data</a></Link></li></ul>
                    <ul><li><Link href=''><a>Data Science</a></Link></li></ul>
                    <ul><li><Link href=''><a>Web Development</a></Link></li></ul>
                </div>
             
            </div>
           
                <div className={styles.footer_logo}>
                <img src='/droomlogo1.png' alt='Droomwork'/>
                
                </div>
                <div className={styles.footer_legal}>
                <p>Your Remote IT Department</p>
                <p >Copyright</p>
            </div>
        </section>
    </div>
)