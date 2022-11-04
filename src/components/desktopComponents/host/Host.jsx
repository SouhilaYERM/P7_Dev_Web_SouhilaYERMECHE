import React from 'react';
import './Host.css'
export const Host = ({name, image})=>{
    return (
    <div className="host">
        <h2 className='hostName'>{name}</h2>
        <img className="hostPhoto" src={image}/>
    </div>);
}