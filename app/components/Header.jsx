'use client'

import { useStore } from "@/lib/store";
import { useRef } from "react";

const Header = () => {


    const headerRef = useRef(null);

    const setcan = useStore((state) => state.setcanvas);



    const handleHover = () => {
        setcan(headerRef.current);

        console.log('hello.............');
    }

    return (
        <header onMouseOver={(e) => { handleHover() }} className="h-[120px] bg-[#34343452] flex items-center pl-[100px] border-b text-3xl border-gray-300">
            Three.js
        </header>
    )
}

export default Header;