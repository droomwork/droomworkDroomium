import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import styles from '../../styles/Section.module.css'

 const Card = ()=>(
        <>
        <div className={styles.cat_label}>
            <h1>HOW TO'S</h1>
        </div>
        <div className={styles.cat_container}>
            <div className={styles.cat_inner}>
             <div className={styles.cat_layout}>
              <div className={styles.cat_card}>

                <Image
                 src='/blog-medium-img3.jpg'
                 width={300}
                 height={240}
                 layout='responsive'
                 alt='Prepare for Job'
                />
            
            <div className= {styles.cat_card_body}>
                <small>7hrs ago</small>
                    <Link href='/media'><a><h3 >My First Remote Job</h3></a></Link>
                    <p >
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p> 
                   </div> 
               

                <div className={styles.cat_card_footer}>                   
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/TechBiz'><a><small>#react</small></a></Link>
                    <Link href='/stories'><a><small>#Javascript</small></a></Link>
                    </div>
                    </div>
                    </div>
                    </div>
                
       

            <div className={styles.cat_layout}>
            <div className={styles.cat_card}>
               
                <Image
                 src='/blog-medium-img3.jpg'
                 width={300}
                 height={240}
                 layout='responsive'
                 alt='Prepare for Job'
                 
               />
            
            <div className= {styles.cat_card_body}>
                <small>7hrs ago</small>
                <Link href='/media'><a><h3 >My First Remote Job</h3></a></Link>

                    <p>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>  
                   </div>
               

                <div className={styles.cat_card_footer}>                   
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/stories'><a><small>#Laravel</small></a></Link>
                    <Link href='/how_to'><a><small>#php</small></a></Link>
                    </div>
                    </div>
                    </div>
                    </div>
                    
    
                    <div className={styles.cat_layout}>
            <div className={styles.cat_card}>
               
                <Image
                 src='/blog-medium-img3.jpg'
                 width={300}
                 height={240}
                 layout='responsive'
                 alt='Prepare for Job'
                 
               />
            
            <div className= {styles.cat_card_body}>
                <small>7hrs ago</small>
                <Link href='/media'><a><h3 >My First Remote Job</h3></a></Link>
                    <p>
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p>  
                   </div>
               

                <div className={styles.cat_card_footer}>                   
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/TechBiz'><a><small>#Nodejs</small></a></Link>
                    <Link href='/stories'><a><small>#Expressjs</small></a></Link>
                    </div>
                    </div>
                    </div>
                    </div>
                 
 
                    <div className={styles.cat_layout}>
            <div className={styles.cat_card}>
               
                <Image
                 src='/blog-medium-img3.jpg'
                 width={300}
                 height={240}
                 layout='responsive'
                 alt='Prepare for Job'
                 
               />
            
            <div className= {styles.cat_card_body}>
                <small>7hrs ago</small>
                <Link href='/media'><a><h3 >My First Remote Job</h3></a></Link>
                    <p >
                    The reason may not be evident here because 
                    the flex-direction is changed.
                   In some browsers, there’s a bug that allows flex-items to shrink below 
                   their content size. It’s quite a weird behavior.</p> 
                   </div> 
               

                <div className={styles.cat_card_footer}>                   
                    <small>5 mins read</small>
                    <div className={styles.cat_card_tags}>
                    <Link href='/stories'><a><small>#Python</small></a></Link>
                    <Link href='/how_to'><a><small>#Pytouch</small></a></Link>
                    </div>
                    </div>
                    </div>
               </div>
       
      </div>
      </div>
    
     

            
       
        <div className={styles.cat_card_pagination}>
                <Link href=''><a>1</a></Link>
                <Link href=''><a>2</a></Link>
                <Link href=''><a>3</a></Link>
            </div>
           
        
        
 </>

    );
    export default Card;











