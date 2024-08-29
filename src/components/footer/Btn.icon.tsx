"use client";

interface BtnIconProps {
  icon: string;
  color: string;
  isButton: boolean;
  text?: string;
}

export default function BtnIcon({ icon, color, isButton, text }: BtnIconProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div
        className={`w-8 h-8 flex justify-center items-center rounded-full border-[1.5px] ${
          isButton ? "cursor-pointer transition-all hover:bg-neutral-300" : ""
        }`}
        style={{ borderColor: color }}
      >
        <i className={`bx ${icon} text-lg`} style={{ color }}></i>
      </div>
      {text && (
        <p className="" style={{ color }}>
          {text}
        </p>
      )}
    </div>
  );
}
