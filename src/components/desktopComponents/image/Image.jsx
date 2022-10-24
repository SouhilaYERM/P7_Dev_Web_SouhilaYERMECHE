import React from 'react';
import './Image.css';
import {ReactComponent as Image_page} from './IMG.svg';
export const Image_haut_de_page = ({Simage})=>{
    return (
    <div className={`image ${Simage ? 'Simage' : null}`}>
        <h1 className="text">Chez vous, partout et Ailleurs </h1>
    </div>);
}