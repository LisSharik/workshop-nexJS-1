import Image from "next/image";

export default function Category({image, title, items}: {image: string, title: string, items: number} ) {
    return (
        <div className="category-content flex flex-col justify-center items-center gap-8 ">
            <div className="category-image w-[175px] h-[175px] relative ">
                <Image src={image} alt="category" fill={true} 
                 className="rounded-full cursor-pointer transition-all object-cover hover:scale-105 " />
         
            </div>
            <div className="info flex flex-col justify-center items-center gap-2">
                <p className="text-lg font-[600]">{title}</p>
                <p className="text-neutral-500 text-sm">{items} items</p>

            </div>
        </div>
        
    )
}