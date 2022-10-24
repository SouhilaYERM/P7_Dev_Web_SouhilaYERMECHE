import React from 'react';
import './KasaHeader.css';
import {ReactComponent as Logo} from './.LOGO.svg';
import {Link} from 'react-router-dom';

export const KasaHeader = ()=>{
    return (
    <header className="kasa-header">
      <Logo className=""/>
      <nav className="nav">
        <div className="element"><Link to="/">Accueil</Link></div>
        <div className="element"><Link to="/A_propos">A propos</Link></div>
      </nav>
    </header>);
}