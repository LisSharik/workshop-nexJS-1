"use client";
import Image from "next/image";
import Menu from '@/components/header/Menu';
import Select from "@/components/Select";
import Lenguage from "@/components/Lenguage";
import Link from "next/link";

export default function Header({fullHeader}: {fullHeader: boolean}) {

    
  return (
    <>
    <div id="header" className=" w-full flex justify-between items-center  px-12 py-6 ">
        {fullHeader &&(
            <div className="column-1 flex justify-items-center items-center gap-3 ">
                <Lenguage />
            </div>
        )}

        <Link href="/">
            <Image src="/logo-ecomus.svg" alt="logo ecomus" width={150} height={50} />
        </Link>

        {!fullHeader &&(
            <Menu />
        )}
    
      <div className="column-3 flex justify-items-center items-center gap-4  text-2xl ">
        <i className="hover:text-purple-700 cursor-pointer bx bx-search"></i>
        <i className="hover:text-purple-700 cursor-pointer bx bx-user"></i>
        <i className="hover:text-purple-700 cursor-pointer bx bx-heart"></i>
        <i className="hover:text-purple-700 cursor-pointer bx bx-shopping-bag"></i>
      </div>
    </div>

  
  {fullHeader &&(
    <div className="menu-content w-full flex justify-center items-center border-[#eff1e0] border-y-[.5px] py-4 ">
        <Menu />
    </div>

  )}

    </>
  );
}
