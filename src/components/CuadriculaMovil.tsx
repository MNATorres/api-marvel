import * as React from 'react';
import { useState, useEffect } from 'react';
import './../styles/CardMovil.css';
import { ComponentCard } from './ComponentCard';
import { CuadriculaDataType } from './CuadriculaDesktop';

////////////////////////

//////////////////////////

interface CuadriculaMovilType{
  fetcher:  () => Promise<CuadriculaDataType[]>
}



export const CuadriculaMovil :React.FC<CuadriculaMovilType> =({fetcher}) => {
  const [data, setData] = useState<CuadriculaDataType[] | null>();

    useEffect(() => {
        fetcher().then(setData);
    }, [])

  

  ////////////////////

  ////////////////////

  return (
    <div className='containerCardMovil'>
      {data?.map((card, i) => {
        return <ComponentCard 
        key={Math.random()}
        url={card.url}
        image={`${card.imagePath}.${card.extension}`}
        alt={card.title} 
        title={card.title}
        description={card.description}
        />
      })}
    </div>
  );
}
