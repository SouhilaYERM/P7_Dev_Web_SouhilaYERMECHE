import React from 'react';
import './Home.css'
import {Thumb} from '../../components/desktopComponents/thumb/Thumb'
import {Image_haut_de_page} from '../../components/desktopComponents/image/Image.jsx';
import {Link} from 'react-router-dom'
const data = require('../../data.json')
export const Home = ()=>{
    return (
        <div className="home-content"> 
            <imageHome
            Simage = {false}/> 
            <div className="list">
             {data.map((homeData, index) =><Link to={"/Fiche/"+homeData.id}><Thumb 
                 key={index}
                 title={homeData.title}
                 image={homeData.cover}
             /></Link>)}
            </div>
        </div>
    );
}
