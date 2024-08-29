"use client";

import { useState } from "react";

export default function Quantity() {
  const [cont, setCont] = useState(1);

  return (
    <div className="text-sm flex flex-col gap-4">
      <p>Quantity: </p>
      <div className="flex gap-2 justify-around items-center text-lg bg-neutral-200 rounded w-32 h-10 text-neutral-950">
        <button onClick={() => setCont(cont - 1)} className="w-1/3 flex justify-center items-center">
          <i className="text-xl bx bx-minus "></i>
        </button>
        <p>{cont}</p>
        <button onClick={() => setCont(cont + 1)} className="w-1/3 flex justify-center items-center">
          <i className="text-xl bx bx-plus" ></i>
        </button>
      </div>
    </div>
  );
}
