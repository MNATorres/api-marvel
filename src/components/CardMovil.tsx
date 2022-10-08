import * as React from 'react';
import { useState, useEffect } from 'react';

import axios from "axios";
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



export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  ////////////////////

  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=5c596f63542e81287e00e40042a25215&hash=8771afa70cde304a0c79b966e9b2ffa8");
  const [item, setItem] = useState<DataCard[] | null>();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url)
      console.log(res.data.data.results);
      setItem(res.data.data.results)
      console.log(item)
    }
    fetch();
  }, [url])

  ////////////////////

  return (
    <div className='containerCardMovil'>
      {item?.map((card, i) => {
        return <ComponentCard 
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
