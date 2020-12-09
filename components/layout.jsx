import React from 'react'
import {Header} from './Header'
import {useWindowWidthAndHeight} from '../hooks';
import {SmallHeader} from './SmallHeader';
import {Footer} from './Footer';

export const Layout = ({children})=>{
   
const [width] = useWindowWidthAndHeight();
    return(
        <div>{
            width < 640 ? <SmallHeader/> :<Header/>
        } 
        
       {children}

       <Footer/>
        
         </div>
   
);
}






 
