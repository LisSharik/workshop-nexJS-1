'use client'

import { useState } from "react";

export default function Size({sizes}: {sizes: string[]}) {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);


    return (
        <div className="text-sm w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full flex justify-between">
                <p>Size: <strong>S</strong></p>
                <p className="border-b-[1px] border-neutral-800 cursor-pointer font-medium ">Find your size</p>

            </div>
            <div className="flex gap-2">

                {sizes.map((size, index) => (
                    <p key={index} className={`text-lg cursor-pointer w-12 h-10 border-[1px] border-neutral-200 rounded flex justify-center items-center transition-all ${selectedSize === size ? "bg-neutral-900 border-neutral-900 text-white": "hover:bg-neutral-200"}`} onClick={() => setSelectedSize(size)}>{size}</p> 
                ))}
            </div>

        </div>
    )
}