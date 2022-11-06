import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as ErrorImage} from './notfound.svg'
import './NotFound.css'
export const NotFound = () => {
    return(
        <div className='main'>
            <div className='error'>
                <ErrorImage  className='errorImage'/>
                <h2 className="errorMessage">Oups ! la page que vous demandez n'existe pas.</h2>
                <p className="errorMessage"><Link to="/" >Retourner sur la page d'accueil</Link> </p>
           </div> 
        </div>
        );
}