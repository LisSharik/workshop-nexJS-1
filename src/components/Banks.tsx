"use client";
import Image from "next/image";

export default function Banks() {
  return (
    <div className="flex justify-center items-center gap-5">
      <Image
        src="https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo-500x281.png"
        alt="brand"
        width={35}
        height={100}
      />
      <Image
        src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal-500x281.png"
        alt="brand"
        width={35}
        height={100}
      />
      <Image
        src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png"
        alt="brand"
        width={35}
        height={100}
      />
      <Image
        src="https://1000marcas.net/wp-content/uploads/2020/03/logo-American-Express-500x281.png"
        alt="brand"
        width={35}
        height={100}
      />
      <Image
        src="https://1000marcas.net/wp-content/uploads/2019/12/BBVA-logo-600x342.png"
        alt="brand"
        width={35}
        height={100}
      />
    </div>
  );
}
