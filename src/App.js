import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Accueil</h1>}/>
          <Route path="/hotels" element={<h1>Hotels</h1>}/>
          <Route path="/bien-etre" element={<h1>Bien-être</h1>}/>
          <Route path="/restaurants" element={<h1>Restaurants</h1>}/>
          <Route path="/evenements" element={<h1>Evènements</h1>}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
          <Route path="*" element={<h1>Erreur 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
