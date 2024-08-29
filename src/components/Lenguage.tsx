"use client";
import Image from "next/image";
import Select from "@/components/Select";

export default function Lenguage() {
  return (
    <>
      <div className="select-money flex justify-items-center items-center gap-1">
        <Image
          src="https://cdn-icons-png.freepik.com/256/1867/1867882.png"
          alt="logo ecomus"
          width={18}
          height={10}
        />
        <Select label="Usd" />
      </div>

      <Select label="English" />
    </>
  );
}
