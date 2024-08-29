'use client'

import DiscountCard from "@/components/discounts/DiscountCard";

export default function discount(){
    const discounts = [
        {
            title: "Essential Basics",
            image: "https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-morena-sensual-chica-ropa-clasica-beige-elegante-pantalones-anchos-modelo-aislado-blanco_158538-9432.jpg?t=st=1724970707~exp=1724974307~hmac=388f01f180c30d3e1cb33ba6bb794b71b5b7f54070cf5c409b944be80d280b17&w=1968",
        },
        {
            title: "Athleisure Wear",
            image: "https://img.freepik.com/free-photo/cool-sunglasses-small-swimming-pool_23-2148633530.jpg?t=st=1724970865~exp=1724974465~hmac=2f5f3374132125d2df73ffb15826f856f2164694a4077364410b919c2a0cac73&w=1333",
        },
        {
            title: "Seasonal Favorites",
            image: "https://img.freepik.com/foto-gratis/azulejos-estetica-mediterranea-bolso-mujer_23-2150916728.jpg?t=st=1724972022~exp=1724975622~hmac=621fe630873599d94101e3f820f25f780c813827e894ee513329167bc9975600&w=1335",
        },
    ];


    return(
        <div className="w-full flex justify-center items-center py-20  gap-6">

            {discounts.map((discount, index) => (
                <DiscountCard key={index} {...discount} />
            ))}

        </div>
    );
}