import React, {useState} from 'react';
import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const Dropdown = ({titre, contenu, large})=>{
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="drop">
            <div className={`kasa-dropdown ${large ? 'large' : null }`}>
                <span className="dropdown-title">{titre}</span>
                <button className="Icon" onClick={()=> setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen?faAngleUp: faAngleDown} className="dropdownfont"/>
                </button>
            </div>
            {isOpen ? (
                <div className={`openDrop ${large ? 'large' : null }`}>
                    {contenu}
                </div> 
            ) : null}
            
        </div>  
    );
}