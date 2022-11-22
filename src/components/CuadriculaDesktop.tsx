import { useState, useEffect } from "react";
import { DataCard } from "../services/api";
import { CardDesktop } from "./Card";
import './../styles/CuadriculaDesktop.css';

interface CuadriculaDesktopType{
    fetcher:  () => Promise<CuadriculaDataType[]>
}

export interface CuadriculaDataType {
       imagePath: string,
        extension: string,
       url: string,
       title: string,
       name: string,
    author: string,
       description: string
    }

export const CuadriculaDesktop :React.FC<CuadriculaDesktopType> =({fetcher}) => {
    const [data, setData] = useState<CuadriculaDataType[] | null>();

    useEffect(() => {
        fetcher().then(setData);
    }, [])

    return (
        <div className="CuadriculaDesktop">
            {data?.map((element, i) => {

                return (
                    <div key={Math.random()} className="containerCard">
                        <CardDesktop
                            image={element.imagePath}
                            extencion={element.extension}
                            url={element.url}
                            title={element.title}
                            name={element.name}
                            author={element.author}  />

                    </div>
                )
            })
            }
        </div>
    )
}


