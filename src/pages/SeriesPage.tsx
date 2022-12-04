import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { SimplePage } from "../components/SimplePage";
import { getSeries } from "../services/api";
import { CuadriculaMovil } from "../components/CuadriculaMovil";
import './../styles/ContainerSeries.css';
import SlideshowInfinito from "../components/Slideshow";

function Series(){
    return(
        <SimplePage>
            <SlideshowInfinito />
        <div className="containerSeries">

            <CuadriculaDesktop
                fetcher={getSeries}
            />

            <div className="containerHomeMovil">
                <CuadriculaMovil
                fetcher={getSeries}
                />
            </div>
        </div>
    </SimplePage>
    )
}

export default Series;