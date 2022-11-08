import './App.css';
import React from 'react';
import {Home} from './pages/home/Home'
import {Fiche} from './pages/fiche/Fiche'
import {Apropos} from './pages/a_propos/Apropos'
import {Pages} from './pages/pages'
import {NotFound} from './pages/notFound/NotFound'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route element={<Pages/>}>
          <Route path="/" element= {<Home title=""/>}></Route>
          <Route path="/Fiche/:id" element= {<Fiche title=""/>}></Route>
          <Route path="/Apropos" element= {<Apropos title=""/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
