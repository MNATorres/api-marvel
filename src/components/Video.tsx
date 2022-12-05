import React from 'react'
import ReactPlayer from 'react-player/youtube';
import './../styles/Video.css';


export default function Video() {
    return (
        <div className="containerVideo">
            <ul>
                <li><ReactPlayer url='https://www.youtube.com/watch?v=35aYVLO5Rdo&ab_channel=Eredus' /></li>
                <li><ReactPlayer url='https://www.youtube.com/watch?v=gMT4b24eXPA&t=1542s&ab_channel=eljorgeTDB' /></li>
                <li><ReactPlayer url='https://www.youtube.com/watch?v=Cy7Rsew9nwc&ab_channel=MovsFilms' /></li>
            </ul>
        </div>
    )
}