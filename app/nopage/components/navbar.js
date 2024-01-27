"use client"

import { TfiMenu } from "react-icons/tfi";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"

export default function navbar() {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-between border-4 p-2 border-red-800">
                <div className="flex flex-row items-center justify-center border-4 border-red-800 ">
                    <div className="mr-4">
                        <button>
                            <TfiMenu className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="">
                        <Link className="flex flex-row" href="/">
                            <Image
                                src={logo}
                                width={30}
                                height={30}
                            />
                            <h1 className="text-2xl font-bold">dezynUI</h1>
                        </Link>
                    </div>

                </div>
                <div className="border-4 border-red-800 ">
                    
                </div>
            </div>
        </>
    )
}