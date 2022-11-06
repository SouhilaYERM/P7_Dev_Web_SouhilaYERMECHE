import React from 'react';
import { Tagname } from '../../components/desktopComponents/Tag/Tag-name';
import {Dropdown} from '../../components/desktopComponents/dropdown/Dropdown'
import {Carroussel} from '../../components/desktopComponents/carroussel/Carroussel'
import { useParams, Navigate } from 'react-router-dom';
import {Host} from '../../components/desktopComponents/host/Host'
import {Location} from '../../components/desktopComponents/location/Location'
import { Rating } from '../../components/desktopComponents/rating/Rating';
import {Title} from '../../components/desktopComponents/title/Title'
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
            <div className="fiche">
                <Carroussel
                    images= {home.pictures} 
                />
                <div className="ficheContent">
                    <div className="informations">
                        <div className="homeInfo">
                            <Title 
                            title= {home.title}
                            />
                            <Location
                                location={home.location}
                            /> 
                            <div className='tag'>   
                            {home.tags.map((tag, index) =>
                                <Tagname 
                                    key ={index}
                                    contenu = {tag}
                                /> 
                            )}
                            </div>
                        </div>
                        
                        <div className="hostRating">
                            <Host
                                name={home.host.name}
                                image={home.host.picture}
                            />
                            <Rating 
                                rating={home.rating}
                            />
                        </div> 
                    </div>
                    <div className="dropdown">
                        <Dropdown
                            titre="Description" 
                            contenu={<p>{home.description}</p>}
                            large={true}
                        />
                        <Dropdown 
                            titre="Equipement"
                            contenu= {home.equipments.map((equipment, index) => <div key={index}>{equipment}</div>)}
                            large= {true}
                        />
                    </div>
                </div>
            </div>
        )
        
    }
}