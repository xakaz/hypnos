import React, { useRef, useState, useEffect, useContext } from "react";
import { connexionContext } from '../../context/connexionContext';
import { NavLink } from "react-router-dom";
import { ConnexionContext } from "../../context/connexionContext";

import axios from "axios"

export default function Connexion() {

  ///////////// CONSTANTES
  const [validation, setValidation] = useState('')
  const [successMessage, SetSuccessMessage] = useState(false)
  const [mails, setMails] = useState([]);
  const inputs = useRef([])
  const { isConnected, setIsConnected, setRole } = useContext(ConnexionContext)

  ///////////// RECUPERATION DES INPUTS
  const addInputs = element => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element)
    }
  }

  //////////////////RECUPERATION DES EMAILS
  useEffect(() => {
    axios.get("http://localhost/server/back/email")
      .then(response => {
        setMails(response.data.map(mail => { return (mail.user_mail) }))
      })
      .catch(err => console.log(err))
  }, [])

  ////////////////////////////////////// SOUMISSION DU FORMULAIRE
  const handleSubmit = (e) => {
    e.preventDefault()
    //////////////// VERIF EMAIL
    if (!mails.includes(inputs.current[0].value)) {
      setValidation('L\'adresse mail n\'existe pas')
    } else if (inputs.current[1].value === "") {
      setValidation("Le mot de passe est vide")
    } else {
      const data = {
        email: inputs.current[0].value,
        password: inputs.current[1].value
      }
      SetSuccessMessage(true)
      setValidation("")
      axios.post('http://localhost/server/back/connexion', data)
        .then(response => {
          if (typeof (response.data) === "object") {
            setIsConnected(true)
            switch (response.data.user_role) {
              case 1: setRole(1);
                break;
              case 2: setRole(2);
                break;
              case 3: setRole(3);
                break;
              default: setIsConnected(false);
            }
          } else {
            setValidation(response.data)
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        {
          isConnected ?

        // FORMULAIRE 
        <div className="my-5 text-light w-50">
          <form className="p-4" onSubmit={handleSubmit}>
            <h4 className="text-center border-bottom border-top p-2 mb-3">CONNEXION</h4>
            {/** MAIL */}
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">Adresse mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={addInputs}
                required
              />
            </div>

            {/** ¨PASSWORD */}
            <div className="mb-3 ">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                ref={addInputs}
                required
              />
            </div>
            <p className="text-danger">{validation}</p>

            {/** BOUTON */}
            <button type="submit" className="btn btn-outline-light">Se connecter</button>
          </form>
        </div>
        :
        <div >
          <h1 className="text-center text-white">Vous êtes Connecté !</h1>
          <NavLink to="/mon-compte" className="text-center text-white">Mon compte</NavLink>

        </div>
        }
      </div>
    </>
  );
}

