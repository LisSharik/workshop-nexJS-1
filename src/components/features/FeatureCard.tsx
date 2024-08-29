export default function FeatureCard({icon, title, text}: {icon: string, title: string, text: string}){
    return(
        <div className="w-[21vw] flex gap-3 items-center justify-center">
            <i className={`bx ${icon} text-4xl p-4 border-[1px] border-neutral-200 rounded-full `}></i>
            <div className="flex flex-col gap-2  ">
                <h3>{title}</h3>
                <p className="text-xs">{text}</p>
                
            </div>
        
        </div>
    );
}