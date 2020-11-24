import React from 'react'
import {Header} from './Header'
//import {useWindowWidthAndHeight} from '../hooks';

export const Layout = ({children})=>{
   

    return(
        <>
            <Header/> 
           
        
       {children}
        
     
         </>
   
);
}

//const [width, height] = useWindowWidthAndHeight();




 
