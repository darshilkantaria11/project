"use client"

import { TfiMenu } from "react-icons/tfi";
import { TbColorSwatch } from "react-icons/tb";
import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"
import themeContext from "../context/themeContext";
import { light, dark, forest, vintage, rose, ocean, black, colorful } from '../theme/theme';

export default function navbar() {

    const { switchTheme, theme } = useContext(themeContext);

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex flex-row flex-wrap justify-between py-4 p-2" style={{ backgroundColor: theme.theme1, color: theme.headingc }}>
                <div className="flex flex-row flex-initial flex-wrap items-center justify-center  ">
                    <div className="mr-4">
                        <button>
                            <TfiMenu className="md:h-6 md:w-6 h-5 w-5" />
                        </button>
                    </div>
                    <div className="">
                        <Link className="flex flex-row" href="/">
                            <Image
                                src={logo}
                                width={30}
                                height={30}
                                alt="logo"
                            />
                            <h1 className="md:text-2xl text-xl font-bold">dezynUI</h1>
                        </Link>
                    </div>

                </div>
                <div className="flex flex-row flex-initial flex-wrap items-center justify-center   mx-2">
                    <div className="hidden mx-6 flex-none items-center lg:block ">
                        <Link href="/components">
                            <p>Components</p>
                        </Link>
                    </div>
                    <div>
                        <button onClick={handleDropdownToggle}>
                            <TbColorSwatch className="md:h-6 md:w-6 h-5 w-5 md:hidden" />
                            <div className="hidden md:inline-block  item-center justify-center ">Theme▼ </div>
                        </button>
                        {isOpen && (
                            <div className="absolute top-20 flex-col right-5  p-4 shadow-md " style={{backgroundColor: theme.theme2}}>
                                <div className="flex flex-col gap-6 justify-items-start">
                                    <div className="px-4 py-2" style={{backgroundColor: light.theme1, color: light.headingc}}><button onClick={() => switchTheme('light')}>Light Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: dark.theme1, color: dark.headingc}}><button onClick={() => switchTheme('dark')}>Dark Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: vintage.theme1, color:vintage.headingc}}><button onClick={() => switchTheme('vintage')}>Vintage Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: forest.theme1, color: forest.headingc}}><button onClick={() => switchTheme('forest')}>Forest Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: rose.theme1, color: rose.headingc}}><button onClick={() => switchTheme('rose')}>rose Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: ocean.theme1, color: ocean.headingc}}> <button onClick={() => switchTheme('ocean')}>Ocean Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: colorful.theme1, color: colorful.headingc}}> <button onClick={() => switchTheme('colorful')}>Colorful Theme</button></div>
                                    <div className="px-4 py-2" style={{backgroundColor: black.theme1, color: black.headingc}}><button onClick={() => switchTheme('black')}>Black Theme</button></div>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}