import React from 'react'
import ReactPlayer from 'react-player/youtube';
import './../styles/Video.css';
import ParralaxContainer from './Parallax';


export default function Video() {
    return (
        <div className="containerVideo">
            <ul>
                <li><ReactPlayer width='100%' url='https://www.youtube.com/watch?v=lOTB5HZKEvQ&ab_channel=MarvelLatinoam%C3%A9ricaOficial' /></li>
                <li><ReactPlayer width='100%' url='https://www.youtube.com/watch?v=mjkQXxYn-ag&ab_channel=MarvelLatinoam%C3%A9ricaOficial' /></li>
                <li><ReactPlayer width='100%' url='https://www.youtube.com/watch?v=Cy7Rsew9nwc&ab_channel=MovsFilms' /></li>
            </ul>
            
        </div>
    )
}