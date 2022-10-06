import React from 'react';
import './KasaFooter'
import logo from '../../logo.svg';
export const KasaFooter = ({title})=>{
    return (
    <footer className="kasa-footer">
      <img src={logo} className="logo-footer" alt="logo" />
      <div className="element-footer">© 2020 Kasa.All rights reserved</div>
    </footer>);
}