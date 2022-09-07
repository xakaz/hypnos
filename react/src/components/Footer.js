import React from 'react'
import Logo from '../assets/componentsAssets/Navbar/logoHotel.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ModalResModalAboutervation from '../components/ModalAbout'
import ModalTarif from '../components/ModalTarif'
import { v4 as uuid_v4 } from "uuid"

export default function Footer() {

  const [hotels, setHotels] = useState();

  useEffect(() => {
    const fetchHotels = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL+"/front/hotels")
      .then(response => {
        setHotels(response.data);
      })
    }
    fetchHotels();
    }, [])

  return (
    <div>
      <div className="container text-light">
        <footer className="row row-cols-5 py-5 mt-5 border-top">
          {/* LOGO */}
          <div className="col ">
            <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
              <img src={Logo} alt="hypnosLogo" style={{ maxHeight: "100px" }} className='img-fluid rounded' />
            </a>
            <p className="text-muted">© 2022</p>
          </div>

          {/* COLONNE VIDE DE SEPARATION */}
          <div className="col d-none d-lg-flex"></div>

          {/* ----------------------------------- PLAN DU SITE -----------------------------------*/}
          <div className="col">
            <h5>Plan du site</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to='/' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to='/hotels' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Hotels
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to='/restaurants' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Restauration
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to='/bien-etre' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Bien-être
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to='/evenements' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Evènements
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to='/contact' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to='/reservation' className='d-flex align-items-center text-decoration-none text-secondary'>
                  Réservation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ----------------------------------- VILLES -----------------------------------*/}
          <div className="col">
            <h5>Villes</h5>
            <ul className="nav flex-column">
              {
                hotels && hotels.map(hotel => {
                  return (
                    <li key={uuid_v4()} className="nav-item mb-2">
                      <a 
                      href={"/hotel/" + hotel.hotel_ville.toLowerCase().replace(" ", "")} 
                      className="nav-link p-0 text-muted"
                      >{hotel.hotel_ville}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          {/* ----------------------------------- INFOS -----------------------------------*/}
          <div className="col">
            <h5>Informations</h5>
            <ul className="nav flex-column">

              {/* A PROPOS */}
              <li className="nav-item mb-2">
                <ModalResModalAboutervation className="p-0 text-muted" >A propos d'Hypnos</ModalResModalAboutervation>
              </li>

              {/* TARIFS */}
              <li className="nav-item mb-2">
                <ModalTarif className="p-0 text-muted">Tarifs</ModalTarif>
              </li>

              {/* PARTENAIRES */}
              <li className="nav-item mb-2">
                <a href="https://www.booking.com/index.fr.html" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-muted">Notre partenaire Booking</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
