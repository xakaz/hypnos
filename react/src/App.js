import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { v4 as uuid_v4 } from "uuid"

// IMPORTS COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORTS SERVICES
import Accueil from "./containers/Accueil";
import BienEtre from "./containers/services/BienEtre";
import Evenements from "./containers/services/Evenements";
import Restaurants from "./containers/services/Restaurants";
import Contact from "./containers/services/Contact"
import Reservation from "./containers/services/Reservation";

// IMPORTS HOTELS
import Hotel from "./containers/hotels/Hotel"
import HotelTemplate from './components/hotelTemplate'

//IMPORTS USERS
import Inscription from './containers/users/Inscription'
import Connexion from './containers/users/Connexion'
import MonCompte from "./containers/users/MonCompte";

//IMPORT AXIOS
import axios from 'axios';

function App() {

  const [hotels, setHotels] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_AXIOS_URL+"/front/hotels")
      .then(response => {
        setHotels(response.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="bg-dark">
      <Navbar />
      <Inscription />
      <Connexion />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/hotels" element={<Hotel />} />
        {
          hotels && hotels.map(hotel => {
            return (
              <Route path={"/hotel/" + hotel.hotel_ville.toLowerCase().replace(" ", "")}
                element={<HotelTemplate ville={hotel.hotel_ville} />}
                key={uuid_v4()} />
            )
          })
        }
        <Route path="/bien-etre" element={<BienEtre />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="*" element={<h1 className="text-center text-white m-5 p-5">Erreur 404 - Page non trouvée</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
