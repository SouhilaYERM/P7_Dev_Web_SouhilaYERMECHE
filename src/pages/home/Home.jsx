import React from 'react';
import './Home.css'
import {Thumb} from '../../components/desktopComponents/thumb/Thumb'
import {Image_haut_de_page} from '../../components/desktopComponents/image/Image.jsx';
let data = require('../../data.json')
{console.log(data)}
export const Home = ()=>{
    return (
        <div className="home-content"> 
            <Image_haut_de_page />
            <div className="list">
                {data.map((homeData) =><Thumb
                    title={homeData.title}
                    image={homeData.cover}
                />  )}
            </div>   
        </div>
    );
}
