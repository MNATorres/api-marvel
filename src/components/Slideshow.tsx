import 'react-slideshow-image/dist/styles.css';
import './../styles/Slideshow.css';

import { Zoom } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images: string[] = [ "https://c.tenor.com/c7iRHlK9vIMAAAAC/marvel-comics.gif", "https://c.tenor.com/6Vh68dxbnZkAAAAC/marvel-logo.gif", "http://24.media.tumblr.com/579b696c718b6765cfe7bca94c88310e/tumblr_mlcaghBDPS1r7fvemo1_500.gif","https://25.media.tumblr.com/tumblr_m9jfm1NchQ1rab6tio1_500.gif"];

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
