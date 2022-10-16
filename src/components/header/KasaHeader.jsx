import React from 'react';
import './KasaHeader.css';
import {ReactComponent as Logo} from './.LOGO.svg';
//import logo from '../../';
export const KasaHeader = ({title})=>{
    return (
    <header className="kasa-header">
      <Logo className=""/>
      <nav className="nav">
        <div className="element">Accueil</div>
        <div className="element">A propos</div>
      </nav>
    </header>);
}