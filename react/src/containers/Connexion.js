import React, { useRef, useState, useEffect, useContext } from "react";
import { connexionContext } from '../context/connexionContext';
import { NavLink } from "react-router-dom";

import axios from "axios"

export default function Connexion() {
  
   ///////////// CONSTANTES
   const [validation, setValidation] = useState('')
   const [successMessage, SetSuccessMessage] = useState(false)
   const [mails, setMails] = useState([]);
   const inputs = useRef([])
   const formRef = useRef()
 
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
   }, [])
   console.log(mails)
   ////////////////////////////////////// SOUMISSION DU FORMULAIRE
   const handleSubmit = (e) => {
     e.preventDefault()
     /////////////////// LONGUEUR PASSWORD
     if ((inputs.current[3].value.length || inputs.current[4].value.length) < 8) {
       setValidation("8 caractères minimum !")
       return;
     }
     if ((inputs.current[3].value.length || inputs.current[4].value.length) > 20) {
       setValidation("20 caractères maximum !")
       return;
     }
     ////////////////// PASSORD MATCH
     else if ((inputs.current[3].value !== inputs.current[4].value)) {
       setValidation("Les mots de passe sont différents")
       return;
     }
 
     ////////////////VERIF EMAIL
     if (mails.includes(inputs.current[0].value)) {
       setValidation('L\'adresse mail existe déjà')
     } else {
       const data = {
         email: inputs.current[0].value,
         password: inputs.current[1].value
       }
       SetSuccessMessage(true)
       setValidation("")
       formRef.current.reset()
       // axios.post('http://localhost/server/back/connexion', data)
       console.log("connexion validée")
     }
   }

  return (
    <>
      <div className="container d-flex justify-content-center">

        {/** FORMULAIRE */}
        <div className="my-5 text-light w-50">
          <form className="p-4">
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
              />
            </div>
            <div className="text-danger mb-3">texte erreur</div>

            {/** BOUTON */}
            <button type="submit" className="btn btn-outline-light">Se connecter</button>
          </form>
        </div>

      </div>
    </>
  );
}

