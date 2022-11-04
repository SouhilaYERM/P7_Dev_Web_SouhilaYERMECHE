import React from 'react';
import './KasaHeader.css';
import {ReactComponent as Logo} from './.LOGO.svg';
import {Link} from 'react-router-dom';

export const KasaHeader = ()=>{
    return (
    <header className="kasa-header">
      <Logo className="logo"/>
      <nav className="nav">
        <div className="element"><Link to="/" className="lien">Accueil</Link></div>
        <div className="element"><Link to="/A_propos" className="lien">A propos</Link></div>
      </nav>
    </header>);
}