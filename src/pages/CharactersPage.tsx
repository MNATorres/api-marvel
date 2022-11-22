import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { SimplePage } from "../components/SimplePage";
import { getCharacters } from "../services/api";
import { CuadriculaMovil } from "../components/CuadriculaMovil";

function CharactersPage() {
    return (
        <SimplePage>
            <div className="containerCharacter">
            <CuadriculaDesktop
                   fetcher={getCharacters}
                />

                <div className="containerHomeMovil">
                    <CuadriculaMovil
                        fetcher={getCharacters}
                    />
+                </div>
                
            </div>
        </SimplePage>
    );
}

export default CharactersPage;