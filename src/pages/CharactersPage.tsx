import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { SimplePage } from "../components/SimplePage";
import { getCharacters } from "../services/api";
import { CuadriculaMovil } from "../components/CuadriculaMovil";
import SlideshowInfinito from "../components/Slideshow";

function CharactersPage() {
    return (
        <SimplePage>
            <SlideshowInfinito />
            <div className="containerCharacter">
            <CuadriculaDesktop
                   fetcher={getCharacters}
                />

                <div className="containerHomeMovil">
                    <CuadriculaMovil
                        fetcher={getCharacters}
                    />
               </div>
                
            </div>
        </SimplePage>
    );
}

export default CharactersPage;