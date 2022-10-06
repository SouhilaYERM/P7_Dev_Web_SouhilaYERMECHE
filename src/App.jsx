import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Home} from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element= {<Home title=""/>}></Route>
      <Route path="/fiche" element= {<Fiche title=""/>}></Route>
      <Route path="/A_propos" element= {<A_propos title=""/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
