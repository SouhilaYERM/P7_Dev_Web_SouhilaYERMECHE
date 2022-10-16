import './App.css';
import React from 'react';
import {Home} from './pages/home/Home'
import {Fiche} from './pages/fiche/Fiche'
import {A_propos} from './pages/a_propos/A_propos'
import {Pages} from './pages/pages'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Pages/>}>
          <Route path="/" element= {<Home title=""/>}></Route>
          <Route path="/fiche" element= {<Fiche title=""/>}></Route>
          <Route path="/A_propos" element= {<A_propos title=""/>}></Route>
        </Route> 
      </Routes>
    </Router>
  );
}

export default App;
