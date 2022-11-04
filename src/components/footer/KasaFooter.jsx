import React from 'react';
import './KasaFooter.css';
import {ReactComponent as Logo} from './.LOGO.svg';
export const KasaFooter = ()=>{
    return (
    <footer className="kasa-footer">
      <Logo />
      <div className="element-footer">© 2020 Kasa.All rights reserved</div>
    </footer>);
}