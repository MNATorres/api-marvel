import { Parallax } from 'react-parallax';
import Video from './Video';

export default function ParralaxContainer() {
    return (
        <Parallax blur={1} bgImage="https://www.wallpapertip.com/wmimgs/66-662113_desktop-dark-backgrounds-4k.png" bgImageAlt="the cat" strength={200} style={{margin: '100px 0 200px'}}>
            <div className="containerParallax" style={{padding: '50px 0'}}>
                <Video />
            </div>
        </Parallax>
    )
}