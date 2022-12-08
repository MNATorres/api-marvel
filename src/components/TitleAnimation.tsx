import { border } from "@chakra-ui/react";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "NOVEDADES",
    "ANUNCIOS",
    "ENTRETENIMIENTO",
    "LAS MEJORES ESCENAS"
];

export const TitleAnimation = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <h1>
            <TextTransition springConfig={presets.wobbly} style={{ 
                color: '#00eeff', 
                textShadow: '0 0 5px #00eeff', 
                margin: '0 auto', 
                justifyContent: 'center', 
                }}>

                <p style={{border: '2px solid #00eeff', marginTop: '-20px', padding: '5px'}}>{TEXTS[index % TEXTS.length]}</p>
            </TextTransition>
        </h1>
    );
};