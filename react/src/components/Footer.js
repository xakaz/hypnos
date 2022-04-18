import React from 'react'
import Logo from '../assets/componentsAssets/Navbar/logoHotel.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Footer() {

  const [hotels, setHotels] = useState();

  useEffect(() => {
    axios.get("http://localhost/server/front/hotels")
      .then(response => {
        setHotels(response.data);
      })
  }, [])

  return (
    <div>
      <div className="container text-light">
        <footer className="row row-cols-5 py-5 mt-5 border-top">
          {/* LOGO */}
          <div className="col ">
            <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
              <img src={Logo} alt="hypnosLogo" style={{ height: "100px" }} className='img-fluid rounded' />
            </a>
            <p className="text-muted">© 2022</p>
          </div>

          {/* COLONNE VIDE DE SEPARATION */}
          <div className="col"></div>

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
            </ul>
          </div>

          {/* ----------------------------------- VILLES -----------------------------------*/}
          <div className="col">
            <h5>Villes</h5>
            <ul className="nav flex-column">
              {
                hotels && hotels.map(hotel => {
                  return (
                    <li className="nav-item mb-2">
                      <a href={"/hotel/" + hotel.hotel_ville.toLowerCase()} className="nav-link p-0 text-muted">{hotel.hotel_ville}</a>
                    </li>
                  )
                })
              }
              {/* <li className="nav-item mb-2">
                <a href="/toulouse" className="nav-link p-0 text-muted">Toulouse</a>
              </li> */}
              {/* <li className="nav-item mb-2">
                <a href="/paris" className="nav-link p-0 text-muted">Paris</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/bordeaux" className="nav-link p-0 text-muted">Bordeaux</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/marseille" className="nav-link p-0 text-muted">Marseille</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/lyon" className="nav-link p-0 text-muted">Lyon</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/monaco" className="nav-link p-0 text-muted">Monaco</a>
              </li>
              <li className="nav-item mb-2">
                <a href="/le-havre" className="nav-link p-0 text-muted">Le Havre</a>
              </li> */}
            </ul>
          </div>

          {/* ----------------------------------- INFOS -----------------------------------*/}
          <div className="col">
            <h5>Informations</h5>
            <ul className="nav flex-column">

              {/* A PROPOS */}
              <li className="nav-item mb-2">
                <a href="/about" className="nav-link p-0 text-muted">A propos de Hypnos</a>
              </li>

              {/* TARIFS */}
              <li className="nav-item mb-2">
                <a href="/tarifs" className="nav-link p-0 text-muted">Tarifs</a>
              </li>

              {/* PARTENAIRES */}
              <li className="nav-item mb-2">
                <a href="https://www.bookin.com/" className="nav-link p-0 text-muted">Nos partenaires</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
