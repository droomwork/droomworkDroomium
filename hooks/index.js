import {useEffect, useState} from 'react';

export const useWindowWidthAndHeight = ()=>{
    // const winInnerSize =  window.innerHeight;

    const [windowWidthSize, setWindowWidthSize] = useState([]);
    console.log(windowWidthSize)

    useEffect(()=>{
        const changeWindowSizeAtResize = ()=>{
            setWindowWidthSize( [window.innerWidth]);
        }

        window.addEventListener("resize", changeWindowSizeAtResize)

        return ()=> window.removeEventListener("resize", changeWindowSizeAtResize)
    },
    [])
    return windowWidthSize;
}