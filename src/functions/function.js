import axios from 'axios';

const getAllCharacters = async (status) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    status(peticion.data.results)
} 

const uniqueCharacter = async (id, status) => {
    
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    status(peticion.data)
} 



export {getAllCharacters, uniqueCharacter}