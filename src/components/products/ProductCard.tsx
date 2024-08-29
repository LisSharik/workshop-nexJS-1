"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Colors from "@/components/Colors";

export default function Products({
  image,
  nameProduct,
  price,
  colors,
  discount,
}: {
  image: string;
  nameProduct: string;
  price: number;
  colors: string[];
  discount: boolean;
}) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="card-product w-[20vw] flex flex-col justify-start items-start gap-2">
      <div className="product-image w-full h-[60vh] relative">
        {discount && (
          <div>
            <p className="z-10 absolute text-sm bg-[#f85635] text-white py-1 px-3 rounded-full top-5 right-5">
              -33%
            </p>
            <div className="z-10 absolute w-full  flex justify-center items-center bottom-6 ">
              <p className=" bg-white py-2 px-6 rounded text-red-500 font-semibold text-sm">
                11d: 15h: 51m: 37s
              </p>
            </div>
          </div>
        )}
        <Link href={"/product-detail"}>
          <Image
            src={image}
            alt="product"
            fill={true}
            className="object-cover rounded-lg transition-all hover:scale-[1.02]"
          />
        </Link>
      </div>
      <h3>{nameProduct}</h3>
      <p className="font-semibold text-sm">
        {discount ? "From $" : "$"}
        {price}
      </p>
      <div className="flex gap-4 items-center justify-center">
        <Colors colors={colors} />
      </div>
    </div>
  );
}
