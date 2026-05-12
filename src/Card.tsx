//Props
interface CardProps{
    title: string;
    price: string;
    benefits: string[];
    variant: "gold" | "silver" | "bronze";
}

export function Card(Props: CardProps){

    const styles = {
        bronze: "border-gray-800 hover:border-orange-800 text-orange-400 hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] w-48 min-h-48",
        silver: "border-gray-800 hover:border-gray-600 text-white hover:shadow-[0_0_15px_rgba(148,163,184,0.1)] w-48 min-h-48",
        gold: "border-gray-800 hover:border-yellow-800 text-yellow-400 hover:shadow-[0_0_20px_rgba(202,138,4,0.2)] w-64 min-h-64"
    }

    const buttonStyles = {
        bronze: "bg-orange-600 hover:bg-orange-500",
        silver: "bg-gray-600 hover:bg-gray-500",
        gold: "bg-yellow-600 hover:bg-yellow-500"
    }

    return (
        <div 
            className={`
                border 
                border-zinc-800 p-5 
                rounded-lg m-2.5
                text-center 
                shadow-md 
                bg-zinc-900
                ${styles[Props.variant]}
            `}
        >

            <div
                className={`
                    flex-col
                    mb-4
                    justify-center
                    items-center
                `}
            >
                <h2 
                className={`
                    text-xl
                    font-bold
                    mb-2
                `}
                >{Props.title}</h2>
            </div>
            
            <div
                className={`
                    flex-col
                    mb-4
                    justify-center
                    items-center
                    `}
            >
                    <ul 
                    className={`
                        text-left
                        list-disc
                        list-inside
                        mb-6
                        space-y-1
                        text-zinc-400
                    `}
                >
                    {Props.benefits.map((item) => (
                        <li key={item}
                            className={`
                                text-sm
                            `}
                        >{item}</li>
                    ))}
                </ul>
            </div>
            
            <div>
                <button 
                className={`
                        mt-auto
                        w-full
                        ${buttonStyles[Props.variant]}
                        duration-300
                        text-white
                        font-bold
                        py-2
                        px-4
                        border-none
                        rounded
                        shadow-md
                `}
                >{Props.price}</button>
            </div>
            
        </div>

    );
}