import FeatureCard from "@/components/features/FeatureCard";

export default function Feature(){
    const features = [
        {
            icon: "bx-cube",
            title: "Free Shipping",
            text: "Free shipping over order $120"
        },
        {
            icon: "bx-credit-card-front",
            title: "Flexible Payment",
            text: "Pay with Multiple Credit Cards"
        },
        {
            icon: "bx-subdirectory-left",
            title: "14 Day Returns",
            text: "Within 30 days for an exchange"
        },
        {
            icon: "bx-headphone",
            title: "Premium Support",
            text: "Outstanding premium support"
        },
    ]



    return(
        <div className="w-full py-5  flex justify-center items-center  gap-7">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
        
    );
}