import Image from "next/image";

export default function discountCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="relative w-[28vw] h-[80vh]">
      <Image
        src={image}
        alt="discount"
        fill={true}
        className="object-cover"
      />
      <div className="z-10 absolute w-full flex flex-col justify-center items-center bottom-16 gap-4 text-neutral-900">
        <p className="font-semibold text-sm">UP TO 30% OFF</p>
        <h2 className="text-3xl ">{title}</h2>
        <button className="mt-10 bg-white py-2 px-6 rounded font-semibold transition-all hover:bg-neutral-300 text-sm">
          Shop now
        </button>
      </div>
    </div>
  );
}
