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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

  interface PropsCard {
    url: string,
    image: string,
    alt: string,
    title: string,
    description: string

  }


export  const ComponentCard: React.FC<PropsCard> = ({ url, image,alt, title, description }) =>{

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

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

    return(
        <div>
        <Card sx={{ maxWidth: '45%', minWidth: "45%", margin: 1 }}>
          <a href={url}>
            <CardMedia
              component="img"
              height="250"
              image={image}
              alt={alt}
            />
          </a>
          <CardContent>
          </CardContent>
          <CardActions disableSpacing>
            {title}
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
                {description}
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    )
}