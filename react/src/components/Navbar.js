import React, { useContext } from 'react'
import Logo from '../assets/componentsAssets/Navbar/logoHotel.jpg'
import { NavLink } from 'react-router-dom'
import {ConnexionContext} from '../context/connexionContext'

export default function Navbar() {
  const {connect} = useContext(ConnexionContext)
  
  return (
    <>
      <nav className="navbar navbar-light bg-light px-4">

        {/* LOGO */}
        <div>
          <a href="/">
            <img src={Logo} alt="hypnosLogo" style={{ height: "50px" }} className='img-fluid' />
          </a>
        </div>

        {/* ONGLETS PAGES */}
        <div>
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
              <div>

                {/* BOUTON RESPONSIVE*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                  <ul className="navbar-nav mb-2 mb-lg-0 ">

                    {/* ACCUEIL */}
                    <li className="nav-item">
                      <NavLink to='/' className='nav-link ms-3'>Accueil</NavLink>
                    </li>

                    {/* HOTELS */}
                    <li className="nav-item">
                      <NavLink to='/hotels' className='nav-link ms-3'>Hotels</NavLink>
                    </li>


                    {/* RESTOS */}
                    <li className="nav-item">
                      <NavLink to='/restaurants' className='nav-link ms-3'>Restauration</NavLink>
                    </li>

                    {/* BIEN-ETRE */}
                    <li className="nav-item">
                      <NavLink to='/bien-etre' className='nav-link ms-3'>Bien-être</NavLink>
                    </li>

                    {/* EVENEMENTS */}
                    <li className="nav-item">
                      <NavLink to='/evenements' className='nav-link ms-3'>Evènements</NavLink>
                    </li>

                    {/* CONTACT */}
                    <li className="nav-item">
                      <NavLink to='/contact' className='nav-link ms-3'>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* BOUTONS INSCRIPTION - CONNEXION - DECONNEXION - MON COMPTE */}
            <div>
              <NavLink to='/mon-compte' className="btn btn-outline-dark ms-2">Mon compte</NavLink>
              <NavLink to='/' className="btn btn-outline-danger ms-2">Deconnexion</NavLink>
            </div>

            <div>
              <NavLink to='/inscription' className="btn btn-outline-dark ms-2">Inscription</NavLink>
              <NavLink to='/connexion' className="btn btn-outline-dark ms-2">Connexion</NavLink>
            </div>

      </nav>
    </>
  )
}
