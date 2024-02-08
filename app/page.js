"use client"
import Image from "next/image";
import home from "../public/home.svg"
import MySvg from "./nopage/theme/mysvg";



export default function page() {
  return (
    <>
       <div className="flex">
        <MySvg/>
       </div>

    </>
  );
}
