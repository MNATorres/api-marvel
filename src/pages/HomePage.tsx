import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import './../styles/HomePage.css';

//public-key: 5c596f63542e81287e00e40042a25215
//private-key: d501a4af1d9bef85a23f4ed378b7002921c2a8b8
//ts: 1
// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215

// 1d501a4af1d9bef85a23f4ed378b7002921c2a8b85c596f63542e81287e00e40042a25215
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

function HomePage() {
    const [url, setUrl] =useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5c596f63542e81287e00e40042a25215&hash=8771afa70cde304a0c79b966e9b2ffa8");
    const [item, setItem] = useState();

    useEffect(() => {
        const fetch=async()=>{
            const res=await axios.get(url)
            //console.log(res.data.data.results);
            setItem(res.data.data.results)
            console.log(item)
        }
        fetch();
    },[url])

    return (
        <div className="containerHome">
            <Card 
            image= "string"
            title= "string"
            description= "string"
            name= "string"
            />
        </div>
    );
}

export default HomePage;