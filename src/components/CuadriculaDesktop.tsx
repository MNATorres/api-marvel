import { useState, useEffect } from "react";
import { DataCard } from "../services/api";
import { CardDesktop } from "./Card";
import './../styles/CuadriculaDesktop.css';

interface CuadriculaDesktopType{
    fetcher:  () => Promise<DataCard[]>
}


export const CuadriculaDesktop :React.FC<CuadriculaDesktopType> =({fetcher}) => {
    const [data, setData] = useState<DataCard[] | null>();

    useEffect(() => {
        fetcher().then(setData);
    }, [])

    return (
        <div className="CuadriculaDesktop">
            {data?.map((element, i) => {

                return (
                    <div key={Math.random()} className="containerCard">
                        <CardDesktop
                            image={element.thumbnail.path}
                            extencion={element.thumbnail.extension}
                            url={element.urls[0].url}
                            title={element.title}
                            name={element.title}
                            author={getAuthorString(element)} />

                    </div>
                )
            })
            }
        </div>
    )
}

function getAuthorString(item: DataCard) {
    return item.creators.items.map((element) => `${element.name}(${element.role})`).join(", ");
}
