import React from 'react';
import './KasaHeader.css'
import logo from '../../logo.svg';
export const KasaHeader = ({title})=>{
    return (
    <header className="kasa-header">
      <img src={logo} className="kasa-logo" alt="logo" />
      <nav className="nav">
        <div className="element-Accueil">Accueil</div>
        <div className="element-A_propos">A propos</div>
      </nav>
    </header>);
}