import { useParams } from "react-router-dom";
import { uniqueCharacter } from "../functions/function";
import { useState, useEffect } from "react";
import { GoDotFill, GoArrowLeft } from "react-icons/go";
import "../styles.css";

function Character() {
    const params = useParams()
    const [selectUniqueCharacter, setSelecUniqueCharacter] = useState(null)


    useEffect(() => {
        uniqueCharacter(params.id, setSelecUniqueCharacter)
    }, [params])


    return (
        <>
            <div className="back-container">
                <a href="/" className="enlace-back"><GoArrowLeft></GoArrowLeft></a>
            </div>
            {selectUniqueCharacter != null ?
                <>
                    <h1 className="character-title">{selectUniqueCharacter.name}</h1>
                    <img src={selectUniqueCharacter.image} className="unique-character" alt=''></img>
                    <div className="container-status">Estado: {selectUniqueCharacter.status === 'Alive' ?
                        <div className="status"><GoDotFill className="dot-alive"></GoDotFill><p>Alive</p></div> :
                        <div className="status"><GoDotFill className="dot-dead"></GoDotFill><p>Dead</p></div>
                    }</div>
                    <div className="species">Especie: {selectUniqueCharacter.species}</div>
                    <div className="species">Origen: {selectUniqueCharacter.origin.name}</div>

                    <div className="species">Género: {selectUniqueCharacter.gender}</div>
                    <div className="species">Ultima vez visto: {selectUniqueCharacter.location.name}</div>

                </>
                : ('No existe el personaje')}

        </>
    )
}

export default Character