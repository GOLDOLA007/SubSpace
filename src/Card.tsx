//Props
interface CardProps{
    title: string;
    price: string;
    benefits: string[];
}

export function Card(Props: CardProps){
    return (
        <div style={{ 
            border: '1px solid #ccc', 
            padding: '20px',
            borderRadius: '8px',
            margin: '10px'}}>
            
            <h2>{Props.title}</h2>
            <p>Price: {Props.price}</p>
            <ul>
                {Props.benefits.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button>Subscribe now</button>
        </div>

    );
}