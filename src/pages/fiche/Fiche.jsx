import React from 'react';
import { Tagname } from '../../components/desktopComponents/Tag/Tag-name';
import {Dropdown} from '../../components/desktopComponents/dropdown/Dropdown'
import {Carroussel} from '../../components/desktopComponents/carroussel/Carroussel'
const data = require('../../data.json') 
function getHomeId(){
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("id")
}
export const Fiche = ()=>{
    const home = data.find(homeData => homeData.id == getHomeId())
        return (
            <div className="">
                {home.tags.map((tag, index) =><Tagname 
                    key ={index}
                    contenu = {tag}
            /> )}
            
            <Dropdown
                titre="Description" 
                contenu={<p>{home.description}</p>}
                large={true}
            />
            <Dropdown 
                titre="Equipement"
                contenu= {home.equipments.map((equipment, index) => <ul><li key={index}>{equipment}</li></ul>)}
                large= {false}
            />
            <Carroussel
                images= {home.pictures} 
            />
            </div>)
         
}