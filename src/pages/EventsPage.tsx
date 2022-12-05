import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { CuadriculaMovil } from "../components/CuadriculaMovil";
import { SimplePage } from "../components/SimplePage";
import SlideshowInfinito from "../components/Slideshow";
import { getEvents } from "../services/api";
import './../styles/EventsPage.css';

function EventsPage(){
    return(
        <SimplePage>
        <SlideshowInfinito />

        <div className="containerEvents">
        <CuadriculaDesktop
                   fetcher={getEvents}
                />

                <div className="containerHomeMovil">
                    <CuadriculaMovil
                        fetcher={getEvents}
                    />
               </div>
                
                
        </div>
        </SimplePage>
    )
}

export default EventsPage;