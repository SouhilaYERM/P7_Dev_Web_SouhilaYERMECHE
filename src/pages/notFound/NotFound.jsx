import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'
import {image} from './404.svg'
export const NotFound = () => {
    return(
        <div >
            <img src={image}></img>
            <h2 className="error">Oups ! la page que vous demandez n'existe pas.</h2>
            <p className="retour"><Link to="/" >Retourner sur la page d'accueil</Link> </p>
        </div>
        );
}