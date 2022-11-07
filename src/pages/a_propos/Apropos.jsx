import React from 'react';
import {Dropdown} from '../../components/desktopComponents/dropdown/Dropdown'
import './Apropos.css'
import {ImageHome} from '../../components/desktopComponents/image/Image.jsx';

export const Apropos = ()=>{  
    return (
    <div className="apropos">
         <ImageHome
            Simage = {true}/> 
            <Dropdown
                titre="Fiabilité" 
                contenu={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont 
                régulièrement vérifiées par nos équipes. </p>}
                large={true}
            />
            <Dropdown 
                titre="Respect"
                contenu= {<p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
                une exclusion de notre plateforme.</p>}
                large= {true}
            />
            <Dropdown 
                titre = "Service"
                contenu = {<p>Nos équipes se tiennent à votre disposition pour vous fournir une 
                expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre 
                question.</p>}
                large={true}
            />
            <Dropdown 
                titre = "Sécurité"
                contenu = {<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
                pour les voyageurs, chaque logement correspond aux critères de sécurité établis 
                par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela 
                permet à nos équipes de vérifier que les standards sont bien respectés. Nous 
                organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
                large={true}
            />
  </div>);
}