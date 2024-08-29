'use client'
import Image from "next/image"

export default function Brand() {
    return (
        <div className="w-full flex justify-around items-center my-10">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ssense_logo.svg/1280px-Ssense_logo.svg.png" alt="brand" width={100} height={100} />
            <Image src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Burberry.png" alt="brand" width={130} height={100} />
            <Image src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1-500x239.png" alt="brand" width={100} height={100} />
            <Image src="https://1000marcas.net/wp-content/uploads/2021/06/Asos-logo.png" alt="brand" width={100} height={100} />
            <Image src="https://1000marcas.net/wp-content/uploads/2021/05/Pull-Bear-Logo-500x281.png" alt="brand" width={130} height={100} />
            <Image src="https://1000marcas.net/wp-content/uploads/2024/02/Adidas-Logo-500x281.png" alt="brand" width={100} height={100} />
        </div>
    )
}