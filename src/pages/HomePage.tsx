import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import './../styles/HomePage.css';
import RecipeReviewCard from "../components/CardMovil";
import SlideshowInfinito from "../components/Slideshow";
import Footer from "../components/Footer";

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
    urls: [{ url: string }]
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
        <div>
            <SlideshowInfinito />
            <div className="containerHome">

                {item?.map((element, i) => {
                    if (i === 0) {
                        return <Card
                            image="https://i.pinimg.com/550x/08/bb/27/08bb277c3580a8d64df796882ad70aff"
                            extencion={element.thumbnail.extension}
                            url={element.urls[0].url}
                            title={element.title}
                            description={element.description}
                            name={element.title}
                        />
                    } else if (i === 1) {
                        return <Card
                            image="https://i.pinimg.com/736x/d7/69/3a/d7693a7321bf4f1d58672e3bb21b9042"
                            extencion={element.thumbnail.extension}
                            url={element.urls[0].url}
                            title={element.title}
                            description={element.description}
                            name={element.title}
                        />
                    }
                    return <Card
                        image={element.thumbnail.path}
                        extencion={element.thumbnail.extension}
                        url={element.urls[0].url}
                        title={element.title}
                        description={element.description}
                        name={element.title}
                    />
                })
                }
                <div className="containerHomeMovil">
                    <RecipeReviewCard />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;