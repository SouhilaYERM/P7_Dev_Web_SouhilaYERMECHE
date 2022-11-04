import React from 'react';
import { Tagname } from '../../components/desktopComponents/Tag/Tag-name';
import {Dropdown} from '../../components/desktopComponents/dropdown/Dropdown'
import {Carroussel} from '../../components/desktopComponents/carroussel/Carroussel'
import { useParams, Navigate } from 'react-router-dom';
import {Host} from '../../components/desktopComponents/host/Host'
import {Location} from '../../components/desktopComponents/location/Location'
import { Rating } from '../../components/desktopComponents/rating/Rating';
import './Fiche.css'
const data = require('../../data.json') 

export const Fiche = ()=>{
    const {id} = useParams();
    const home = data.find(homeData => homeData.id === id)
    if(!data.some(homeData => homeData.id === id)){
        return (
            <Navigate to="/NotFound" replace={true}/>
        )
    }else{
        return (
            <div className="">
                        <Carroussel
                            images= {home.pictures} 
                        />
                            {home.tags.map((tag, index) =><Tagname 
                                key ={index}
                                contenu = {tag}
                        /> )}
                        <Location
                            location={home.location}
                        />
                        <Host
                            name={home.host.name}
                            image={home.host.picture}
                        />
                        <Rating />
                        <Dropdown
                            titre="Description" 
                            contenu={<p>{home.description}</p>}
                            large={true}
                        />
                        <Dropdown 
                            titre="Equipement"
                            contenu= {home.equipments.map((equipment, index) => <div key={index}>{equipment}</div>)}
                            large= {false}
                        />
                        
            </div>
        )
        
    }
}