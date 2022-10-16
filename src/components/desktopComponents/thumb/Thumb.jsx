import React from 'react';
import './Thumb.css'
export const Thumb = ({title, image})=>{
    return (
    <div className="kasa-thumb">
        <img className="KasaThumbImage" src={image}/>
        <h2 className="kasa-thumbTitle">{title}</h2>
    </div>);
}