import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./containers/Accueil";
import BienEtre from "./containers/BienEtre";
import Evenements from "./containers/Evenements";
import Restaurants from "./containers/Restaurants";
import Contact from "./containers/Contact"
import Hotel from "./containers/Hotel"
import AjouterSuite from "./containers/AjouterSuite"
import Suites from "./containers/Suites"
import Inscription from './containers/Inscription'
import Connexion from './containers/Connexion'
import MonCompte from "./containers/MonCompte";
import Manager from "./containers/CompteManager";
import ConnexionContextProvider  from "./context/connexionContext";

function App() {

  return (
    <div className="bg-dark">
      <ConnexionContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/bien-etre" element={<BienEtre />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/mon-compte-manager" element={<Manager />} />
          <Route path="/ajouter-suite" element={<AjouterSuite />} />
          <Route path="*" element={<h1>Erreur 404</h1>} />
        </Routes>
        <Footer />
      </ConnexionContextProvider>
    </div>
  );
}

export default App;
