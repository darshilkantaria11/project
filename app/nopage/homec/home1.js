"use client"


import MySvg from "../theme/mysvg";
import themeContext from "../context/themeContext";
import { useContext } from "react";
import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function page() {

    const { theme } = useContext(themeContext);
    useEffect(() => {
        const options = {
            strings: ['Responsive', 'Coustomizable'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
        };


        const typed = new Typed('.typed', options);


        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <style jsx>
                {
                    `
                .hg{
                    background: linear-gradient(90deg, ${theme.g2} 0%, ${theme.g1} 25%, ${theme.g3} 40% );
                    background-clip: text;
                    color: transparent;
                }
                `
                }
            </style>

            <div className="flex xl:flex-row  flex-wrap flex-col h-screen " style={{ backgroundColor: theme.theme1 }}>
                <div className="flex flex-col xl:w-3/5 border-4 border-red-600 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                    <div className="flex flex-row  ">
                        <h1>The most </h1><span>&nbsp;</span> <span className="typed "></span>
                    </div>
                    <div className="hg ">
                        Ready-to-use
                    </div>
                    <div className="">
                        Tailwind CSS components
                    </div>
                </div>
                <div className=" xl:w-2/5  " >

                    <MySvg className=" w-full " />

                </div>
            </div>

        </>
    );
}