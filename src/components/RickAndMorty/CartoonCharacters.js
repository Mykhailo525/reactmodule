
import Character from "./Character";
import {useState} from "react";

export default function CartoonCharacters() {

    let [characters,setCharacters]=useState([])

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.slice(0,6))
        })


    return (
        <div>
            {characters.map((character,index)=>(<Character member={character} key={index}/>))}
        </div>
    )
}