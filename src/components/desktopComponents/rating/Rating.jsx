import React from 'react';
import './Rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, } from '@fortawesome/free-solid-svg-icons'

export const Rating = ({rating})=>{
    return (
    <div className="">
        <div>
            <FontAwesomeIcon icon={faStar} className="full empty"/>
            <FontAwesomeIcon icon={faStar} className="full empty"/>
            <FontAwesomeIcon icon={faStar} className="full empty"/>
            <FontAwesomeIcon icon={faStar} className="full empty"/>
            <FontAwesomeIcon icon={faStar} className="full empty"/>
        </div>
    </div>);
}