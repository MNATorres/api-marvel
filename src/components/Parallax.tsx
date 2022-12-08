import { Parallax } from 'react-parallax';
import { TitleAnimation } from './TitleAnimation';
import Video from './Video';

export default function ParralaxContainer() {
    return (
        <Parallax blur={1} bgImage="https://img2.rtve.es/i/?w=1600&i=1642710124434.jpg" bgImageAlt="the cat" strength={250} style={{margin: '100px 0 200px'}}>
            <div className="containerParallax" style={{padding: '50px 0'}}>
                <TitleAnimation />
                <Video />
            </div>
        </Parallax>
    )
}