import axios from "axios";
import { CuadriculaDataType } from "../components/CuadriculaDesktop";

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
                url: string,
                name: string,
                role: string
            }
        ],

    }
}

export interface DataCharacter {
        urls: any;
        comics: any;
        series: any;
        id: number,
        name: string,
        url: string,
        thumbnail: {
            extension: string; path: string
        };
    }


export const getComics = async () => {
    const res = await axios.get(getUrl('comics'))
            console.log(res.data.data.results);
            return res.data.data.results.map(dataCardToCuadriculaDataType);
}

function dataCardToCuadriculaDataType(element: DataCard): CuadriculaDataType {
        return {
            imagePath: element.thumbnail.path,
            extension: element.thumbnail.extension,
            url: element.urls[0].url,
            title: element.title,
            name: element.title,
            author: getAuthorString(element),
            description: element.description
        }
}

function dataCharacterToCuadriculaDataType(element: DataCharacter): CuadriculaDataType {
        return{
            imagePath: element.thumbnail.path,
            extension: element.thumbnail.extension,
            url: element.urls[0].url,
            title: element.name,
            name: element.name,
            author: "",
            description: ""
        }
}

function dataCreatorsToCuadriculaDataType(element: DataCharacter): CuadriculaDataType {
    return{
        imagePath: element.thumbnail.path,
        extension: element.thumbnail.extension,
        url: element.urls[0].url,
        title: element.name,
        name: element.name,
        author: "",
        description: ""
    }
}

function dataEventsToCuadriculaDataType(element: DataCharacter): CuadriculaDataType {
    return{
        imagePath: element.thumbnail.path,
        extension: element.thumbnail.extension,
        url: element.urls[0].url,
        title: element.name,
        name: element.name,
        author: "",
        description: ""
    }
}

function getAuthorString(item: DataCard) {
    return item.creators.items.map((element) => `${element.name}(${element.role})`).join(", ");
}

export const getSeries= async () => {
    const res = await axios.get(getUrl('series'))
            console.log(res.data.data.results);
            return res.data.data.results.map(dataCardToCuadriculaDataType);
}

export const getCharacters= async () => {
    const res = await axios.get(getUrl('characters'))
            console.log(res.data.data.results);
            return res.data.data.results.map(dataCharacterToCuadriculaDataType);
}

export const getCreators= async () => {
    const res = await axios.get(getUrl('creators'))
            console.log(res.data.data.results);
            return res.data.data.results.map(dataCreatorsToCuadriculaDataType);
}

export const getEvents= async () => {
    const res = await axios.get(getUrl('events'))
            console.log(res.data.data.results);
            return res.data.data.results.map(dataEventsToCuadriculaDataType);
}

function getUrl(product: string) {
    return `https://gateway.marvel.com/v1/public/${product}?ts=1&apikey=5c596f63542e81287e00e40042a25215&hash=8771afa70cde304a0c79b966e9b2ffa8`;
}