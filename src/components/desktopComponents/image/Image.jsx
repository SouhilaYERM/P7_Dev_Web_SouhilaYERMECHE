import React from 'react';
import './Image.css';
export const ImageHome = ({Simage})=>{
    return (
    <div className={`image ${Simage ? 'Simage' : null}`}>
        <h1 className="text">Chez vous, partout et Ailleurs </h1>
    </div>);
}