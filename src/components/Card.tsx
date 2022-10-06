import './../styles/Card.css';

type ElementProps = {
    image: string;
    title: string;
    description: string;
    name: string;
}

const Card: React.FC <ElementProps> = ({image, title, description, name}) => {
    return(
        <div className="containerCard">
            <img src={image} alt={name} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default  Card;