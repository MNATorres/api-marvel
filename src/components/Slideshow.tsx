
import { Zoom } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images: string[] = ["https://i.blogs.es/1aad84/marvel/1366_521.jpeg", "https://as01.epimg.net/meristation/imagenes/2021/03/12/reportajes/1615546576_319724_1615546812_noticia_normal.jpg", "https://media.vandalsports.com/i/640x360/10-2022/2022105135220_1.jpg", "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/09/deadpool-wolverine.jpg?fit=1280%2C720&quality=80&ssl=1", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/09/marvel-2460339.jpg?itok=cBnC1CBi"];

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
          <img key={index} style={{ width: "100%", maxWidth: "1300px", position: "absolute" }} src={each} />
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
