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

            <div className="flex md:flex-row flex-col justify-between md:h-screen " style={{ backgroundColor: theme.theme1 }}>
                <div className="flex flex-col md:w-3/5 border-4 border-red-600  py-30">
                    <div className="flex flex-row md:text-6xl text-3xl font-bold">
                        <h1>The most </h1><span>&nbsp;</span> <span className="typed "></span>
                    </div>
                    <div className="hg md:text-6xl text-3xl font-bold">
                        Ready-to-use
                    </div>
                    <div className="md:text-6xl text-3xl font-bold">
                        Tailwind CSS components
                    </div>
                </div>
                <div className=" md:w-2/5  " >

                    <MySvg className=" md:w-full" />

                </div>
            </div>

        </>
    );
}
