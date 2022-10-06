import './../styles/Card.css';

type ElementProps = {
    image: string;
    title: string;
    description: string;
    name: string;
    extencion: string,
    url: string
}

const Card: React.FC<ElementProps> = ({ image, title, description, name, extencion, url }) => {
    return (
        <div className="containerCard">
            <a href={url}>
                <img src={`${image}.${extencion}`} alt={name} />
                <div className="containerDesciption">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}

export default Card;