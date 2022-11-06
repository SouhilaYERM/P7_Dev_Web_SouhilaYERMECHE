import React from 'react';
import {KasaHeader} from '../components/header/KasaHeader'
import {KasaFooter} from '../components/footer/KasaFooter'
import { Outlet } from 'react-router-dom';
import './pages.css'

export const Pages = ()=>{
    return (
      <div className='page'>
        <div className="main">
          <KasaHeader />
          <Outlet /> 
        </div>
        <KasaFooter/>
      </div>
    );
}