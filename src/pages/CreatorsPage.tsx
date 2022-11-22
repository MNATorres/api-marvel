import {CuadriculaMovil} from "../components/CuadriculaMovil";
import { CuadriculaDesktop } from "../components/CuadriculaDesktop";
import { SimplePage } from "../components/SimplePage";
import { getCreators } from "../services/api";

function CreatorsPage(){
    return(
        <SimplePage>
            <div className="containerCharacter">
            <CuadriculaDesktop
                   fetcher={getCreators}
                />

                <div className="containerHomeMovil">
                    <CuadriculaMovil
                        fetcher={getCreators}
                    />
+                </div>
                
                
            </div>
        </SimplePage>
    )
}

export default CreatorsPage;