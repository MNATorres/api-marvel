import * as React from 'react';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import './../styles/CardMovil.css';

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
  urls:[{url:string}],
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

  const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=5c596f63542e81287e00e40042a25215&hash=8771afa70cde304a0c79b966e9b2ffa8");
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
      {item?.map((card) => {
        return <Card sx={{ maxWidth: '45%', minWidth: "45%", margin: 1 }}>
      <a href={card.urls[0].url}>
      <CardMedia
        component="img"
        height="250"
        image={`${card.thumbnail.path}.${card.thumbnail.extension}`}
        alt={card.title}
      />
      </a>
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
      {card.title}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
          <ExpandMoreIcon />
          
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>         
          <Typography paragraph>
            {card.description}
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    })}
    </div>
  );
}
