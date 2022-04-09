import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./containers/Accueil";
import BienEtre from "./containers/BienEtre";
import Evenement from "./containers/Evenement";
import Restaurants from "./containers/Restaurants";
import Contact from "./containers/Contact"

function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/hotels" element={<h1>Hotels</h1>}/>
          <Route path="/bien-etre" element={<BienEtre/>}/>
          <Route path="/restaurants" element={<Restaurants/>}/>
          <Route path="/evenements" element={<Evenement/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
          <Route path="*" element={<h1>Erreur 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
