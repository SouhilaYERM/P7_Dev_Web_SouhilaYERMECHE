import React from 'react';
import { Tagname } from '../../components/desktopComponents/Tag/Tag-name';
import {Dropdown} from '../../components/desktopComponents/dropdown/Dropdown'
export const Fiche = ({title})=>{
    return (
    <div className="App">
    <Tagname />
            <Dropdown
                titre="Fiabilité" 
                contenu={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont 
                régulièrement vérifiées par nos équipes. </p>}
                large={true}
            />
            <Dropdown 
                titre="Description"
                contenu= {<ul>
                <li >Climatisation</li>
                <li >Wi-Fi</li>
                <li >Cuisine</li>
                <li >Espace de travail</li>
                <li >Fer à repasser</li>
                <li >Sèche-cheveux</li>
                <li >Cintres</li>
            </ul>}
                large= {false}
            />
  </div>);
}