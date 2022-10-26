import React from 'react';
import { Tagname } from '../../components/desktopComponents/Tag/Tag-name';
import {Dropdown} from '../../components/desktopComponents/dropdown/Dropdown'
import {Carroussel} from '../../components/desktopComponents/carroussel/Carroussel'
import { useParams, Navigate } from 'react-router-dom';
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
            </div>
        )
        
    }
}