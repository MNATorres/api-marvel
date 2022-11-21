import 'react-slideshow-image/dist/styles.css';
import './../styles/Slideshow.css';

import { Zoom } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images: string[] = [ "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/03/marvel-studios-portada.jpg?resize=1068%2C601&ssl=1", "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/06/Marvel-Studios-SDCC-destacada.jpg", "https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EKIMZMZAKFHKHC6GV7LMELQT3Y.jpeg","https://i0.wp.com/sidisney.com/wp-content/uploads/2020/12/DisneyPlus-Marvel-01.jpg?fit=1024%2C683&ssl=1"];

type Properies = {
  duration: number;
  transitionDuration: number;
  infinite: boolean;
  indicators: boolean;
  scale: number;
  arrows: boolean
}

const zoomOutProperties:Properies = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
         <img className='imgSlide' key={index} style={{ width: "100%"}} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function SlideshowInfinito() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default SlideshowInfinito;
