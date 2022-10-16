import React from 'react';
import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export const Dropdown = ({titre, contenu, large})=>{
    return (
        <div className="">
            <div className={`kasa-dropdown ${large ? 'large' : null }`}>
                <span className="dropdown-title">{titre}</span>
                <span className="Icon">
                    <FontAwesomeIcon icon={faAngleDown} className="dropdownfont"/>
                </span>
            </div>

            <div className={`openDrop ${large ? 'large' : null }`}>
                {contenu}
            </div>
        </div>  
    );
}