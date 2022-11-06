import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Carroussel.css'
const data = require('../../../data.json')

export const Carroussel = ({images}) => { 
  const [index, setIndex] = useState(0)
  const toRight = () => {
    if(index < images.length -1){
      setIndex(index + 1)
    }else {
      setIndex(index)
    }
  }
  const toLeft = () => {
    if(index > 0){
      setIndex(index - 1)
    }else {
      setIndex(index)
    } 
  }
  return (
      <div className="carroussel">
        <button onClick={toLeft} className="button left"><FontAwesomeIcon icon= {faAngleLeft}/></button>
        <img src={images[index]} className="imageCarroussel" />
        <button onClick={toRight} className="button right"><FontAwesomeIcon icon= {faAngleRight}/></button>
      </div>
  )
};
