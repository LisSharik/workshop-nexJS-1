"use client";

export default function TextIcon({
  text,
  icon,
  colorIcon,
}: {
  text: string;
  icon: string;
  colorIcon: string;
}) {
  return (
    <div className="flex justify-start items-center gap-1 text-xs font-bold">
      <i className={`bx ${icon} text-${colorIcon} text-xl`}></i>
      {text}
    </div>
  );
}
