"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="banner w-full h-screen flex justify-center items-start">
      <div className="banner-info w-2/4 h-full bg-[#eff1e0] flex flex-col justify-center items-center  ">
        <div className="info-content w-4/5 h-2/3 flex flex-col gap-8  justify-around items-start">
          <div className=" flex flex-col justify-center items-start gap-6">
            <h1 className="text-7xl font-[400]">
              Summer <br />
              Escapades
            </h1>
            <h3>Embrace the sun-kissed season with our collection of breezy</h3>
            <button className="bg-white py-3 px-6 flex justify-center items-center mt-4">
              Shop collection
              <i className="text-xl bx bx-chevron-right "></i>
            </button>
          </div>

          <div className="cirles flex gap-4 mt-10">
            <div className="cursor-pointer w-6 h-2 bg-neutral-900 rounded-full"></div>
            <div className="cursor-pointer circle w-2 h-2 bg-neutral-400 rounded-full"></div>
            <div className="cursor-pointer circle w-2 h-2 bg-neutral-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="banner-img w-2/4 h-full relative">
        <Image
          src="https://img.freepik.com/foto-gratis/adolescente-sesion-moda-callejera-gorra-blanca-snapback_53876-102320.jpg?t=st=1724777911~exp=1724781511~hmac=5765c871f31b1c41a98a2dcad1efdaa998f2e53bed6d7b168d841cb2c7f7abdc&w=3337"
          alt="img banner"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
}
