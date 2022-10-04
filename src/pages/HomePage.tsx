import { useEffect, useState } from "react";

//public-key: 5c596f63542e81287e00e40042a25215
//private-key: d501a4af1d9bef85a23f4ed378b7002921c2a8b8
//ts: 1
//hash: 8771afa70cde304a0c79b966e9b2ffa8

// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

function HomePage() {
    const [comic, setComic] = useState()

    const hash = "8771afa70cde304a0c79b966e9b2ffa8";
    const apikey = "5c596f63542e81287e00e40042a25215";

    const base = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apikey}&hash=${hash}`;

    const fetchMarvelInformation = async () => {
        const response = await fetch(`${base}${apikey}`);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setComic(responseJSON.articles);
    };

    useEffect(() => {
        fetchMarvelInformation()
    }, [])


    return (
        <div className="containerHome">
            <h1>Home</h1>
        </div>
    );
}

export default HomePage;