import Link from "next/link";

export default function ToolBar() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[90%] flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-neutral-900 font-medium">
          <Link href={"/"} className="cursor-pointer">
            Home
          </Link>
          <i className="bx bx-chevron-right"></i>
          <p className="cursor-pointer">Woman</p>
          <i className="bx bx-chevron-right"></i>
          <p className="cursor-pointer text-neutral-500">Cotton jersey top</p>
        </div>

        <div className="text-xl flex items-center justify-center gap-1 cursor-pointer">
          <i className="text-2xl bx bx-chevron-left"></i>
          <i className="bx bx-category"></i>
          <i className="text-2xl bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
