import React from 'react';
import './Thumb.css'
export const Thumb = ({image, title})=>{
    return (
    <div className="kasa-thumb">
        <img className="KasaThumbImage" src={image} alt=""/>
        <h2 className="kasa-thumbTitle">{title}</h2>
    </div>);
}