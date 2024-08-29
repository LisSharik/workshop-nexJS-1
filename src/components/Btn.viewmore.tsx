'use client'


export default function BtnViewMore({text, color}: {text: string, color: string}) {
    return (
        <div className={`flex items-center justify-center gap-2 border-b-2 py-1 border-${color} text-${color} cursor-pointer`}>
          <p>{text}</p>
          <i className="text-xl bx bx-up-arrow-alt rotate-45"></i>
        </div>
    )

}