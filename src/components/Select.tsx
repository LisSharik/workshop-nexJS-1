export default function Select({label}: {label: string}) {
    return (
        <div className="flex justify-items-center items-center text-base cursor-pointer transition hover:text-gray-700 ">
            <p>{label}</p>
            <i className='bx bx-chevron-down text-xl'></i>
        </div>
    )
}