"use client";
import Select from "@/components/Select";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex gap-6 font-semibold  ">
            <Link href="/"><Select label="Home " /></Link>
            <Select label="Shop " />
            <Link href="/product-detail"><Select label="Products " /></Link>
            <Select label="Pages " />
            <Select label="Blog " />
            <p className="cursor-pointer">Buy now</p> 
           
        </div>
    );
}