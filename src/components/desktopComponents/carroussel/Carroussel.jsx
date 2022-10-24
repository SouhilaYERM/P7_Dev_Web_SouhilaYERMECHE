import React, { useState } from "react";
const data = require('../../../data.json')

export const Carroussel = () => { // takes in images as props
  return (
      <div>
        <button onClick="{slideLeft}"></button>
        <img src={data} />
        <button onClick="{slideRight}"></button>
      </div>
  )
};
