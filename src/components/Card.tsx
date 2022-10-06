import './../styles/Card.css';

type ElementProps = {
    image: string;
    title: string;
    description: string;
    name: string;
    extencion: string
}

const Card: React.FC <ElementProps> = ({image, title, description, name, extencion}) => {
    return(
        <div className="containerCard">
            <img src={`${image}.${extencion}`} alt={name} />
            <div className="containerDesciption">
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default  Card;