"use client"


import MySvg from "../theme/mysvg";
import themeContext from "../context/themeContext";
import { useContext } from "react";
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Link from "next/link";

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
                .ho:hover{
                    background-color: ${theme.g1};
                }

                `
                }
            </style>
         

            <div className="flex flex-col xl:flex-row flex-wrap xl:h-screen h-max " style={{ backgroundColor: theme.theme1 }}>
                <div className="flex flex-col xl:w-3/5 xl:mt-12 xl:p-12 p-6">
                    <div className="flex flex-col  text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black" style={{ color: theme.headingc }}>
                        <div className="flex flex-row py-3">
                            <h1>The most </h1><span>&nbsp;</span> <span className="typed"></span>
                        </div>
                        <div className="hg py-3 ">
                            Ready-to-use
                        </div>
                        <div className="py-3 ">
                            Tailwind CSS components
                        </div>
                    </div>
                    <div className="py-3 my-4 text-xl" style={{ color: theme.textc }}>
                        <p>Explore our ever-growing library and see how it can take your projects to the next level  </p>
                        
                    </div>
                    <div className="ho py-3 xl:mt-9 flex w-max p-2 px-6 rounded-md" style={{ backgroundColor: theme.theme2, color: theme.headingc }}>
                        <Link href="/components">
                            <p>Explore Components</p>
                        </Link>
                    </div>

                </div>
                <div className="w-full xl:w-2/5 xl:mt-12 ">
                    <MySvg className="w-full" />
                </div>
            </div>


        </>
    );
}