import { useEffect, useState } from "react";
import axios from "axios";
import { CardDesktop } from "../components/Card";
import './../styles/HomePage.css';
import RecipeReviewCard from "../components/CardMovil";
import SlideshowInfinito from "../components/Slideshow";
import { SimplePage } from "../components/SimplePage";

//public-key: 5c596f63542e81287e00e40042a25215
//private-key: d501a4af1d9bef85a23f4ed378b7002921c2a8b8
//ts: 1
// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215
// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

interface DataCard {
    thumbnail: {
        extension: string; path: string
    };
    title: string
    description: string,
    id: number,
    urls: [{ url: string }],
    creators: {
        items: [
            {

                name: string,
                role: string
            }
        ],

    }
}

function getAuthorString(item: DataCard) {
    return item.creators.items.map((element) => `${element.name}(${element.role})`).join(", ");
}

function HomePage() {
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

    return (
        <SimplePage>
            <SlideshowInfinito />
            <div className="containerHome">

                {item?.map((element, i) => {

                    return (
                        <div key={Math.random()} className="containerCard">
                            <CardDesktop
                                image={element.thumbnail.path}
                                extencion={element.thumbnail.extension}
                                url={element.urls[0].url}
                                title={element.title}
                                name={element.title}
                                author={getAuthorString(element)} />

                        </div>
                    )
                })
                }
                <div className="containerHomeMovil">
                    <RecipeReviewCard />
                </div>
            </div>
        </SimplePage>
    );
}

export default HomePage;