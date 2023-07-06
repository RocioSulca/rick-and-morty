import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../functions/function';
import "../styles.css";
import { GoSearch } from "react-icons/go";

function Search({ allCharacters, setAllCharacters }) {

    const [search, setSearch] = useState("");
    const [personajes, setPersonajes] = useState(null);

    useEffect(()=> {
        getAllCharacters(setPersonajes);
    },[])

    const presionar = e => {
       
        setSearch(e.target.value)
        resBusque(e.target.value)
    }

    function resBusque(elementoBuscado) {
        console.log('personajes',personajes)
        let resultado = personajes.filter((elemento) => elemento.name.toString().toLowerCase().includes(elementoBuscado.toLowerCase()))
        console.log(resultado)
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
            {allCharacters != null ? allCharacters.map(chara =>
                <a key={chara.id} href={`/character/${chara.id}`} className='enlace-character'>
                    <img src={chara.image} alt='Imagen de los personjes' className='characters-img'></img>
                    <h2>{chara.name}</h2>
                </a>
            ) : ('no hay personajes')}
            </div>
        </>
    )
}

export default Search