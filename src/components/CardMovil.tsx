import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import './../styles/CardMovil.css';
import ComponentCard from './ComponentCard';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
    <div className="containerCardMovil">
      {item?.map((card, i) => {
        return <ComponentCard />
      })}
    </div>
  );
}
