import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';  // Ajuste o caminho
import Videoteca from './componentes/Videoteca/Videoteca';  // Ajuste o caminho


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/videoteca" element={<Videoteca />} />
      </Routes>
    </Router>
  );
}

export default App;

