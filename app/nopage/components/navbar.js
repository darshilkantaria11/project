"use client"

import { TfiMenu } from "react-icons/tfi";
import { TbColorSwatch } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"

export default function navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex flex-row flex-wrap justify-between border-4 p-2 border-red-800">
                <div className="flex flex-row flex-initial flex-wrap items-center justify-center border-4 border-red-800 ">
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
                <div className="flex flex-row flex-initial flex-wrap items-center justify-center border-4 border-red-800 mx-2">
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
                            <div className="absolute top-20  right-5 bg-red-300 p-4 shadow-md">
                                <p>This is the dropdown content.</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}