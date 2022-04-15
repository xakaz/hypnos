import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from 'react-router-dom';
// IMPORTS COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORTS SERVICES
import Accueil from "./containers/Accueil";
import BienEtre from "./containers/services/BienEtre";
import Evenements from "./containers/services/Evenements";
import Restaurants from "./containers/services/Restaurants";
import Contact from "./containers/services/Contact"

// IMPORTS HOTELS
import Hotel from "./containers/hotels/Hotel"
import HotelTemplate from './components/hotelTemplate'
import SuiteHotelTemplate from "./components/SuiteHotelTemplate";
import AjouterSuite from "./containers/AjouterSuite"
import Suites from "./containers/hotels/Suites"

//IMPORTS USERS
import Inscription from './containers/users/Inscription'
import Connexion from './containers/users/Connexion'
import MonCompte from "./containers/users/MonCompte";
import Manager from "./containers/users/CompteManager";
import ConnexionContextProvider from "./context/connexionContext";
import { ConnexionContext } from "./context/connexionContext";
import axios from 'axios';

function App() {

  const [hotels, setHotels] = useState();
 


  useEffect(() => {
    axios.get("http://localhost/server/front/hotels")
      .then(response => {
        setHotels(response.data);
      })

  }, [])

  return (
    <div className="bg-dark">
      <ConnexionContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/hotels" element={<Hotel />} />
          {
            hotels && hotels.map(hotel => {
              return <Route path={"/hotel/" + hotel.hotel_ville.toLowerCase()}
                element={<HotelTemplate ville={hotel.hotel_ville} />}
                key={hotel.hotel_id} />
            })
          }
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
