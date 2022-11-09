import React from 'react';
import './KasaHeader.css';
import {ReactComponent as Logo} from './.LOGO.svg';
import {Link} from 'react-router-dom';

export const KasaHeader = ()=>{
    return (
    <header className="kasa-header">
      <Link to="/" className="lien"><Logo className="logo"/></Link>
      <nav className="nav">
        <div className="element"><Link to="/" className="lien">Accueil</Link></div>
        <div className="element"><Link to="/Apropos" className="lien">A propos</Link></div>
      </nav>
    </header>);
}