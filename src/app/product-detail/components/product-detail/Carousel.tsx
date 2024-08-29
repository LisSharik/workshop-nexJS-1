'use client'

import { useState } from "react";
import Image from "next/image";

export default function Carousel({ listImages }: { listImages: string[] }) {
  const [currentImage, setCurrentImage] = useState(listImages[0]);

  return (
    <>
      <div className="w-[5vw] h-screen flex flex-col gap-4">
        
        {listImages.map((image, index) => (
          <div
            className={`w-full h-[20vh] cursor-pointer relative border-[1px] rounded ${
              currentImage === image ? " border-neutral-900 border-2" : "border-transparent hover:border-neutral-400 "
            }`}
            key={index}
            onClick={() => setCurrentImage(image)}
          >
            <Image src={image} alt={`product-${index}`} fill={true} decoding="async" className="object-cover rounded " />
          </div>
        ))}
      </div>

      <div className="w-4/5 h-screen relative">
        <Image src={currentImage} alt="product" fill={true} className="object-cover rounded" />
      </div>
    </>
  );
}
