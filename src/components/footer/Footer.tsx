"use client";
import Image from "next/image";
import BtnIcon from "@/components/footer/Btn.icon";
import BtnViewMore from "@/components/Btn.viewmore";
import Lenguage from "@/components/Lenguage";
import Link from "next/link";
import Banks from "@/components/Banks";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center flex-col mt-20 py-10 bg-neutral-100 text-sm gap-7">
      <div className="w-[90%] flex justify-between items-start ">
        <div className="column-1 flex flex-col justify-start items-start gap-8  ">
          <Link href="/">
            <Image
              src="/logo-ecomus.svg"
              alt="brand"
              width={150}
              height={100}
            />
          </Link>
          <div className="flex flex-col justify-start items-start gap-2">
            <p>Address: 1234 Fashion Street, Suite 567,</p>
            <p>New York, NY 10001</p>
            <p>Email: info@fashionshop.com</p>
            <p>Phone: (212) 555-1234</p>
          </div>
          <BtnViewMore text="Get direction" color="neutral-900" />

          <div className="flex gap-3">
            <BtnIcon icon="bxl-facebook" color="#141c24" isButton={true} />
            <BtnIcon icon="bxl-twitter" color="#141c24" isButton={true} />
            <BtnIcon icon="bxl-instagram" color="#141c24" isButton={true} />
            <BtnIcon icon="bxl-tiktok" color="#141c24" isButton={true} />
            <BtnIcon icon="bxl-pinterest" color="#141c24" isButton={true} />
          </div>
        </div>
        <div className="column-2 flex flex-col justify-start items-start gap-8">
          <h3 className="text-lg font-semibold">Help</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <p>Privacy Policy</p>
            <p>Returns + Exchanges</p>
            <p>Shipping</p>
            <p>Terms & Conditions</p>
            <p>{`FAQ's`}</p>
            <p>Compare</p>
            <p>My wishlist</p>
          </div>
        </div>
        <div className="column-3 flex flex-col justify-start items-start gap-8">
          <h3 className="text-lg font-semibold">Abot us</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <p>Our Story</p>
            <p>Visit Our Store</p>
            <p>Contact Us</p>
            <p>Account</p>
          </div>
        </div>
        <div className="column-4 flex flex-col justify-start items-start gap-8">
          <h3 className="text-lg font-semibold">Sign Up for Email</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <p>Sign up to get first dibs on new arrivals, sales, </p>
            <p>exclusive content, events and more!</p>
          </div>
          <div className="w-full bg-white flex justify-between items-center py-2 px-5 rounded">
            <input type="text" placeholder="Enter your email...." />
            <button className="bg-neutral-950 py-2 px-4 rounded text-white flex justify-center items-center gap-1">
              <p>Suscribe</p>
              <i className="text-xl bx bx-up-arrow-alt rotate-45"></i>
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Lenguage />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end items-center pr-10">
        <Link href="#header">
          <BtnIcon icon="bx-chevron-up" color="#141c24" isButton={true} />
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] flex justify-between items-center ">
          <p>&copy; 2023 Fashion Shop. All rights reserved</p>
          <Banks />
        </div>
      </div>
    </footer>
  );
}
