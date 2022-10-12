import './../styles/Card.css';
import { NewsHeaderCard } from 'react-ui-cards';


type ElementProps = {
    image: string;
    title: string;
    name: string;
    extencion: string;
    url: string;
    author: string
}

export const CardDesktop: React.FC<ElementProps> = ({image, title, name,extencion, url, author}) => <NewsHeaderCard
    href={url}
    thumbnail={`${image}.${extencion}`}
    title={title}
    author={(author)}
    date='Feb 2, 2018'
    tags={['action', 'comic', () => (<i>hero</i>)]}
/>

