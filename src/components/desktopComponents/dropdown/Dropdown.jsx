import React from 'react';
import './Dropdown.css'
export const Dropdown = ({title})=>{
    return (
    <div className="">
        <div className="kasa-dropdown"><span className="dropdown-title"></span> fontawesome</div>
        <ul className="openDrop">
            <li className="dropListElement">Climatisation</li>
            <li className="dropListElement">Wi-Fi</li>
            <li className="dropListElement">Cuisine</li>
            <li className="dropListElement">Espace de travail</li>
            <li className="dropListElement">Fer à repasser</li>
            <li className="dropListElement">Sèche-cheveux</li>
            <li className="dropListElement">Cintres</li>
        </ul>
    </div>);
}