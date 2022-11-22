import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { CuadriculaMovil } from "../components/CuadriculaMovil";
import { SimplePage } from "../components/SimplePage";
import { getEvents } from "../services/api";

function EventsPage(){
    return(
        <SimplePage>
        <div className="containerCommunity">
        <CuadriculaDesktop
                   fetcher={getEvents}
                />

                <div className="containerHomeMovil">
                    <CuadriculaMovil
                        fetcher={getEvents}
                    />
+                </div>
                
                
        </div>
        </SimplePage>
    )
}

export default EventsPage;