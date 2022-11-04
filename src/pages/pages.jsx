import React from 'react';
import {KasaHeader} from '../components/header/KasaHeader'
import {KasaFooter} from '../components/footer/KasaFooter'
import { Outlet } from 'react-router-dom';

export const Pages = ()=>{
    return (
      <>
      <KasaHeader />
      <Outlet /> 
      <KasaFooter />
      </>
    );
}