import RecipeReviewCard from "../components/CardMovil";
import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { SimplePage } from "../components/SimplePage";
import { getSeries } from "../services/api";

function Series(){
    return(
        <SimplePage>
            
        <div className="containerCharacter">

            <CuadriculaDesktop
                fetcher={getSeries}
            />

            <div className="containerHomeMovil">
                <RecipeReviewCard />
            </div>
        </div>
    </SimplePage>
    )
}

export default Series;