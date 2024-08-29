'use client'

import { useState } from "react";

export default function Color({ colors }: { colors: string[] }) {
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
       <>
         {colors.map((color, index) => (
            <div
              className={`color-item cursor-pointer ${
                selectedColor === color
                  ? "border-[1px] border-neutral-900 rounded-full p-1"
                  : ""
              }`}
              key={index}
              onClick={() => setSelectedColor(color)}
            >
              <div
                className="w-[15px] h-[15px] rounded-full"
                style={{ backgroundColor: color }}
              >
               
              </div>
            </div>
          ))}
       </>
    );
}
