import ProductCard from "@/components/products/ProductCard";
import NavigationTabs from "@/components/NavegationTabs";

export default function Seller() {
    const products = [
        {
            image: "https://img.freepik.com/foto-gratis/encantadora-mujer-anteojos-mirando-su-lado_114579-81420.jpg?t=st=1724811329~exp=1724814929~hmac=c8e26d9571516f9dca397aad476ab24d72057503443342ef0565d2bf1a6ce87d&w=826",
            nameProduct: "Ribbed Tank Top",
            colors: ["#e8a82d", "#010302"],
            price: 16.95,
            discount: false,
        },
        {
            image: "https://img.freepik.com/foto-gratis/nina-llevando-gris-camiseta-posar-estudio_23-2149333421.jpg?t=st=1724811491~exp=1724815091~hmac=0d270d041e389f917495aa21de13b8ba718c60c7080ea46f1429300f204090df&w=360",
            nameProduct: "Ribbed modal T-shirt",
            colors: ["#8a7b5c", "#b08eb1", "#cbfdd4"],
            price: 18.95,
            discount: true,
        },
        {
            image: "https://img.freepik.com/foto-gratis/retrato-mujer-joven-hermosa-rubia_158595-2869.jpg?t=st=1724811743~exp=1724815343~hmac=81b5af572d26c55e42212b6366524f8130c989bdae403429213363c8a251ad50&w=826",
            nameProduct: "Oversized Printed T-shirt",
            colors: ["#ffffff"],
            price: 10.00,
            discount: false,
        },
        {
            image: "https://img.freepik.com/fotos-premium/mujer-camiseta-gris-pie-frente-fondo-blanco_1324233-303.jpg?w=900",
            nameProduct: "Oversized Printed T-shirt",
            colors: ["#ffffff", "#cb70c7", "#000101"],
            price: 16.95,
            discount: false,
        },
        {
            image: "https://img.freepik.com/foto-gratis/retrato-hermosa-joven-sombrero-aislado-pared-gris_231208-510.jpg?t=st=1724811835~exp=1724815435~hmac=599e071e827889532e6697d26e0b79bc1fc7741355d0dc8d0b231ed204780c06&w=826",
            nameProduct: "V-neck linen T-shirt",
            colors: ["#8a7b5c"],
            price: 114.95,
            discount: false,
        },
        {
            image: "https://img.freepik.com/foto-gratis/retrato-macho-llevando-gorra_23-2148854441.jpg?t=st=1724811907~exp=1724815507~hmac=6bc9127bfb15ef5b89497a05f25f2b192634cc05382c811f99528c05f00ac51f&w=740",
            nameProduct: "Loose Fit Sweatshirt",
            colors: ["#d8f5e3", "#020200", "#b3becf", "#080463", "#ffffff","#d3d3d3"],
            price: 10.00,
            discount: false,
        },
        {
            image: "https://img.freepik.com/fotos-premium/retrato-mujer-joven-pie-contra-fondo-blanco_1048944-2507102.jpg?w=360",
            nameProduct: "Regular Fit Oxford Shirt",
            colors: ["#020001", "#06057c", "#c7af85", "#b5d5e4"],
            price: 10.00,
            discount: false,
        },
        {
            image: "https://img.freepik.com/foto-gratis/joven-sentado-taburete-pequeno-contra-pared-blanca_231208-1174.jpg?t=st=1724812039~exp=1724815639~hmac=ab7aac6a8caddcea4a48dd46da43f583a82b8d3da1522e870b46d1965e9ba5db&w=360",
            nameProduct: "Loose Fit Hoodie",
            colors: ["#ffffff","#000000", "#acbac7"],
            price: 9.95,
            discount: false,
        },
    ];

    const tabs = ["Best seller", "New arrivals", "On sale"];

    return(
        <div className=" w-full h-auto px-12 py-20 flex flex-col justify-start items-center gap-20">
            <div className="w-full flex justify-center items-center ">
                <NavigationTabs tabs={tabs} />
            </div>
            <div className="w-full flex justify-center items-start gap-10 flex-wrap">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                    />
                ))}
            </div>
                
                <button className="py-4 px-10 border-2 border-neutral-700 rounded font-semibold transition-all hover:bg-neutral-200">Load more</button>
            
        </div>
    );
}