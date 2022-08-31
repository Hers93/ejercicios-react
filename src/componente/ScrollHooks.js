import React, { useState, useEffect } from "react"


function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll",detectarScroll)
    },[scrollY])

    useEffect(() => {
       
       
    },[])

   /*  useEffect(() => {
        
       return() => {console.log('Fase montaje')}
    },[]) */

    return (
        <>
            <h2>Hooks-useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY} px</p>
        </>
    )
}

export default ScrollHooks