import * as React from 'react';
import { useState, useEffect } from 'react';
import './../styles/CardMovil.css';
import { ComponentCard } from './ComponentCard';


////////////////////////
interface DataCard {
  thumbnail: {
    extension: string; path: string
  };
  title: string
  description: string,
  id: number,
  urls: [{ url: string }],
}
//////////////////////////

interface CuadriculaMovilType{
  fetcher:  () => Promise<DataCard[]>
}



export const CuadriculaMovil :React.FC<CuadriculaMovilType> =({fetcher}) => {
  const [data, setData] = useState<DataCard[] | null>();

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
        url={card.urls[0].url}
        image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
        alt={card.title} 
        title={card.title}
        description={card.description}
        />
      })}
    </div>
  );
}
