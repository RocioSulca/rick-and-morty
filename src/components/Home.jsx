import { useState, useEffect } from 'react';
import {getAllCharacters} from '../functions/function';
import Search from './Search';
import Footer from './Footer';

const Home = () =>{
   
    const[allCharacters, setAllCharacters] = useState(null)

    useEffect(()=> {
        getAllCharacters(setAllCharacters);
    },[])



    return (
        <>
        <Search allCharacters={allCharacters} setAllCharacters={setAllCharacters} ></Search>
        <Footer></Footer>
        </>
    )
}

export default Home
