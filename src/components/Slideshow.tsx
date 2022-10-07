import 'react-slideshow-image/dist/styles.css'

import { Zoom } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images: string[] = ["https://i.blogs.es/1aad84/marvel/1366_521.jpeg", "https://i.blogs.es/1aad84/marvel/1366_521.jpeg", "https://i.blogs.es/1aad84/marvel/1366_521.jpeg"];

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
         <img key={index} style={{ width: "100%" }} src={each} />
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
