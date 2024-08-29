'use client'

import Carousel from "@/app/product-detail/components/product-detail/Carousel";
import Color from "@/components/Colors";
import Size from "@/app/product-detail/components/product-detail/Size";
import Quantity from "@/app/product-detail/components/product-detail/Quantity";
import TextIcon from "@/app/product-detail/components/TextIcon";
import Banks from "@/components/Banks";
import Image from "next/image";

export default function ProductDetail() {
  const images = [
    "https://img.freepik.com/foto-gratis/hermosa-mujer-morena-modelo-ropa-casual-verano-hipster-aislado-blanco_158538-2832.jpg?t=st=1724885790~exp=1724889390~hmac=b9436ecf0a747395d3617641ccd594ab33e4e23130ca180aa635cb69834b3f0c&w=1779",
    "https://img.freepik.com/foto-gratis/alta-moda-look-glamor-closeup-retrato-hermosa-sexy-elegante-morena-mujer-negocios-joven-modelo-chaqueta-abrigo-blanco-pano-hipster-jeans_158538-2815.jpg?t=st=1724885639~exp=1724889239~hmac=825267c00f0bbee45ea4a5c99cbab3d6730d1b0ef5b03238dcea92bcda7bc168&w=1333",
    "https://img.freepik.com/foto-gratis/alta-moda-look-glamor-closeup-retrato-hermosa-sexy-elegante-morena-hipster-mujer-joven-modelo-chaqueta-bata-blanca_158538-2802.jpg?t=st=1724885904~exp=1724889504~hmac=f608bb57cd36cec124d5b91cc8f78e64c3563314493fd76a4f93d979d5cabde4&w=1914",
    "https://img.freepik.com/foto-gratis/alta-moda-look-glamor-closeup-retrato-hermosa-sexy-elegante-morena-negocio-joven-modelo-bata-blanca-chaqueta-hipster-tela-jeans-sombrero_158538-2841.jpg?t=st=1724885977~exp=1724889577~hmac=5c1ddeb8f1dbd78c43f3e9675b6957408d4d11ba3e31caf7e58ecbd64d24dc2e&w=1333",
    "https://img.freepik.com/foto-gratis/alta-moda-look-glamor-closeup-retrato-hermosa-sexy-morena-elegante-hipster-mujer-joven-modelo-chaqueta-blanca-gran-sombrero-negro_158538-2842.jpg?t=st=1724886016~exp=1724889616~hmac=a1e3483f758c097db5d8367354d9cc9e5f668604c8ebaaa925c9b80227d6f898&w=1831",
    "https://img.freepik.com/foto-gratis/retrato-mujer-joven-hermosa-elegante-gafas-sol_158538-4190.jpg?t=st=1724886069~exp=1724889669~hmac=31f5fd38e7d0a750a25f426cba456b55b2096a0f8a8a890eda7d3a44dc6209e7&w=1985",
  ];

  const colors = ["#c7ae7f", "#030303", "#a9bcd2"];

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="w-full h-[150vh] flex justify-center items-center my-20">
      <div className="w-[90%] h-full flex justify-between items-start">
        <div className="w-1/2 h-full flex gap-4">
          <Carousel listImages={images} />
        </div>
        <div className="w-1/2 text-neutral-800 flex flex-col justify-start items-start gap-6 text-sm">
          <h3 className="text-3xl font-medium">Cotton jersey top</h3>

          {/* BEST SELLER */}
          <div className="flex gap-4">
            <p className="py-2 px-4 border-[1px] border-neutral-900 text-xs font-semibold rounded">
              Best seller
            </p>

            <TextIcon
              text="Selling fast! 56 people have this in their carts."
              icon="bxs-zap"
              colorIcon="red-500"
            />
          </div>

          {/* PRICE */}
          <div className="flex justify-start items-center gap-4">
            <h3 className="text-2xl text-red-500">$8.00</h3>
            <h4 className="line-through text-lg">$10.00</h4>
            <p className=" text-white font-semibold py-[5px] px-4 rounded-full bg-orange-600">
              20% OFF
            </p>
          </div>

          {/* PEOPLE VIEWING */}
          <div className="flex justify-start items-center gap-2 font-medium">
            <p className="bg-neutral-950 text-white py-[2px] px-2 rounded">
              20
            </p>
            <p>People are viewing this right now</p>
          </div>

          {/* TIME */}
          <div className="py-4 px-10 flex flex-col justify-center items-center gap-2 border-2 border-red-500 rounded">
            <div className="flex items-center gap-2 font-semibold text-xs">
              <i className="bx bx-time-five text-lg"></i>
              <p>HURRY UP! SALE ENDS IN</p>
            </div>
            <p className=" text-red-500 font-semibold">
              11Days : 15Hours: 51Mins : 32Secs
            </p>
          </div>

          {/* COLOR */}
          <div className=" flex flex-col justify-start items-start gap-4">
            <p>
              Color: <strong>Beige</strong>
            </p>
            <div className="flex justify-start items-center gap-4 scale-105">
              <Color colors={colors} />
            </div>
          </div>

          {/* SIZE */}
          <Size sizes={sizes} />
          {/* QUANTITY */}
          <Quantity />
          {/* BUTTONS */}
          <div className="w-full flex flex-col justify-center items-center gap-4  ">
            <div className="w-full flex justify-center items-center gap-1  ">
              <button className="bg-neutral-950 text-white w-full h-[5.5vh] rounded transition-all hover:bg-neutral-900">
                Add to cart - $8.00
              </button>
              <i className="cursor-pointer text-xl p-2  border-[1px] border-neutral-300 bx bx-heart"></i>
              <i className="cursor-pointer text-xl p-2  border-[1px] border-neutral-300 bx bx-expand"></i>
            </div>
            <div className="w-full bg-yellow-400 text-blue-900 font-medium flex justify-center items-center py-1  rounded gap-2 cursor-pointer transition-all hover:bg-yellow-300">
              Buy with
              <Image
                src="https://1000marcas.net/wp-content/uploads/2019/12/PayPal-Logo-2007-500x315.png"
                alt="paypal"
                width={60}
                height={30}
              />
            </div>
            <p className="cursor-pointer text-xs border-b-[1px] border-neutral-600">
              More payment options
            </p>
          </div>

          {/* ICONS */}
          <div className="w-full flex justify-start items-center gap-6 ">
            <TextIcon
              text="Compare color"
              icon="bx-palette"
              colorIcon="neutral-900"
            />
            <TextIcon
              text="Ask a question"
              icon="bx-question-mark"
              colorIcon="neutral-900"
            />
            <TextIcon
              text="Delivery & Return"
              icon="bxs-truck"
              colorIcon="neutral-900"
            />
            <TextIcon
              text="Share"
              icon="bx-share-alt"
              colorIcon="neutral-900"
            />
          </div>

          {/* RETURN AND DELIVERY */}
          <div className="w-full flex justify-between items-center text-xs">
            <div className="flex flex-col items-center justify-center gap-4 text-center py-5 px-6 border rounded">
              <i className="bx bx-planet text-4xl"></i>
              <p className="leading-5">Estimate delivery times: <strong>12-26 days</strong> <br /> (International), <strong>3-6 days</strong> (United States).</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 text-center py-5 px-8 border rounded">
              <i className="bx bx-package text-4xl"></i>
              <p className="leading-5">Return within <strong>30 days</strong> of purchase <br /> Duties & taxes are non-refundable.</p>
            </div>  
          </div>

          {/* PAGE SECURITY */}
          <div className="w-full flex items-center justify-start gap-7">
            <div className="w-[20%]">
            <TextIcon text="Guarantee Safe Checkout" icon="bx-check-shield" colorIcon="neutral-900" />

            </div>
            < Banks />
          </div>

        </div>
      </div>
    </div>
  );
}
