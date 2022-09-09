import React, { useContext } from 'react'
import Logo from '../assets/componentsAssets/Navbar/logoHotel.jpg'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'

export default function Navbar() {

  const { toggleModals, currentUser } = useContext(UserContext)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      window.location.reload();
      navigate("/")
    } catch (error) {
      alert("Déconnexion impossible, veuillez réessayer plus tard")
    }
  }

  return (
    <>
      <nav className="navbar  navbar-light bg-light px-4" style={{ zIndex: "2" }}>

        {/* LOGO */}
        <div>
          <a href="/">
            <img src={Logo} alt="hypnosLogo" style={{ height: "50px" }} className='img-fluid' />
          </a>
        </div>

        {/* ONGLETS PAGES */}
        <div>
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <div>

                {/* BOUTON RESPONSIVE*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
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

                    {/* RESERVATIONS */}
                    <li className="nav-item">
                      <NavLink to='/reservation' className='nav-link ms-3'>Réservation</NavLink>
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

        {
          currentUser ?
            <div>
              <NavLink to='/mon-compte' className="btn btn-outline-dark ms-2">
                Mon compte
              </NavLink>
              <button className="btn btn-outline-danger ms-2"
                onClick={logOut}>
                Deconnexion
              </button>
            </div>
            :
            <div>
              <button className="btn btn-outline-dark ms-2"
                onClick={() => toggleModals("inscription")}>
                Inscription
              </button>
              <button className="btn btn-outline-dark ms-2"
                onClick={() => toggleModals("connexion")}>
                Connexion
              </button>
            </div>
        }

      </nav>
    </>
  )
}
