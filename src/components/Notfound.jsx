import React from 'react';
import "../styles.css";
import { Link } from "react-router-dom";
import imgNotFound from '../assets/rickAndMorty.png'

function Notfound() {
    return (

        <div className='container-notfound'>
            <div className='container-string'>
                <h1 className='number-notfound'>404</h1>
                <h3 className='string-notfound'>UPS! LA PÁGINA NO HA SIDO ENCONTRADA</h3>
                <div className='button-gohome-container'>
                    <Link to="/" className='button-gohome'>
                        <span className='go-home'>Go Home</span>
                    </Link>
                </div>
            </div>
            <div className='container-img'>
                <img src={imgNotFound} alt='imagen Not Found' className='img-notfound'></img>
            </div>
        </div>

    )
}

export default Notfound