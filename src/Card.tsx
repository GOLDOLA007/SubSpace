//Props
interface CardProps{
    title: string;
    price: string;
    benefits: string[];
    variant: "gold" | "silver" | "bronze";
    onClick: () => void;
}

export function Card(Props: CardProps){

    const styles = {
        bronze: "hover:border-orange-800 hover:translate-y-[-5px] hover:transition hover:duration-300 shadow-lg shadow-orange-800 text-orange-400 w-48 h-48",
        silver: "hover:border-gray-600 hover:translate-y-[-5px] hover:transition hover:duration-300 shadow-lg shadow-gray-600 text-gray-400 w-48 h-48",
        gold:   "hover:border-yellow-800 hover:translate-y-[-5px] hover:transition hover:duration-300 shadow-lg shadow-yellow-800 text-yellow-400 w-64 h-64"
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
                p-5 
                rounded-lg m-2.5
                text-center
                w-48
                h-48
                ${styles[Props.variant]}
            `}
        >
            <div
                className={`
                    h-full
                    flex
                    flex-col
                    justify-between
                `}
            >

            
                <div
                    className={`
                        flex-col
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
                
                <div
                    className={`
                        flex
                        justify-center
                        items-end
                        h-1/3
                    `}
                >
                    <button 
                    onClick={Props.onClick}
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
                            cursor-pointer
                    `}
                    >{Props.price}</button>
                </div>
            </div>
            
        </div>

    );
}