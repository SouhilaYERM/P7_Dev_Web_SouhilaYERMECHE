import React from 'react';
import './Rating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, } from '@fortawesome/free-solid-svg-icons'

export const Rating = ({rating})=>{

    return (
    <div className="rating">
        <div>
            <FontAwesomeIcon icon={faStar} className={rating>=1?"full":"empty"}/>
            <FontAwesomeIcon icon={faStar} className={rating>=2?"full":"empty"}/>
            <FontAwesomeIcon icon={faStar} className={rating>=3?"full":"empty"}/>
            <FontAwesomeIcon icon={faStar} className={rating>=4?"full":"empty"}/>
            <FontAwesomeIcon icon={faStar} className={rating>=5?"full":"empty"}/>
        </div>
    </div>);
}