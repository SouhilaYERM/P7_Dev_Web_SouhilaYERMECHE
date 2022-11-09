import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Carroussel.css'

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
  if(images.length=== 1) {
    return (
      <div className="carroussel">
        <img src={images[index]} className="imageCarroussel" alt="" />
      </div>
    )
  } else {
    return (
      <div className="carroussel">
        <button onClick={toLeft} className="button left"><FontAwesomeIcon icon= {faAngleLeft}/></button>
        <img src={images[index]} className="imageCarroussel" alt="" />
        <button onClick={toRight} className="button right"><FontAwesomeIcon icon= {faAngleRight}/></button>
      </div>
    )
  }
};
