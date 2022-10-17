import './../styles/HomePage.css';
import RecipeReviewCard from "../components/CardMovil";
import SlideshowInfinito from "../components/Slideshow";
import { SimplePage } from "../components/SimplePage";
import { DataCard, getComics } from "../services/api";
import { CuadriculaDesktop } from "../components/CuadriculaDesktop";

//public-key: 5c596f63542e81287e00e40042a25215
//private-key: d501a4af1d9bef85a23f4ed378b7002921c2a8b8
//ts: 1
// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215
// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150





function HomePage() {



    return (
        <SimplePage>
            <SlideshowInfinito />
            <div className="containerHome">

                <CuadriculaDesktop
                    fetcher={getComics}
                />

                <div className="containerHomeMovil">
                    <RecipeReviewCard />
                </div>
            </div>
        </SimplePage>
    );
}

export default HomePage;