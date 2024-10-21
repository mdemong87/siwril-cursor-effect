'use client'

import { useEffect, useRef } from "react";
import Fluid from "../../lib/fluid";


const CursorEffect = () => {

    //make a reference for the canvas
    const homeRef = useRef(null);


    useEffect(() => {
        const canvas = homeRef.current;

        /* Initiate the Fluid object with that canvas */
        const fluid = new Fluid(canvas || can);
        /* Activate the fluid */
        fluid.activate();



        const ctx = canvas.getContext('2d');

        canvas.hight = window.innerHeight;
        canvas.width = window.innerWidth;



    }, [])



    return (
        <canvas className="w-screen h-screen -z-10 fixed top-0 left-0" ref={homeRef}>
        </canvas>
    )
}

export default CursorEffect;