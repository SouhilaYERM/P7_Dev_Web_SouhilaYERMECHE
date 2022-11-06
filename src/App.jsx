import './App.css';
import React from 'react';
import {Home} from './pages/home/Home'
import {Fiche} from './pages/fiche/Fiche'
import {A_propos} from './pages/a_propos/A_propos'
import {Pages} from './pages/pages'
import {NotFound} from './pages/notFound/NotFound'
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
          <Route path="/Fiche/:id" element= {<Fiche title=""/>}></Route>
          <Route path="/A_propos" element= {<A_propos title=""/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
