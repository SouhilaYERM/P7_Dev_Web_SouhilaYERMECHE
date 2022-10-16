import React from 'react';
import './Home.css'
import {Thumb} from '../../components/desktopComponents/thumb/Thumb'
import {Image_haut_de_page} from '../../components/desktopComponents/image/Image.jsx';
export const Home = ()=>{
    return (
        <div className="home-content"> 
            <Image_haut_de_page />
            <Thumb 

            />
        </div>
    );
}
