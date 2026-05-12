//Props
interface CardProps{
    title: string;
    price: string;
    benefits: string[];
    variant: "gold" | "silver" | "bronze";
}

export function Card(Props: CardProps){

    const styles = {
        bronze: "border-orange-600 hover:border-orange-500 text-orange-600 hover:shadow-lg w-48 h-48",
        silver: "border-gray-600 hover:border-gray-500 text-gray-600 hover:shadow-lg w-48 h-48",
        gold: "border-yellow-600 hover:border-yellow-500 text-yellow-600 hover:shadow-lg w-64 h-64"
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
                border-gray-300 p-5 
                rounded-lg m-2.5
                text-center 
                shadow-md bg-white
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
                        mb-2
                        space-y-1
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