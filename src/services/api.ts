import axios from "axios";

export interface DataCard {
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


export const getComics= async () => {
    const res = await axios.get(getUrl('comics'))
            console.log(res.data.data.results);
            return res.data.data.results as DataCard[];
}

export const getSeries= async () => {
    const res = await axios.get(getUrl('series'))
            console.log(res.data.data.results);
            return res.data.data.results as DataCard[];
}

export const getCharacters= async () => {
    const res = await axios.get(getUrl('characters'))
            console.log(res.data.data.results);
            return res.data.data.results as DataCard[];
}

export const getCreators= async () => {
    const res = await axios.get(getUrl('creators'))
            console.log(res.data.data.results);
            return res.data.data.results as DataCard[];
}

export const getStories= async () => {
    const res = await axios.get(getUrl('stories'))
            console.log(res.data.data.results);
            return res.data.data.results as DataCard[];
}

function getUrl(product: string) {
    return `https://gateway.marvel.com/v1/public/${product}?ts=1&apikey=5c596f63542e81287e00e40042a25215&hash=8771afa70cde304a0c79b966e9b2ffa8`;
}