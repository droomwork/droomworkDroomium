// import {useEffect, useState} from 'react';

// export const useWindowWidthAndHeight = ()=>{
//     const winInnerSize =  window.innerHeight;

//     const [windowSize, setWindowSize] = useState(winInnerSize);

//     useEffect(()=>{
//         const changeWindowSizeAtResize = ()=>{
//             setWindowSize( window.innerHeight);
//         }

//         window.addEventListener("resize", changeWindowSizeAtResize)

//         return ()=> window.removeEventListener("resize", changeWindowSizeAtResize)
//     },
//     [])
//     return {windowSize};
// }