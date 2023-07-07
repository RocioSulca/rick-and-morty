import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../functions/function';
import "../styles.css";
import { GoSearch } from "react-icons/go";

function Search({ allCharacters, setAllCharacters }) {

    const [search, setSearch] = useState("");
    const [personajes, setPersonajes] = useState(null);

    useEffect(() => {
        getAllCharacters(setPersonajes);
    }, [])

    const presionar = e => {

        setSearch(e.target.value)
        resBusque(e.target.value)
    }

    function resBusque(elementoBuscado) {

        let resultado = personajes.filter((elemento) => elemento.name.toString().toLowerCase().includes(elementoBuscado.toLowerCase()))
        return setAllCharacters(resultado)
    }

    return (
        <>
            <h1 className='title'>RICK AND MORTY</h1>
            <div className='input-wrapper'>
                <input value={search} type="text" onChange={presionar} placeholder='Buscar personajes' />
                <GoSearch className='input-icon'></GoSearch>
            </div>
            <div className='container-allcharacters'>
                
                {allCharacters && allCharacters.length !==0 ? allCharacters.map(character =>
                    <a key={character.id} href={`/character/${character.id}`} className='enlace-character'>
                        <img src={character.image} alt='Imagen de los personjes' className='characters-img'></img>
                        <h2>{character.name}</h2>
                    </a> 
                ) : <div className='no-character'><p>NO HAY EL PERSONAJE</p></div>}
                
            </div>
        </>
    )
}

export default Search